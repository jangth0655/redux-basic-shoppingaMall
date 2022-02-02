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
  isLoading: true,
};

const itemsSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state, action: PayloadAction<void>) => {
      state.isLoading = true;
    });
    builder.addCase(
      getItems.fulfilled,
      (state, action: PayloadAction<IGetItems[]>) => {
        state.data.push(...action.payload);
        state.isLoading = false;
      }
    );
  },
});

export default itemsSlice.reducer;
