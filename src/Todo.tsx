import React from 'react';
import { TodoEntity } from './types';
import { Button } from 'primereact/button';
import { Checkbox } from "primereact/checkbox";
// const style = {
//   li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
//   liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
//   row: `flex`,
//   text: `ml-2 cursor-pointer`,
//   textComplete: `ml-2 cursor-pointer line-through`,
//   button: `cursor-pointer flex items-center`,
// };

const Todo = ({ todo, toggleComplete, deleteTodo }: { todo: TodoEntity, toggleComplete: (todo: TodoEntity) => void, deleteTodo: (id: string) => void }) => {
  return (

    <div className="flex col-12 mt-2">
      <div className="flex-1 flex flex-column gap-2 xl:mr-8">
        <div className="flex flex-grow-1   align-items-center">
          <Checkbox onChange={() => toggleComplete(todo)} checked={todo.completed}></Checkbox>
          <label htmlFor="ingredient1" className="ml-2">{todo.text}</label>
        </div>

        {/* <div className="flex align-items-center gap-2">
          <i className="pi pi-tag text-sm"></i>
          <span>{todo.text}</span>
        </div> */}

      </div>

      <Button icon="pi pi-trash" onClick={() => deleteTodo(todo.id)} className="p-button-warning" />
    </div>

  );
};

export default Todo;