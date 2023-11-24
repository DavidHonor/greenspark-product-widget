import React from "react";
import { getColorCode } from "../../utils";

const WidgetBody = () => {
    const textColor = getColorCode("green");

    return (
        <div className="flex flex-col" style={{ color: textColor }}>
            <div className="flex justify-between">
                <div className="flex">Link to Public Profile</div>
                <div className="flex">
                    <input type="checkbox" />
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
