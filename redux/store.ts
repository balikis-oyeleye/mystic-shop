import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";
import searchReducer from "./features/searchSlice";
import cartModalReducer from "./features/cartModalSlice";
import contactModalSlice from "./features/contactModalSlice";

export const store = configureStore({
  reducer: {
    sidebarReducer,
    searchReducer,
    cartModalReducer,
    contactModalSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
