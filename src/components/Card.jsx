import styles from "./Card.module.css";
import { useEffect } from "react";

export function Card({ title, text }) {
  useEffect(() => {
    console.log("Card mounted");
    return () => {
      console.log("Card unmounted");
    };
  }, []);

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
