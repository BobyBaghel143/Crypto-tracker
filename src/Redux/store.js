import { configureStore } from "@reduxjs/toolkit";

import CurrencySliceReducer from "./CurrencySlice";

const store = configureStore({
  reducer: {
    currency: CurrencySliceReducer,
  },
  devTools: true,
});

export default store;
