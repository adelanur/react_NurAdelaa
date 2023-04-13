import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "create",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrement: (state) => {
      return {
        ...state,
        value: state.value - 1,
      };
    },
  },
});

export default ProductSlice;
