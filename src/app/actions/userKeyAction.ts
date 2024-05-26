import { AppDispatch, RootState } from "../state/store";
import { useSelector } from "react-redux";

import { setHeroPosition } from "../state/reducers/gameComponentsSlice";
import { Position } from "../types";

export const userKeyAction = (key: string, heroPosition: Position) => (dispatch: AppDispatch) => {
  let { x, y } = heroPosition;

  switch (key) {
  case 'ArrowUp':
    y -= 1;
    break;
  case 'ArrowLeft':
    x -= 1;
    break;
  case 'ArrowRight':
    x += 1;
    break;
  case 'ArrowDown':
    y += 1;
    break;
  }

  if (y >= 0 && x >= 0 && y < 50 && x < 50) {
    dispatch(setHeroPosition({ x, y }));
  }
};


