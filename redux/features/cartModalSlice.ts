import { createSlice } from "@reduxjs/toolkit";

interface CartModalState {
  isOpen: boolean;
}

const initialState: CartModalState = {
  isOpen: false,
};

export const cartModal = createSlice({
  name: "cartModal",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { close, open } = cartModal.actions;
export default cartModal.reducer;
