
import { TodoEntity } from './types';
import { Button } from 'primereact/button';
import { Checkbox } from "primereact/checkbox";


const Todo = ({ todo, toggleComplete, deleteTodo }: { todo: TodoEntity, toggleComplete: (todo: TodoEntity) => void, deleteTodo: (id: string) => void }) => {
  return (

    <div className="flex col-12 mt-2" key={todo.id}>
      <div className="flex-1 flex flex-column gap-2 xl:mr-8">
        <div className="flex flex-grow-1">
          <Checkbox itemID='task' onChange={() => toggleComplete(todo)} checked={todo.completed}></Checkbox>
          <label htmlFor="task" className="ml-2">{todo.text}</label>
        </div>
        {/* <div className='flex gap-2'>
          <div className="flex align-items-center gap-1">
            <i className="pi pi-tag text-sm"></i>
            <span>Test</span>
          </div>
          <div className="flex align-items-center gap-1">
            <i className="pi pi-tag text-sm"></i>
            <span>Test 2</span>
          </div>
        </div> */}

      </div>

      <Button icon="pi pi-trash" onClick={() => deleteTodo(todo.id)} className="p-button-warning" />
    </div>

  );
};

export default Todo;