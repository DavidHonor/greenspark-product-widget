import React, { ChangeEvent } from "react";
import "./CustomCheckbox.css";
import { ProductWidgetDomain } from "../../types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { updateWidgetLinked } from "../../features/widgets/productWidgetsSlice";

interface CustomCheckboxProps {
    widgetData: ProductWidgetDomain;
}

const CustomCheckbox = ({ widgetData }: CustomCheckboxProps) => {
    const dispatch: AppDispatch = useDispatch();

    const checkChanged = (change: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            updateWidgetLinked({
                id: widgetData.id,
                linked: !widgetData.linked,
            })
        );
    };

    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                checked={widgetData.linked}
                onChange={checkChanged}
            />
        </div>
    );
};

export default CustomCheckbox;
