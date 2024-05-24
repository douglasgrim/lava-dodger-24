import { GroundType, Position, ImageType, IResponseData, VerbiageType } from './types';

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

const directionList: VerbiageType[] = [
  {
    text: 'Your goal is to get the hero from the upper left hand side of the grid to the lower right, where you will see a lovely house to save said hero from the dangers of the world.',
  },
  {
    text: 'This is the hero in question, and this hero has a lot of lives. The good news is that the hero has 200 health points and 450 move points. The bad news is that those will be rapidly depleted after moving through the map.',
    imageUrl: 'hero',
  },
  {
    text: 'This is a blank square, which will cost the hero 1 move and have no health effect.',
    imageUrl: 'blank',
  },
  {
    text: 'This is a speeder square, which will allow the hero to move through without losing any moves but will cost 5 health points.',
    imageUrl: 'speeder',
  },
  {
    text: 'This is LAVA which is NASTY. It will end up costing the hero 50 health points and 10 moves. Avoid lava.',
    imageUrl: 'lava',
  },
  {
    text: 'This is mud, which is bad but not as bad as lava. It will cost the hero 10 health points and 5 moves',
    imageUrl: 'mud',
  },
  {
    text: 'And finally, this is home: the square in the lower right where the hero can relax and consider the game won.',
    imageUrl: 'goal',
  }
]

  return {
    startingPosition,
    goal,
    groundSquares,
    directionList,
  };
};