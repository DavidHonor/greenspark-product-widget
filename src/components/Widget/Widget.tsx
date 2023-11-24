import React from "react";
import WidgetIcon from "./WidgetIcon";
import { ProductWidgetDomain } from "../../types/types";
import { getColorCode } from "../../utils";
import WidgetHeader from "./WidgetHeader";

interface WidgetProps {
    widgetData: ProductWidgetDomain;
}

const Widget = ({ widgetData }: WidgetProps) => {
    return (
        <div className="flex rounded-md p-5">
            <WidgetHeader widgetData={widgetData} />
        </div>
    );
};

export default Widget;
