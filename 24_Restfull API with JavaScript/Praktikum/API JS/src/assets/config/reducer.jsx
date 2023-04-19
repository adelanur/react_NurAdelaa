import { combineReducers } from "redux";
import ProductSlice from "./ProductSlice";

const reducer = combineReducers({
  product: ProductSlice.reducer,
});

export default reducer;
