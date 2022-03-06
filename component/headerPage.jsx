import styles from "../styles/Home.module.css";

export default function HeaderPage(props) {
  return <div className={styles.headerBox}>{props?.name}</div>;
}
