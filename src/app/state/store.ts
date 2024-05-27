import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameComponentsReducer from "./reducers/gameComponentsSlice";
import gameEventsReducer from "./reducers/gameEventsSlice";

const rootReducer = combineReducers({
  gameComponents: gameComponentsReducer,
  gameEvents: gameEventsReducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
