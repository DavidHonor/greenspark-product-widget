import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ProductWidgetDomain } from "../../types/types";

interface ProductWidgetState {
    fetchStatus: "pending" | "rejected" | "fulfilled";
    products: ProductWidgetDomain[];
}

const initialState: ProductWidgetState = {
    fetchStatus: "pending",
    products: [],
};

export const fetchProducts = createAsyncThunk(
    "productWidgets/fetchProducts",
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const apiUrl = process.env?.REACT_APP_API_URL;

            if (!apiUrl)
                throw new Error(
                    "REACT_APP_API_URL is not defined in the environment variables"
                );

            const response = await fetch(apiUrl);

            if (!response.ok) return rejectWithValue(response.status);

            const data: ProductWidgetDomain[] = await response.json();

            return fulfillWithValue(data);
        } catch (error) {
            throw rejectWithValue(error);
        }
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
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products.push(
                    ...action.payload.map((product) => ({ ...product }))
                );
                state.fetchStatus = "fulfilled";
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.fetchStatus = "rejected";
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

export const selectFetchStatus = (state: RootState) =>
    state.productWidgets.fetchStatus;

export default productWidgetsSlice.reducer;
