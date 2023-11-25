import React from "react";
import { ProductWidgetDomain } from "../../types/types";
import { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { updateWidgetColor } from "../../features/widgets/productWidgetsSlice";

interface BadgeColorSelectProps {
    widgetData: ProductWidgetDomain;
}

const BadgeColorSelect = ({ widgetData }: BadgeColorSelectProps) => {
    const dispatch: AppDispatch = useDispatch();

    const colorChanged = (
        colorName: "white" | "black" | "blue" | "green" | "beige"
    ) => {
        dispatch(
            updateWidgetColor({ id: widgetData.id, selectedColor: colorName })
        );
    };

    return (
        <>
            <input
                type="checkbox"
                checked={widgetData.selectedColor === "blue"}
                onChange={() => colorChanged("blue")}
            />
            <input
                type="checkbox"
                checked={widgetData.selectedColor === "green"}
                onChange={() => colorChanged("green")}
            />
            <input
                type="checkbox"
                checked={widgetData.selectedColor === "beige"}
                onChange={() => colorChanged("beige")}
            />
            <input
                type="checkbox"
                checked={widgetData.selectedColor === "white"}
                onChange={() => colorChanged("white")}
            />
            <input
                type="checkbox"
                checked={widgetData.selectedColor === "black"}
                onChange={() => colorChanged("black")}
            />
        </>
    );
};

export default BadgeColorSelect;
