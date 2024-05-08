import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";
import modalContact from "./modalContactSlice";

export const store = configureStore({
  reducer: {
    contact: contactSlice,
    modalContact: modalContact,
  },
});
