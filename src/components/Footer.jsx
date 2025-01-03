/* eslint-disable react/prop-types */
import styles from "./footer.module.css";

export default function Footer({ completed, totalTodos }) {
  return (
    <div className={styles.footer}>
      <p className={styles.item}>Completed: {completed}</p>
      <p className={styles.item}>Total: {totalTodos}</p>
    </div>
  );
}
