// import { useLoading } from "context/LoadingContext/loadingContext";
// import { catlogPagination, catlogSortBy } from "lib/catlog/catlog";
// import { CatlogModel, Row } from "lib/catlog/CatlogModel";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getExhibitionList, getExhibitionDetailById } from "../lib/exhibitionApi"

export function useExhibition() {
    const router = useRouter();
    const [productList, setProductList] = useState([]);
    // const { showLoading, hideLoading } = useLoading();
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setHasMore(true);
        // loadMore()
    }, []);

    const loadMore = async () => {

        // setLoading(true);
        // if (currentPage < productList.length / 10 + 1) {
        // showLoading();
        try {

            let postData = {
                "currentPage": currentPage,
                "itemsPerPage": 10,
            }

            const d = await getExhibitionList(
                postData
            );

            // console.log("d.data.data.rows=>", d.data.data.rows);
            let p = [...productList, ...d.data.data.rows];

            setProductList(p);
            setCurrentPage(currentPage + 1);
            if (p.length < data.data.count) {
                setHasMore(true);
            } else {
                setHasMore(false);
            }
            // hideLoading();
            //   setLoading(false);
        } catch (error) {
            setError(true);
            //   setLoading(false);
        }

        // }
    };

    // console.log("productList=>",productList);
    return { productList, loadMore, hasMore, loading, error };
}

