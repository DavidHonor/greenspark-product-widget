import { getColorCode } from "../../utils";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

import Popover from "../Popover/Popover";

const WidgetBody = () => {
    const textColor = getColorCode("green");

    return (
        <div className="flex flex-col" style={{ color: textColor }}>
            <div className="flex justify-between">
                <div className="flex">
                    Link to Public Profile <Popover />
                </div>
                <div className="flex">
                    <CustomCheckbox />
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex">Badge colour</div>
                <div className="flex">
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex">Activate badge</div>
                <div className="flex">
                    <input type="checkbox" />
                </div>
            </div>
        </div>
    );
};

export default WidgetBody;
