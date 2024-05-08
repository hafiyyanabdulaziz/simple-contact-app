import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "Add Contact",
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
  },
});

// Action creators are generated for each case reducer function
export const { setModalContactClose, setModalContactOpen } =
  modalContact.actions;

export default modalContact.reducer;
