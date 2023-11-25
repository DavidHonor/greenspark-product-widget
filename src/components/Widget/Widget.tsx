import React from "react";
import WidgetIcon from "./WidgetIcon";
import { ProductWidgetDomain } from "../../types/types";
import { getColorCode } from "../../utils";
import WidgetHeader from "./WidgetHeader";
import WidgetBody from "./WidgetBody";

interface WidgetProps {
    widgetData: ProductWidgetDomain;
}

const Widget = ({ widgetData }: WidgetProps) => {
    return (
        <div className="flex flex-col rounded-md gap-2 font-normal text-sm basis-1/3">
            <WidgetHeader widgetData={widgetData} />
            <WidgetBody widgetData={widgetData} />
        </div>
    );
};

export default Widget;
