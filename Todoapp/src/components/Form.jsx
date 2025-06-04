import { useState } from "react";
import style from "./From.module.css";
const Form = (props) => {
  const { todos } = props;
  const { setTodos } = props;
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  };

  return (
    <>
      <form className={style.todoform} onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <input
            className={style.ModernInput}
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
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
