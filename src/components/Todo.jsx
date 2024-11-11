import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      {" "}
      Todo
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button otype="submit">Add</button>
        <div> {todo}</div>
        <div> {todos}</div>
      </form>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
      {console.log(todos)}
      <TodoItem />
    </div>
  );
}
