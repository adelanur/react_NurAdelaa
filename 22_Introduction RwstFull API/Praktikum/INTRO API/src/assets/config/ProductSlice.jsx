import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./ProdukThunk";
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
  getDataLoading: true,
  getDataError: undefined,
  tipe: "",
};

const ProductSlice = createSlice({
  name: "create",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state, action) => {
        return {
          ...state,
          getDataLoading: true,
          getDataError: undefined,
          tipe: action.type,
        };
      })
      .addCase(getData.fulfilled, (state, action) => {
        return {
          ...state,
          products: action.payload,
          getDataLoading: false,
          getDataError: undefined,
          tipe: action.type,
        };
      })
      .addCase(getData.rejected, (state, action) => {
        return {
          ...state,
          getDataLoading: false,
          getDataError: undefined,
          tipe: action.type,
        };
      });
  },
});

export default ProductSlice;
