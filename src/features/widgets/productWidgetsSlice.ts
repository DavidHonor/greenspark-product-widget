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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products.push(
                ...action.payload.map((product) => ({ ...product }))
            );
        });
    },
});

export const { addProducts } = productWidgetsSlice.actions;

export const selectProducts = (state: RootState) =>
    state.productWidgets.products;

export default productWidgetsSlice.reducer;
