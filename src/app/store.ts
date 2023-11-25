import { configureStore } from "@reduxjs/toolkit";
import productWidgetsSlice from "../features/widgets/productWidgetsSlice";

export const store = configureStore({
    reducer: {
        productWidgets: productWidgetsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
