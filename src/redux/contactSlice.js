import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { ENDPOINT_CONTACTS } from "../configs/api";
import { setIsLoading } from "./modalContactSlice";
import { REACT_APP_BE_URL } from "../configs/env";

const initialState = {
  isLoading: true,
  data: [],
};

export const getAllContacts = createAsyncThunk("contact/getAll", async () => {
  const response = await axios.get(REACT_APP_BE_URL + ENDPOINT_CONTACTS);
  return {
    data: response.data?.data,
  };
});

export const addContacts = createAsyncThunk(
  "contact/add",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        REACT_APP_BE_URL + ENDPOINT_CONTACTS,
        data,
      );
      toast.success("Add Data Successfully");
      return {
        response: response.data,
      };
    } catch (error) {
      toast.error("Opps something wrong!!");
      rejectWithValue(error);
    }
  },
);

export const editContacts = createAsyncThunk(
  "contact/edit",
  async (data, { dispatch, rejectWithValue }) => {
    const newData = { ...data };
    delete newData.id;
    try {
      const response = await axios.put(
        REACT_APP_BE_URL + ENDPOINT_CONTACTS + `/${data.id}`,
        newData,
      );
      toast.success("Edit Data Successfully");
      return {
        response: response.data,
      };
    } catch (error) {
      toast.error("Opps something wrong!!");
      rejectWithValue(error);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  "contact/delete",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.delete(
        REACT_APP_BE_URL + ENDPOINT_CONTACTS + `/${id}`,
      );
      toast.success("Delete Data Successfully");
      return {
        response: response.data,
      };
    } catch (error) {
      toast.error("Opps something wrong!!");
      rejectWithValue(error);
    }
  },
);

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
    });
  },
});

// export const { example } = contactSlice.actions;

export default contactSlice.reducer;
