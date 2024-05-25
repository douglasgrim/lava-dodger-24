export enum GroundType {
  Normal,
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
);

export type Position = {
  x: number;
  y: number;
};

export type GroundSquaresType = number[][] | undefined;

export type VerbiageType = {
  text: string;
  imageUrl?: ImageType;
}

export interface IResponseData {
  heroPosition: Position;
  goalPosition: Position;
  groundSquares: GroundSquaresType;
  directionList: VerbiageType[];
  isLoading: boolean;
}

export type MockResponse = {
  json: Promise<IResponseData>;
};

export interface IDataState {
  groundSquares: GroundSquaresType;
  heroPosition: Position;
  goalPosition: Position;
};
