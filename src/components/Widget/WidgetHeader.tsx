import React from "react";
import { getColorCode, getIconColor } from "../../utils";
import WidgetIcon from "./WidgetIcon";
import { ProductWidgetDomain } from "../../types/types";

interface WidgetHeaderProps {
    widgetData: ProductWidgetDomain;
}
const WidgetHeader = ({ widgetData }: WidgetHeaderProps) => {
    const badgeColor = getColorCode(widgetData.selectedColor);
    const iconColor = getIconColor(widgetData.selectedColor);

    const printAmount = () => {
        if (widgetData.type === "carbon")
            return `${widgetData.amount}kgs of ${widgetData.type}`;
        return `${widgetData.amount} ${widgetData.type}`;
    };

    return (
        <div
            className={`flex rounded-md p-2 gap-2`}
            style={{ backgroundColor: badgeColor, color: iconColor }}
        >
            <div className="flex">
                <WidgetIcon fill={iconColor} />
            </div>
            <div className="flex flex-col gap-1">
                <div
                    className="flex font-normal"
                    style={{ fontSize: "0.776rem" }}
                >
                    This product {widgetData.action}
                </div>
                <div
                    className="flex font-bold"
                    style={{ fontSize: "1.116rem" }}
                >
                    {printAmount()}
                </div>
            </div>
        </div>
    );
};

export default WidgetHeader;
