import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getData,
} from "./ProdukThunk";
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
  getDataLoading: false,
  getDataError: undefined,
  createProductLoading: false,
  createProductError: undefined,
  deleteProductLoading: false,
  deleteProductError: undefined,
  editProductLoading: false,
  editProductError: undefined,
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
      })

      .addCase(createProduct.pending, (state, action) => {
        return {
          ...state,
          createProductLoading: true,
          createProductError: undefined,
          tipe: action.type,
        };
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        return {
          ...state,
          createProductLoading: false,
          createProductError: undefined,
          tipe: action.type,
        };
      })
      .addCase(createProduct.rejected, (state, action) => {
        return {
          ...state,
          createProductLoading: false,
          createProductError: undefined,
          tipe: action.type,
        };
      })

      .addCase(deleteProduct.pending, (state, action) => {
        return {
          ...state,
          deleteProductLoading: true,
          deleteProductError: undefined,
          tipe: action.type,
        };
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return {
          ...state,
          deleteProductLoading: false,
          deleteProductError: undefined,
          tipe: action.type,
        };
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        return {
          ...state,
          deleteProductLoading: false,
          deleteProductError: undefined,
          tipe: action.type,
        };
      })
      .addCase(editProduct.pending, (state, action) => {
        return {
          ...state,
          editProductLoading: true,
          editProductError: undefined,
          tipe: action.type,
        };
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        return {
          ...state,
          editProductLoading: false,
          editProductError: undefined,
          tipe: action.type,
        };
      })
      .addCase(editProduct.rejected, (state, action) => {
        return {
          ...state,
          editProductLoading: false,
          editProductError: undefined,
          tipe: action.type,
        };
      });
  },
});

export default ProductSlice;
