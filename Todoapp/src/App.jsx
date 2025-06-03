import { useState } from "react";
import Todo from "./components/Todo";
import ToDotItem from "./components/Todoitem";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Todo />
      <ToDotItem />
    </>
  );
}

export default App;
