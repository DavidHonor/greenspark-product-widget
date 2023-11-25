import { useEffect, useRef } from "react";
import ProductWidgets from "./components/ProductWidgets";

import { Loader2, XCircle } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import {
    fetchProductWidgets,
    selectFetchStatus,
    selectProductWidgets,
} from "./features/widgets/productWidgetsSlice";
import { AppDispatch } from "./app/store";

const App = () => {
    const dispatch: AppDispatch = useDispatch();

    const productWidgets = useSelector(selectProductWidgets);
    const fetchStatus = useSelector(selectFetchStatus);

    const isFetchingRef = useRef(false);

    useEffect(() => {
        const fetchAndDispatch = async () => {
            try {
                if (!isFetchingRef.current) {
                    isFetchingRef.current = true;
                    await dispatch(fetchProductWidgets());
                }
            } finally {
                isFetchingRef.current = false;
            }
        };
        if (!productWidgets || productWidgets.length === 0) {
            fetchAndDispatch();
        }
    }, [dispatch, productWidgets]);

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

        return <ProductWidgets data={productWidgets} />;
    };

    return (
        <div className="top-0 left-0 flex w-[100vw] h-[100vh] items-center justify-center">
            {renderLogic()}
        </div>
    );
};

export default App;
