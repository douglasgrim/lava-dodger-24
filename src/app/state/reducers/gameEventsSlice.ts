import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { VerbiageType } from '../../types';

type GameEvent = {
  directionList: VerbiageType[],
  isLoading: boolean,
  isLoaded: boolean,
  appReady: boolean,
}

const initialState: GameEvent = {
  directionList: [],
  isLoading: false,
  isLoaded: false,
  appReady: false,
};

const gameEventsSlice = createSlice({
  name: "gameEvent",
  initialState,
  reducers: {
    setDirectionList: (state, action: PayloadAction<VerbiageType[]>) => {
      state.directionList = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    setAppReady: (state, action: PayloadAction<boolean>) => {
      state.appReady = action.payload;
    }
  },
});

export const {
  setDirectionList,
  setIsLoading,
  setIsLoaded,
  setAppReady,
} = gameEventsSlice.actions;

export default gameEventsSlice.reducer;
