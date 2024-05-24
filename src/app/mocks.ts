import { GroundType, Position, MockResponse, IResponseData } from "./types";

import heroImg from '../../../assets/images/hero.png';


const delay = (timems: number):Promise<undefined> => new Promise((resolve) => {
  setTimeout(() => {
    resolve(undefined);
  }, timems)
});

const rnd = (low: number, high: number) => Math.floor(Math.random() * (high - low) + low);

/**
 * @returns mock payload - this will be massively refactored to use a REST or GraphQL API
 */
export const fetch = async (...rest: any[]): Promise<IResponseData> => {
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

  await delay(1500);

  return {
    startingPosition,
    goal,
    groundSquares,
    directionList: [
      {
        text: 'Your goal is to get the hero from the upper left hand side of the grid to the lower right, where you will see a lovely house to save said hero from the dangers of the world.',
      },
      {
        text: 'This is the hero in question, and this hero has a lot of lives. Sports cars help the hero get home faster, mud slows the journey down, and lava is just nasty to our hero, who has a lot of lives',
        imageUrl: 'hero',
      }
    ]
  };
};