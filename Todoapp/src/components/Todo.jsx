import { useState } from "react";
import ToDotItem from "./Todoitem";
/** @param {Event} e */
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
          />
          <button type="submit">add</button>
        </form>
        {todos.map((item) => (
          <ToDotItem key={item} item={item} />
        ))}
      </div>
    </>
  );
};
export default Todo;
