import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rafayel Amirkhanyan</title>
        <meta property="og:title" content="Rafayel Amirkhanyan" />
        <meta property="og:site_name" content="Rafayel Amirkhanyan Portfolio" />
        <meta property="og:url" content="https://rafayel.vercel.app/" />
        <meta
          property="og:description"
          content="Hi! My name is Rafayel Amirkhanyan and here is my home on the internet!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cursor}>
        <h1 className={styles.example}>
          Under construction <span className={styles.construction}>🚧</span>
        </h1>
      </div>
      <h3>
        Meanwhile, you can checkout my old portfolio{" "}
        <a href="https://gitter499.github.io/">
          <span className={styles.exampleLink}>here</span>
        </a>
      </h3>
    </div>
  );
}
