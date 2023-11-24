import { useEffect, useState } from "react";
import ProductWidgets from "./components/ProductWidgets";
import { ProductWidgetDomain } from "./types/types";
import { fetchData } from "./utils";
import { Loader2 } from "lucide-react";

const App = () => {
    const [data, setData] = useState<ProductWidgetDomain[]>();

    const getWidgetData = async () => {
        const result = await fetchData();
        if (result.status === "ok") setData(result.data);
    };

    useEffect(() => {
        getWidgetData();
    }, []);

    return (
        <div className="top-0 left-0 flex w-[100vw] h-[100vh] items-center justify-center">
            {!data ? (
                <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
                <ProductWidgets data={data} />
            )}
        </div>
    );
};

export default App;
