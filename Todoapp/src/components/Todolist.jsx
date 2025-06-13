import TodoItem from "./ItemTodo";
import style from "./Todolist.module.css";
const ToDoList = (props) => {
  const { todos, setTodos } = props;
  const sortToDos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <>
      <div className={style.listitem}>
        {sortToDos.map((item, index) =>
          item && typeof item === "object" && "name" in item ? (
            <TodoItem
              key={index}
              item={item}
              todos={todos}
              setTodos={setTodos}
            />
          ) : null
        )}
      </div>
    </>
  );
};
export default ToDoList;
