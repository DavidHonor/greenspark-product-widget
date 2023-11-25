import React, { ChangeEvent } from "react";

import { ProductWidgetDomain } from "../../types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { updateWidgetLinked } from "../../features/widgets/productWidgetsSlice";
import { cn, getColorCode } from "../../utils";
import { Check } from "lucide-react";

interface CustomCheckboxProps {
    widgetData: ProductWidgetDomain;
}

const CustomCheckbox = ({ widgetData }: CustomCheckboxProps) => {
    const dispatch: AppDispatch = useDispatch();

    const onCheckChanged = () => {
        dispatch(
            updateWidgetLinked({
                id: widgetData.id,
                linked: !widgetData.linked,
            })
        );
    };

    return (
        <div
            className="flex items-center justify-center w-[18px] h-[18px] relative group cursor-pointer"
            style={{
                backgroundColor: widgetData.linked
                    ? getColorCode("green")
                    : "white",
                borderColor: widgetData.linked
                    ? getColorCode("green")
                    : getColorCode("black"),
                borderWidth: "2px",
                borderRadius: "2px",
            }}
            onClick={onCheckChanged}
        >
            {widgetData.linked ? <Check className="text-white" /> : null}

            <div
                className={cn(
                    "pointer-events-none opacity-0 absolute inset-0 transition-opacity duration-300 ease-in-out",
                    {
                        "group-hover:opacity-90": !widgetData.linked,
                    }
                )}
                style={{
                    borderRadius: "50%",
                    backgroundColor: "#afc6bd",
                    height: "30px",
                    width: "30px",
                    margin: "-8px",
                }}
            />
        </div>
    );
};

export default CustomCheckbox;
