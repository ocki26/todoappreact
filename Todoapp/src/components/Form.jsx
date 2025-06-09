import { useState } from "react";
import style from "./From.module.css";
const Form = (props) => {
  const { todos, setTodos } = props;
  // const [todo, setTodo] = useState();
  const [todo, setTodo] = useState({ name: "", done: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.name.trim()) return;
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };

  return (
    <>
      <form className={style.todoform} onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <input
            className={style.ModernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="enter to do item"
          />
          <button className={style.moduleButton} type="submit">
            add
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
