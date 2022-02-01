import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItems } from "../slicese/actions";

export interface IGetItems {
  id: number;
  title: string;
  content: string;
  price: string;
}

const initialState = {
  data: [] as IGetItems[],
};

const itemsSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getItems.fulfilled,
      (state, action: PayloadAction<IGetItems>) => {}
    );
  },
});

export default itemsSlice.reducer;
