import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ColorOptions, ProductWidgetDomain } from "../../types/types";
import { findWidgetToUpdate } from "../../utils";

interface ProductWidgetState {
    fetchStatus: "pending" | "rejected" | "fulfilled";
    productWidgets: ProductWidgetDomain[];
}

const initialState: ProductWidgetState = {
    fetchStatus: "pending",
    productWidgets: [],
};

export const fetchProductWidgets = createAsyncThunk(
    "productWidgets/fetchProductWidgets",
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
        addProductWidgets: (
            state,
            action: PayloadAction<ProductWidgetDomain[]>
        ) => {
            state.productWidgets.push(
                ...action.payload.map((widget) => ({
                    ...widget,
                }))
            );
        },
        updateWidgetActive: (
            state,
            action: PayloadAction<{ id: number; active: boolean }>
        ) => {
            const { id, active } = action.payload;
            const widgetToUpdate = findWidgetToUpdate(state.productWidgets, id);

            state.productWidgets.forEach((widget) => (widget.active = false));

            widgetToUpdate.active = active;
        },
        updateWidgetLinked: (
            state,
            action: PayloadAction<{ id: number; linked: boolean }>
        ) => {
            const { id, linked } = action.payload;
            const widgetToUpdate = findWidgetToUpdate(state.productWidgets, id);

            widgetToUpdate.linked = linked;
        },
        updateWidgetColor: (
            state,
            action: PayloadAction<{
                id: number;
                selectedColor: ColorOptions;
            }>
        ) => {
            const { id, selectedColor } = action.payload;
            const widgetToUpdate = findWidgetToUpdate(state.productWidgets, id);

            widgetToUpdate.selectedColor = selectedColor;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductWidgets.fulfilled, (state, action) => {
                state.productWidgets.push(
                    ...action.payload.map((widget) => ({ ...widget }))
                );
                state.fetchStatus = "fulfilled";
            })
            .addCase(fetchProductWidgets.rejected, (state, action) => {
                state.fetchStatus = "rejected";
            });
    },
});

export const {
    addProductWidgets,
    updateWidgetActive,
    updateWidgetLinked,
    updateWidgetColor,
} = productWidgetsSlice.actions;

export const selectProductWidgets = (state: RootState) =>
    state.productWidgets.productWidgets;

export const selectFetchStatus = (state: RootState) =>
    state.productWidgets.fetchStatus;

export default productWidgetsSlice.reducer;
