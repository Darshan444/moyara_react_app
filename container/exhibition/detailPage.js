import styles from "../../styles/Home.module.css";
import HeaderPage from "../../component/headerPage";
import DetailPage from "../../component/detailPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useExhibition } from "../../hooks/useExhibition";
import { getExhibitionDetailById } from "../../lib/exhibitionApi";

export default function ExhibitionDetail() {
  const { isFallback, pathname, query, asPath, push } = useRouter();

  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    if (query.detail != undefined) getData(query.detail[1]);
    // loadMore()
  }, [query?.detail]);
  const getData = async (id) => {
    try {
      const d = await getExhibitionDetailById(id);

      setProductDetail(d.data.data);
    } catch (error) {
      //   setError(true);
      //   setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <HeaderPage name={"Exhibition!"} />
      <DetailPage productDetail={productDetail} />
    </main>
  );
}
