import TodoItem from "./ItemTodo";
import style from "./Todolist.module.css";
const ToDoList = (props) => {
  const { todos, setTodos } = props;
  return (
    <>
      <div className={style.listitem}>
        {todos
          .filter((item) => item && item.name && item.name.trim() !== "")
          .map((item) => (
            <TodoItem
              key={item.name}
              item={item}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </div>
    </>
  );
};
export default ToDoList;
