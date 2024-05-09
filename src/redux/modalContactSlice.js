import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "Add Contact",
  isLoading: false,
};

export const modalContact = createSlice({
  name: "modalContact",
  initialState,
  reducers: {
    setModalContactOpen: (state) => {
      state.isOpen = true;
    },
    setModalContactClose: (state) => {
      state.isOpen = false;
    },
    setModalContactTitle: (state, action) => {
      state.title = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setModalContactClose,
  setModalContactOpen,
  setIsLoading,
  setModalContactTitle,
} = modalContact.actions;

export default modalContact.reducer;
