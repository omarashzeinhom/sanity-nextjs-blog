import { Nav, Header } from "./components";
import styles from "../styles/Home.module.css";

export default function articles() {
  return (
    <div className={styles.container}>
      <Header />

      <Nav />
      <h2>Articles</h2>
    </div>
  );
}
