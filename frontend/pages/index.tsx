import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header, Nav } from "./components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <h2>Home</h2>
    </div>
  );
}
