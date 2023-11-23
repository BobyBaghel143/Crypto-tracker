import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appCurrency: "INR",
};

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        changeCurrency: (state, action) => {
            // console.log(action, state.appCurrency);
            state.appCurrency = action.payload;
      }
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
