import ToDotItem from "./Todoitem";
const ToDoList = (props) => {
  const { todos } = props;
  return (
    <>
      <div>
        {" "}
        {todos.map((item) => (
          <ToDotItem key={item} item={item} />
        ))}
      </div>
    </>
  );
};
export default ToDoList;
