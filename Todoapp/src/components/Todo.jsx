import { useState } from "react";
import Todoitem from "./ItemTodo";
import Form from "./Form";
import ToDoList from "./Todolist";
/** @param {Event} e */
const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div>
        <Form todos={todos} setTodos={setTodos} />
        <ToDoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};
export default Todo;
