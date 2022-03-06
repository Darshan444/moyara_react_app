import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function ListPage(props) {

  return (
    <div className={styles.grid}>
      {props.productList?.map((p, i) => (
        <Link href={`/detail/${p.id}`}>
          <span className={styles.card} key={i}>
            <img
              src={
                p.image
              }
              height={300}
              width={250}
            />
            <h2>{p.title}</h2>
            <p>{p.start_date} - {p.end_date}</p>
          </span>
        </Link>
      ))}

    </div>
  );
}
