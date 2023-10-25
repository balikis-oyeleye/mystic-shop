import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";
import cartModalReducer from "./features/cartModalSlice";
import contactModalSlice from "./features/contactModalSlice";

export const store = configureStore({
  reducer: {
    sidebarReducer,
    cartModalReducer,
    contactModalSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
