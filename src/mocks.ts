import { GroundType, Position, MockResponse, ResponseData } from "./types";

const delay = (timems: number):Promise<undefined> => new Promise((resolve) => {
  setTimeout(() => {
    resolve(undefined);
  }, timems)
});

const rnd = (low: number, high: number) => Math.floor(Math.random() * (high - low) + low);

/**
 * @returns mock payload - this will be massively refactored to use a REST or GraphQL API
 */
export const fetch = async (...rest: any[]): Promise<ResponseData> => {
  const groundColumn = Array(50).fill(0).map(() => Array(50).fill(0));
  const groundSquares = groundColumn.map((col) => {
      return col.map(() => Math.floor(Math.random() * Object.keys(GroundType).length / 2))
  });
  const startingPosition: Position = {
    x: rnd(0, 50),
    y: rnd(0, 50),
  }
  const goal: Position = {
    x: rnd(0, 50),
    y: rnd(0,50),
  }

  await delay(5000);

  return {
    startingPosition,
    goal,
    groundSquares,
  };
};