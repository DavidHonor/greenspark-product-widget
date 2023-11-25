import { useEffect, useRef } from "react";
import ProductWidgets from "./components/ProductWidgets";

import { Loader2 } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import {
    fetchProducts,
    selectProducts,
} from "./features/widgets/productWidgetsSlice";
import { AppDispatch } from "./app/store";

const App = () => {
    const dispatch: AppDispatch = useDispatch();
    const products = useSelector(selectProducts);

    const isFetchingRef = useRef(false);

    useEffect(() => {
        const fetchDataAndDispatch = async () => {
            try {
                if (!isFetchingRef.current) {
                    isFetchingRef.current = true;
                    await dispatch(fetchProducts());
                }
            } finally {
                isFetchingRef.current = false;
            }
        };
        if (!products || products.length === 0) {
            fetchDataAndDispatch();
        }
    }, [dispatch, products]);

    return (
        <div className="top-0 left-0 flex w-[100vw] h-[100vh] items-center justify-center">
            {!products.length || isFetchingRef.current ? (
                <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
                <ProductWidgets data={products} />
            )}
        </div>
    );
};

export default App;
