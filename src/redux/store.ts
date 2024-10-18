import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice  from "./slices/sidebar.slice";
import ProductSlice  from "./slices/product.slice";

export const store = configureStore({
    reducer: {
        sidebar: SidebarSlice,
        products: ProductSlice,
    }
})

export type IRootState = ReturnType<typeof store.getState>