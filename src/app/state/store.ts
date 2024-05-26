import { configureStore } from "@reduxjs/toolkit";
// import loadedDataReducer from "./reducers/_loadedDataSlice";
import gameComponentsReducer from "./reducers/gameComponentsSlice";
import gameEventsReducer from "./reducers/gameEventsSlice";

export const store = configureStore({
  reducer: {
    gameComponents: gameComponentsReducer,
    gameEvents: gameEventsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
