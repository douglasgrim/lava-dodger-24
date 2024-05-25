import { configureStore } from "@reduxjs/toolkit";
import loadedDataReducer from "./reducers/loadedDataSlice";

export const store = configureStore({
  reducer: {
    loadedData: loadedDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
