import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ProductWidgetDomain } from "../../types/types";
import { fetchData } from "../../utils";

interface ProductWidgetState {
    products: ProductWidgetDomain[];
}

const initialState: ProductWidgetState = {
    products: [],
};

export const fetchProducts = createAsyncThunk(
    "productWidgets/fetchProducts",
    async () => {
        const response = await fetchData();
        return response.data;
    }
);

export const productWidgetsSlice = createSlice({
    name: "productWidgets",
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<ProductWidgetDomain[]>) => {
            state.products.push(
                ...action.payload.map((product) => ({
                    ...product,
                }))
            );
        },
        updateProductActive: (
            state,
            action: PayloadAction<{ id: number; active: boolean }>
        ) => {
            const { id, active } = action.payload;
            const productToUpdate = state.products.find(
                (product) => product.id === id
            );
            state.products.forEach((widget) => (widget.active = false));

            if (productToUpdate) {
                productToUpdate.active = active;
            }
        },
        updateWidgetLinked: (
            state,
            action: PayloadAction<{ id: number; linked: boolean }>
        ) => {
            const { id, linked } = action.payload;
            const widgetToUpdate = state.products.find(
                (widget) => widget.id === id
            );

            if (widgetToUpdate) {
                widgetToUpdate.linked = linked;
            }
        },
        updateWidgetColor: (
            state,
            action: PayloadAction<{
                id: number;
                selectedColor: "white" | "black" | "blue" | "green" | "beige";
            }>
        ) => {
            const { id, selectedColor } = action.payload;
            const widgetToUpdate = state.products.find(
                (widget) => widget.id === id
            );

            if (widgetToUpdate) {
                widgetToUpdate.selectedColor = selectedColor;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products.push(
                ...action.payload.map((product) => ({ ...product }))
            );
        });
    },
});

export const {
    addProducts,
    updateProductActive,
    updateWidgetLinked,
    updateWidgetColor,
} = productWidgetsSlice.actions;

export const selectProducts = (state: RootState) =>
    state.productWidgets.products;

export default productWidgetsSlice.reducer;
