import { useEffect, useRef } from "react";
import ProductWidgets from "./components/ProductWidgets";

import { Loader2, XCircle } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import {
    fetchProducts,
    selectFetchStatus,
    selectProducts,
} from "./features/widgets/productWidgetsSlice";
import { AppDispatch } from "./app/store";

const App = () => {
    const dispatch: AppDispatch = useDispatch();

    const products = useSelector(selectProducts);
    const fetchStatus = useSelector(selectFetchStatus);

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

    const renderLogic = () => {
        if (fetchStatus === "pending")
            return <Loader2 className="h-6 w-6 animate-spin" />;
        else if (fetchStatus === "rejected")
            return (
                <div className="flex flex-col justify-center items-center text-red-500">
                    <XCircle className="w-7 h-7" />
                    <span className="text-xl font-bold ">
                        Something went wrong, could not fetch widgets
                    </span>
                </div>
            );

        return <ProductWidgets data={products} />;
    };

    return (
        <div className="top-0 left-0 flex w-[100vw] h-[100vh] items-center justify-center">
            {renderLogic()}
        </div>
    );
};

export default App;
