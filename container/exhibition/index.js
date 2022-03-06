import styles from "../../styles/Home.module.css";
import HeaderPage from "../../component/headerPage";
import ListPage from "../../component/listPage";
// import Loading from "../../component/UI/Loading/Loading";
import useInfiniteScroll from "react-infinite-scroll-hook";

import { useExhibition } from "../../hooks/useExhibition";

export default function ExhibitionList() {
  const { productList, loadMore, hasMore, loading, error } = useExhibition();
  // console.log("loading=>",loading);
  // console.log("hasMore=>",hasMore);
  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage: hasMore,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <main className={styles.main}>
      <HeaderPage name={"Exhibition!"} />
      
      <div ref={rootRef}>
        <ListPage productList={productList} />
        {(loading || hasMore) && (
          <div ref={sentryRef}>
            {/* <Loading /> */}
            
          </div>
        )}
      </div>
    </main>
  );
}
