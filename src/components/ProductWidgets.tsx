import Widget from "./Widget/Widget";
import { ProductWidgetDomain } from "../types/types";

interface ProductWidgetsProps {
    data: ProductWidgetDomain[];
}

const ProductWidgets = ({ data }: ProductWidgetsProps) => {
    return (
        <div
            className="flex flex-col w-[350px] md:w-[850px] shadow-2xl rounded-md py-6 px-8"
            style={{ backgroundColor: "#F9F9F9" }}
        >
            <div className="flex py-2">
                <h2 className="font-bold text-3xl">Per product widgets</h2>
            </div>

            <div
                className="border-t-2 py-2"
                style={{ borderColor: "#B0B0B0" }}
            />

            <div className="flex flex-col gap-12 px-4 md:px-0 md:flex-row md:pb-24">
                {data.map((widget) => (
                    <Widget key={`widget_${widget.id}`} widgetData={widget} />
                ))}
            </div>
        </div>
    );
};

export default ProductWidgets;
