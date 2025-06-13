import { useState } from "react";
import Todo from "./components/Todo";
import TodoItem from "./components/ItemTodo";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Todo />
      <TodoItem />
    </>
  );
}

export default App;
