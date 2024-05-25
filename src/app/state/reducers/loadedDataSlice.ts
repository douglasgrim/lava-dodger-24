import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GroundSquaresType, VerbiageType, Position, IResponseData } from '../../types';

const initialState: IResponseData = {
  groundSquares:  undefined,
  heroPosition: { x: 5, y: 5 },
  goalPosition: { x: 45, y: 45 },
  directionList: [],
  isLoading: false,
};

const loadedDataSlice = createSlice({
  name: "loadedData",
  initialState,
  reducers: {
    setGroundSquares: (state, action: PayloadAction<GroundSquaresType>) => {
      state.groundSquares = action.payload;
    },
    setHeroPosition: (state, action: PayloadAction<Position>) => {
      console.log('setting pos', action)
      state.heroPosition = action.payload;
    },
    setGoalPosition: (state, action: PayloadAction<Position>) => {
      state.goalPosition = action.payload;
    },
    setDirectionList: (state, action: PayloadAction<VerbiageType[]>) => {
      state.directionList = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  },
});

export const {
  setGroundSquares,
  setHeroPosition,
  setGoalPosition,
  setDirectionList,
  setIsLoading,
} = loadedDataSlice.actions;

export default loadedDataSlice.reducer;
