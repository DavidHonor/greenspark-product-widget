import React from "react";
import { ProductWidgetDomain } from "../../types/types";
import { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { updateWidgetColor } from "../../features/widgets/productWidgetsSlice";
import { getColorCode, getIconColor } from "../../utils";

interface BadgeColorSelectProps {
    widgetData: ProductWidgetDomain;
}

type options = "white" | "black" | "blue" | "green" | "beige";

const BadgeColorSelect = ({ widgetData }: BadgeColorSelectProps) => {
    const dispatch: AppDispatch = useDispatch();

    const colorChanged = (colorName: options) => {
        dispatch(
            updateWidgetColor({ id: widgetData.id, selectedColor: colorName })
        );
    };

    const colors: options[] = ["blue", "green", "beige", "white", "black"];

    return (
        <>
            {colors.map((item) => {
                const selected = widgetData.selectedColor === item;
                let border = selected ? 2 : 0;

                return (
                    <div
                        key={`select_${item}`}
                        className={`flex w-[16px] h-[16px] relative group`}
                        style={{
                            backgroundColor: getColorCode(item),
                            borderWidth: `${border}px`,
                            borderColor: `#B0B0B0`,
                        }}
                        onClick={() => colorChanged(item)}
                    >
                        <div
                            className={
                                "absolute inset-0 opacity-0 group-hover:opacity-20"
                            }
                            style={{ backgroundColor: getIconColor(item) }}
                        ></div>
                    </div>
                );
            })}
        </>
    );
};

export default BadgeColorSelect;
