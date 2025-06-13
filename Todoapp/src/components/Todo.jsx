import { useState } from "react";
import Todoitem from "./ItemTodo";
import Form from "./Form";
import ToDoList from "./Todolist";
import Footer from "./Footer";
/** @param {Event} e */
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completed = todos.filter((todo) => todo.done).length;
  const totalTodo = todos.length;
  return (
    <>
      <div>
        <Form todos={todos} setTodos={setTodos} />
        <ToDoList todos={todos} setTodos={setTodos} />
        <Footer completed={completed} totalTodo={totalTodo} />
      </div>
    </>
  );
};
export default Todo;
