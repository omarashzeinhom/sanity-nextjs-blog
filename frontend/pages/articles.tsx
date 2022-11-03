import { SideNav, Header } from "./components";
import { Articles } from "./articles/index";
import styles from "../styles/Home.module.css";


export default function articles() {
  return (
    <div className={styles.container}>
      <Header />
      <SideNav/>
      <h2>Articles</h2>
      <Articles/>
    </div>
  );
}
