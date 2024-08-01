import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodo) => {
    setTodos([...todos, { id: todos.length + 1, title: newTodo }]);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm addNewTodo={addNewTodo} />
      {todos.map((todo, index) => {
        return (
          <Todo todo={todo} deleteHandler={deleteHandler} key={index} />
        );
      })}
    </div>
  );
}

function TodoForm({ addNewTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input id="input" value={inputValue} onChange={handleInputChange} />
      <button onClick={() => addNewTodo(inputValue)}>add todo</button>
    </div>
  );
}

function Todo({ todo, deleteHandler }) {
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => deleteHandler(todo.id)}>delete</button>
    </div>
  );
}

export default App;
