import { screen, fireEvent, act } from '@testing-library/react';
import { groundSquares, directionList } from '../../app/mocks';
import { getMapPosition } from '../utils';

import WorldMap from './WorldMap';
import { renderWithProviders } from '../utils/test-utils';
import { RootState } from '../../app/state/store';
import { setHeroPosition } from '../../app/state/reducers/gameComponentsSlice';

const gameState = (isLoaded: boolean):RootState => ({
    gameComponents: {
      isAlive: true,
      isHome: false,
      groundSquares,
      heroPosition: { x: 15, y: 5},
      goalPosition: { x: 45, y: 45},
      heroStatus: { health: 200, moves: 450 }
    },
    gameEvents: {
      isLoaded,
      isLoading: false,
      directionList,
      appReady: true,
    }
  }
);

const getTestMap = async (isLoaded: boolean) => (
  renderWithProviders(<WorldMap containerHeight={1000} containerWidth={1000} />, {
    preloadedState: gameState(isLoaded),
  })
);

describe('World Map', () => {
  test('expect world map to show on screen', async () => {
    await getTestMap(false);
    expect(screen.getByTestId('worldMap')).toBeDefined();
  });

  test('expect nothing to show while loading', async () => {
    const rendered = await getTestMap(false);
    expect(rendered.queryByTestId('worldGrid')).toBeNull();
  });

  test('expect grid to show after load', async () => {
    await getTestMap(true);
    expect(screen.getByTestId('worldGrid')).toBeDefined();
  });

  let hero:HTMLDivElement;
  let worldMap: HTMLDivElement;

  test ('expect hero to show after load completes', async () => {
    await getTestMap(true);
    hero = screen.getByTestId('hero');
    worldMap = screen.getByTestId('worldMap');
    expect(hero).toBeDefined();
  });

  test('expect hero to be positioned accurately', () => {
    const { gameComponents: { heroPosition: { x, y }, groundSquares } } = gameState(true);
    const { heroX, heroY } = getMapPosition({ x, y });
    expect(hero.style.top).toBe(`${heroY}px`);
    expect(hero.style.left).toBe(`${heroX}px`);
  });

})

