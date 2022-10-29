import { Nav, Header } from "./components";
import { Articles } from "./container";
import styles from "../styles/Home.module.css";


export default function articles() {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <h2>Articles</h2>
      <Articles/>
    </div>
  );
}
