export enum GroundType {
  Normal,
  Lava,
  Speeder,
  Mud,
}

export enum ActionTypes {
  INTRO_COMPLETE,
  USER_ACTION,
} 

export type ImageType = (
  'goal'
  | 'hero'
  | 'lava'
  | 'loadingIcon'
  | 'mud'
  | 'normal'
  | 'speeder'
  | 'welcomeImage'
);

export type Position = {
  x: number;
  y: number;
};

export type VerbiageType = {
  text: string;
  imageUrl?: ImageType;
}

export interface IResponseData {
  startingPosition?: Position;
  goal?: Position;
  groundSquares: number[][] | undefined;
  directionList: VerbiageType[];
}

export type MockResponse = {
  json: Promise<IResponseData>;
};