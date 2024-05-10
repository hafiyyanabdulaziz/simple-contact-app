import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./modalContactSlice";
import { toast } from "react-toastify";

const initialState = {
  value: 0,
  isLoading: true,
  data: [],
};

export const getAllContacts = createAsyncThunk("contact/getAll", async () => {
  const response = await axios.get("https://contact.herokuapp.com/contact");
  return {
    data: response.data?.data,
  };
});

export const addContacts = createAsyncThunk(
  "contact/add",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setIsLoading(true));
      const response = await axios.post(
        "https://contact.herokuapp.com/contact",
        data,
      );
      dispatch(setIsLoading(false));
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
      dispatch(setIsLoading(true));
      const response = await axios.put(
        `https://contact.herokuapp.com/contact/${data.id}`,
        newData,
      );
      dispatch(setIsLoading(false));
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
      dispatch(setIsLoading(true));
      const response = await axios.delete(
        `https://contact.herokuapp.com/contact/${id}`,
      );
      dispatch(setIsLoading(false));
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
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(getAllContacts.pending, (state, action) => {
      //   state.isLoading = true;
      // })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      });
    // .addCase(getAllContacts.rejected, (state, action) => {
    //   state.isLoading = false;
    // });

    // builder
    //   .addCase(addContacts.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(addContacts.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(addContacts.rejected, (state, action) => {
    //     state.isLoading = false;
    //   });

    // builder
    //   .addCase(editContacts.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(editContacts.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(editContacts.rejected, (state, action) => {
    //     state.isLoading = false;
    //   });

    // builder
    //   .addCase(deleteContacts.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteContacts.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(deleteContacts.rejected, (state, action) => {
    //     state.isLoading = false;
    //   });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = contactSlice.actions;

export default contactSlice.reducer;
