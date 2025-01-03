import { useState } from "react";
import styles from "./form.module.css";
// eslint-disable-next-line react/prop-types
export default function Form({ todoList, setTodoList }) {
  const [todos, setTodos] = useState({ name: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todos.name === "") {
      alert("Please enter a todo");
      return;
    }
    console.log("todos", todos);
    setTodoList([...todoList, todos]);
    setTodos({ name: "", done: false });
  };
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.todoformcontainer}>
        <input
          className={styles.todoinput}
          onChange={(e) => setTodos({ name: e.target.value, done: false })}
          value={todos.name}
          type="text"
          placeholder="Add a todo"
        />
        <button className={styles.todobtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
