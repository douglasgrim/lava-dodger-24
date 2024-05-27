import { SquareType, GroundType, GroundSquaresType } from '../../app/types';
import { getImage } from './getImage';

const { Blank, Lava, Mud, Speeder } = GroundType;

const blankSquare: SquareType = {
  image: 'blank',
  movesCost: 1,
  healthCost: 0,
};

const lavaSquare: SquareType = {
  image: 'lava',
  movesCost: 10,
  healthCost: 50,
};

const mudSquare: SquareType = {
  image: 'mud',
  movesCost: 5,
  healthCost: 10,
};

const speederSquare: SquareType = {
  image: 'speeder',
  movesCost: 0,
  healthCost: 5,
};

const squareMap = new Map<GroundType, SquareType>([
  [Blank, blankSquare],
  [Speeder, speederSquare],
  [Lava, lavaSquare],
  [Mud, mudSquare],
]);

export const getSquare = (groundSquares: GroundSquaresType, x: number, y: number):SquareType => {
  if (!groundSquares[y]) {
    return blankSquare;
  }
  if (!groundSquares[y][x]) {
    return blankSquare;
  }
  const type = groundSquares[y][x];
  const s:SquareType | undefined = squareMap.get(type);
  // return blank as a default:
  if (!s) {
    return blankSquare;
  }
  return s;
}
