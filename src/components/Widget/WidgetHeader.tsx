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
    const textColor = "#F9F9F9";

    return (
        <div
            className={`flex rounded-md p-2 gap-2`}
            style={{ backgroundColor: badgeColor, color: textColor }}
        >
            <div className="flex">
                <WidgetIcon fill={iconColor} />
            </div>
            <div className="flex flex-col">
                <div className="flex font-normal text-sm">
                    This product {widgetData.action}
                </div>
                <div className="flex">
                    <h2 className="font-bold text-xl">
                        {widgetData.amount + " " + widgetData.type}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default WidgetHeader;
