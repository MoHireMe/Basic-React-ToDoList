/* eslint-disable react/prop-types */
import styles from "./todoitem.module.css";

export default function TodoItem({ item, todoList, setTodoList }) {
  const handleDelete = (item) => {
    setTodoList(todoList.filter((todo) => todo !== item));
  };

  const handleClick = (name) => {
    const arr = todoList.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodoList(arr);
  };
  const itemStyle = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={itemStyle} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <button onClick={() => handleDelete(item)} className={styles.delbtn}>
          X
        </button>
      </div>

      <hr className={styles.hr} />
    </div>
  );
}
