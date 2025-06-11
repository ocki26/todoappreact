import style from "./Todoitem.module.css";

const TodoItem = (props) => {
  const { item, todos, setTodos } = props;

  const handleDelete = (item) => {
    console.log("delete button ", item);
    setTodos(todos.filter((todo) => todo !== item));
  };
  const handleClick = (name) => {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  };
  const Style = item && item.done ? style.completed : "";

  return (
    <>
      <div className={style.item}>
        <div className={style.itemName}>
          <span className={Style} onClick={() => handleClick(item.name)}>
            {item && item.name ? item.name : ""}
          </span>

          <span>
            <button
              onClick={() => handleDelete(item)}
              className={style.DeleteButton}
            >
              X
            </button>
          </span>
        </div>
        <hr className={style.line} />
      </div>
    </>
  );
};

export default TodoItem;
