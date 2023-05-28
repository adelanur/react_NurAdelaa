import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getData,
} from "./ProdukThunk";
const initialState = {
  Users: [],
  isLogin: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        Users: action.payload,
      };
    },
    setLogin: (state, action) => {
      return {
        ...state,
        isLogin: action.payload,
      };
    },
  },
});

export default UserSlice;
