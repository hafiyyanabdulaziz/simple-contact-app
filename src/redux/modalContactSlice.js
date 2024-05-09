import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "Add Contact",
  isLoading: false,
  isNew: true,
  data: {
    id: null,
    firstName: "",
    lastName: "",
    age: 0,
    avatar: "",
  },
};

export const modalContact = createSlice({
  name: "modalContact",
  initialState,
  reducers: {
    setModalContactOpen: (state, action) => {
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
    openModalNewContact: (state, action) => {
      state.isOpen = true;
      state.title = "Edit Contact";
      state.isNew = true;
    },
    openModalEditContact: (state, action) => {
      state.isOpen = true;
      state.title = "Edit Contact";
      state.isNew = false;
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setModalContactClose,
  setModalContactOpen,
  setIsLoading,
  setModalContactTitle,
  openModalNewContact,
  openModalEditContact,
} = modalContact.actions;

export default modalContact.reducer;
