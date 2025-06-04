import { useState } from "react";
import ToDotItem from "./Todoitem";
import Form from "./Form";
import ToDoList from "./Todolist";
/** @param {Event} e */
const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div>
        <Form todos={todos} setTodos={setTodos} />
        <ToDoList todos={todos} />
      </div>
    </>
  );
};
export default Todo;
