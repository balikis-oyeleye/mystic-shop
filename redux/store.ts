import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";
import searchReducer from "./features/searchSlice";
import cartModalReducer from "./features/cartModalSlice";

export const store = configureStore({
  reducer: { sidebarReducer, searchReducer, cartModalReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
