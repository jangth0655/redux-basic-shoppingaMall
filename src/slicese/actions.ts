import { IGetItems } from "../slicese/ItemsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItems = createAsyncThunk("get/items", async () => {
  const response = await axios.get<IGetItems>(
    "https://codingapple1.github.io/shop/data2.json"
  );
  return response.data;
});
