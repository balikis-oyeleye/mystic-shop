import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  isOpen: boolean;
}

const initialState: SearchState = {
  isOpen: false,
};

export const search = createSlice({
  name: "search",
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

export const { close, open } = search.actions;
export default search.reducer;
