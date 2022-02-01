import { combineReducers } from "@reduxjs/toolkit";
import itemSlice from "./slicese/ItemsSlice";

const reducer = combineReducers({
  itemSlice,
});

export default reducer;
