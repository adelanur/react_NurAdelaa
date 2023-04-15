import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      nama: "John",
      kategori: "Doe",
      freshness: "Doe",
      price: "Doe",
      image: "Doe",
      deskripsi: "Doe",
    },
  ],
};

const ProductSlice = createSlice({
  name: "create",
  initialState: initialState,
  reducers: {
    productUpdate: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});

export default ProductSlice;
