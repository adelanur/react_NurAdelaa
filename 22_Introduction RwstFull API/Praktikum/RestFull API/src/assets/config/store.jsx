import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import reducers from "./reducer";
const store = configureStore({
  reducer: reducers,
});

export default store;
