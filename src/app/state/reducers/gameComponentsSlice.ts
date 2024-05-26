import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GroundSquaresType, Position, GroundType } from '../../types';

type HeroStatus = {
  health: number;
  moves: number;
}

type GameComponents = {
  groundSquares: number[][];
  heroPosition: Position;
  goalPosition: Position;
  heroStatus: HeroStatus;
};

const initialState: GameComponents = {
  groundSquares:  [[]],
  heroPosition: { x: 5, y: 5 },
  goalPosition: { x: 45, y: 45 },
  heroStatus: { health: 200, moves: 450 },
};

const gameComponentsSlice = createSlice({
  name: "loadedData",
  initialState,
  reducers: {
    setGroundSquares: (state, action: PayloadAction<GroundSquaresType>) => {
      state.groundSquares = action.payload;
    },
    setHeroPosition: (state, action: PayloadAction<Position>) => {
      const { x, y } = action.payload;
      // const groundConditions = state.groundSquares[y][x];
      // let { health, moves } = state.heroStatus;
      // switch (groundConditions) {
      // case GroundType.Lava:
      //   health -= 50;
      //   moves -= 10;
      //   break;
      // case GroundType.Normal:
      //   moves -= 1;
      //   break;
      // case GroundType.Speeder:
      //   health -= 5;
      //   break;
      // case GroundType.Mud:
      //   health -= 10;
      //   moves -= 5;
      //   break;
      // }
      // state.heroStatus = { health, moves };
      state.heroPosition = action.payload;
    },
    setGoalPosition: (state, action: PayloadAction<Position>) => {
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
