export enum GroundType {
  Blank,
  Lava,
  Speeder,
  Mud,
}

export type ImageType = (
  'goal'
  | 'hero'
  | 'lava'
  | 'loadingIcon'
  | 'mud'
  | 'blank'
  | 'speeder'
  | 'welcomeImage'
  | 'homeSweetHome'
  | 'gameOver'
);

export type SquareType = {
  image: ImageType;
  healthCost: number;
  movesCost: number;
};

export type Position = {
  x: number;
  y: number;
};

export type GroundSquaresType = number[][];

export type VerbiageType = {
  text: string;
  imageUrl?: ImageType;
}

export interface IResponseData {
  groundSquares: GroundSquaresType;
  directionList: VerbiageType[];
}

export type MockResponse = {
  json: Promise<IResponseData>;
};

export interface IDataState {
  groundSquares: GroundSquaresType;
  heroPosition: Position;
  goalPosition: Position;
};
