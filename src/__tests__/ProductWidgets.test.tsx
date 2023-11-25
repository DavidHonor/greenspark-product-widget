import React from "react";
import { render, screen } from "@testing-library/react";
import ProductWidgets from "../components/ProductWidgets";

import { getMockData } from "./mockdata";

import { Provider } from "react-redux";
import { store } from "../app/store";

test("test widgets are rendered correctly", () => {
    const { getByText } = render(
        <Provider store={store}>
            <ProductWidgets data={getMockData()} />
        </Provider>
    );

    const widget1Effect = getByText(/100 plastic bottles/i);
    expect(widget1Effect).toBeInTheDocument();

    const widget2Effect = getByText(/10 trees/i);
    expect(widget2Effect).toBeInTheDocument();

    const widget3Effect = getByText(/20kgs of carbon/i);
    expect(widget3Effect).toBeInTheDocument();
});
