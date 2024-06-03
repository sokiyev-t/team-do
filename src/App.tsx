
import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { TodoEntity } from './types';
import { db } from './firebase';
import './App.css'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import MyToolBar from './MyToolBar';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataView } from 'primereact/dataview';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `col-12 align-items-center `,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

function App() {
  const [todos, setTodos] = useState<TodoEntity[]>([]);
  const [input, setInput] = useState('');

  // Create todo
  const createTodo = async (e: { preventDefault: (arg0: unknown) => void; }) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    });
    setInput('');
  };

  // Read todo from firebase
  useEffect(() => {
    // setTodos([]);
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArr: TodoEntity[] = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data() as { text: string, completed: boolean }, id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo: TodoEntity) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, 'todos', id));
  };


  const listTemplate = (items: TodoEntity[]) => {
    if (!items || items.length === 0) return null;
    const list = items.map((product, index) => {
      return <Todo
        key={index}
        todo={product}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />;
    });

    return <div className="grid">{list}</div>;
  };

  return (
    <div className="col-12 md:col-10">
      <MyToolBar />
      <div className="card">
        <TabView>
          <TabPanel header="В ожидании">
            <div className={style.container}>
              <form onSubmit={createTodo} className={style.form}>
                <div className="p-inputgroup flex-1">
                  <InputText value={input}
                    onChange={(e) => setInput(e.target.value)} placeholder="Добавить задачу" />
                  <Button icon="pi pi-plus" className="p-button-warning" />
                </div>
              </form>

              <DataView value={todos.filter((t) => !t.completed)} listTemplate={listTemplate} />
              {/* <ul>
                {todos.map((todo, index) => (
                  <Todo
                    key={index}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                  />
                ))}
              </ul> */}
              {todos.length < 1 ? null : (
                <p className={style.count}>{`У вас ${todos.filter((t) => !t.completed).length} не выполненных задач`}</p>
              )}
            </div>

          </TabPanel>
          <TabPanel header="Выполненно">
            <DataView value={todos.filter((t) => t.completed)} listTemplate={listTemplate} />

          </TabPanel>

        </TabView>
      </div>


    </div>

  )
}

export default App
