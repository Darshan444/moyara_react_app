import styles from "../styles/Home.module.css";
import { useRouter } from "next/router"

export default function DetailPage(props) {
    const router = useRouter()
    return (
        <>
            <button onClick={() => router.back()}>Go Back</button>
            <div className={styles.detailPage}>

                <div className={styles.row}>
                    <div className={styles.column} >
                        <a href="https://nextjs.org/docs" className={""} >
                            <img
                                src={
                                    props.productDetail.image
                                }
                                height={300}
                                width={250}
                            />

                        </a>
                    </div>
                    <div className={styles.column} >
                        <h2>{props.productDetail.title}</h2>
                        <p>{props.productDetail.start_date} - {props.productDetail.end_date}</p>
                    </div>
                </div>

            </div>
        </>
    );
}
