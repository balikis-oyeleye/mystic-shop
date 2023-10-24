import { createSlice } from "@reduxjs/toolkit";

interface ContactModalState {
  isOpen: boolean;
  isLoading: boolean;
}

const initialState: ContactModalState = {
  isOpen: false,
  isLoading: false,
};

export const contactModal = createSlice({
  name: "contactModal",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { close, open, startLoading, stopLoading } = contactModal.actions;
export default contactModal.reducer;
