import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appCurrency: "INR",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
});

export default currencySlice.reducer;
