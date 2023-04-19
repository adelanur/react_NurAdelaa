import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("barang/getData", async () => {
  const response = await axios.get(
    "https://643e0e1f6c30feced81ee9b6.mockapi.io/barang"
  );
  return response.data;
});
