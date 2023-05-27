import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("barang/getData", async () => {
  const response = await axios.get(
    "https://643e0e1f6c30feced81ee9b6.mockapi.io/barang"
  );
  return response.data;
});

export const createProduct = createAsyncThunk(
  "barang/createProduct",
  async (param) => {
    const response = await axios.post(
      "https://643e0e1f6c30feced81ee9b6.mockapi.io/barang",
      param
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "barang/deleteProduct",
  async (param) => {
    const response = await axios.delete(
      `https://643e0e1f6c30feced81ee9b6.mockapi.io/barang/${param.id}`,
      param
    );
    return response.data;
  }
);

export const editProduct = createAsyncThunk(
  "barang/editProduct",
  async (param) => {
    const response = await axios.put(
      `https://643e0e1f6c30feced81ee9b6.mockapi.io/barang/${param.id}`,
      param
    );
    return response.data;
  }
);
