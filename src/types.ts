export enum GroundType {
  Normal,
  Lava,
  Speeder,
  Mud,
}

export type Position = {
  x: number;
  y: number;
};

export interface IResponseData {
  startingPosition?: Position;
  goal?: Position;
  groundSquares: number[][] | undefined;
}

export type MockResponse = {
  json: Promise<IResponseData>;
};