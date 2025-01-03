import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const completed = todoList.filter((todo) => todo.done).length;
  const totalTodos = todoList.length;

  return (
    <div className="Todo">
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <Footer completed={completed} totalTodos={totalTodos} />
    </div>
  );
}
