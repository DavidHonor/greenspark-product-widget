import { ProductWidgetDomain } from "../../types/types";

import "./Toggle.css";
import Toggle from "react-toggle";
import { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { updateWidgetActive } from "../../features/widgets/productWidgetsSlice";

interface CustomToggleProps {
    widgetData: ProductWidgetDomain;
}

const CustomToggle = ({ widgetData }: CustomToggleProps) => {
    const dispatch: AppDispatch = useDispatch();

    const toggleChange = () => {
        dispatch(
            updateWidgetActive({
                id: widgetData.id,
                active: !widgetData.active,
            })
        );
    };

    return (
        <Toggle
            checked={widgetData.active}
            onChange={toggleChange}
            icons={false}
        />
    );
};

export default CustomToggle;
