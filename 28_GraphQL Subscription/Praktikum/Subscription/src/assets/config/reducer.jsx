import { combineReducers } from "redux";
import ProductSlice from "./ProductSlice";
import UserSlice from "./UserSlice";

const reducer = combineReducers({
  product: ProductSlice.reducer,
  Users: UserSlice.reducer,
});

export default reducer;
