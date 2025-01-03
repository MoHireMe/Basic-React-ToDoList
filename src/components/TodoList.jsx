/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useRef } from "react";
import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todoList, setTodoList }) {
  const listref = useRef(null);
  const sortedTodos = todoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  useEffect(() => {
    if (!todoList.length) {
      listref.current.style.display = "none";
    } else {
      listref.current.style.display = "block";
    }
  });

  return (
    <div ref={listref} className={styles.todolist}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}
