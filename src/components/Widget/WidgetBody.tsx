import { ProductWidgetDomain } from "../../types/types";
import { getColorCode } from "../../utils";
import BadgeColorSelect from "../BadgeColorSelect/BadgeColorSelect";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import CustomToggle from "../CustomToggle/CustomToggle";

import Popover from "../Popover/Popover";

interface WidgetBodyProps {
    widgetData: ProductWidgetDomain;
}

const WidgetBody = ({ widgetData }: WidgetBodyProps) => {
    const textColor = getColorCode("green");

    return (
        <div className="flex flex-col" style={{ color: textColor }}>
            <div className="flex justify-between">
                <div className="flex">
                    Link to Public Profile <Popover />
                </div>
                <div className="flex">
                    <CustomCheckbox widgetData={widgetData} />
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex">Badge colour</div>
                <div className="flex gap-1">
                    <BadgeColorSelect widgetData={widgetData} />
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex">Activate badge</div>
                <div className="flex">
                    <CustomToggle widgetData={widgetData} />
                </div>
            </div>
        </div>
    );
};

export default WidgetBody;
