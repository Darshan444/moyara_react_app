import Head from "next/head";
import styles from "../styles/Home.module.css";

import ExhibitionDetail from "../container/exhibition/detailPage";
import { useRouter } from "next/router";

export default function Home() {

  return (
    <div className={styles.container}>
   
      <ExhibitionDetail />

    </div>
  );
}
