import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GroundSquaresType, Position, GroundType } from '../../types';
import { getSquare } from '../../../webview/utils';

type HeroStatus = {
  health: number;
  moves: number;
}

type GameComponents = {
  groundSquares: number[][];
  heroPosition: Position;
  goalPosition: Position;
  heroStatus: HeroStatus;
  isAlive: boolean;
  isHome: boolean;
};

const initialState: GameComponents = {
  groundSquares:  [[]],
  heroPosition: { x: 5, y: 5 },
  goalPosition: { x: 45, y: 45 },
  heroStatus: { health: 200, moves: 450 },
  isAlive: true,
  isHome: false,
};

const gameComponentsSlice = createSlice({
  name: "loadedData",
  initialState,
  reducers: {
    setGroundSquares: (state, action: PayloadAction<GroundSquaresType>) => {
      state.groundSquares = action.payload;
      state.groundSquares[5][5] = 0;
      state.groundSquares[45][45] = 0;
    },
    setHeroPosition: (state, action: PayloadAction<Position>) => {
      const { x, y } = action.payload;
      const { x: homeX, y: homeY } = state.goalPosition;
      const { groundSquares } = state;
      let { health, moves } = state.heroStatus;
      const { healthCost, movesCost } = getSquare(groundSquares, x, y);
      health -= healthCost;
      moves -= movesCost;
      state.heroStatus = { health, moves };
      if (health <= 0) {
        state.isAlive = false;
      }
      if (x === homeX && y === homeY) {
        state.isHome = true;
      }
      state.heroPosition = action.payload;
    },
    setGoalPosition: (state, action: PayloadAction<Position>) => {
      const { y, x } = action.payload;
      state.groundSquares[y][x] = 0;
      state.goalPosition = action.payload;
    },
  },
});

export const {
  setGroundSquares,
  setHeroPosition,
  setGoalPosition,
} = gameComponentsSlice.actions;

export default gameComponentsSlice.reducer;
