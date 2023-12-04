import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addTodo, strikeTodo, deleteTodo} from "./actions"

function App() {
  const todos = useSelector((state) => state);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleAddButton () {
    if(text.trim() !== ""){
      dispatch(addTodo(text));
      setText("");
    }
  }

  function handleCheck  (id) {
    dispatch(strikeTodo(id));
  }

  function handleDeleteButton(id) {
    dispatch(deleteTodo(id))
  }
  return (
    <>
      <h1> TO DO</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddButton}>ADD</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" onChange={() => handleCheck(todo.id)} />
            <span style={{textDecoration: todo.completed ? "line-through"  : "none"}}span> {todo.text}</span>
            <button onClick={() => handleDeleteButton(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
