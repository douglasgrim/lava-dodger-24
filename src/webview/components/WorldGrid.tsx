import { ReactElement, ReactNode } from 'react';
import { GroundSquaresType } from '../../app/types';
import GridSquare from './GridSquare';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/state/store';

type WorldGridType = {
  groundSquares: GroundSquaresType
}

export const WorldGrid = (): ReactElement => {
  console.log('we have a grid');
  const { groundSquares } = useSelector((state: RootState) => state.gameComponents);
  const bigMap = (
    <div className="world-grid" data-testid="worldGrid">
      {
        groundSquares.map((rowArr, rowKey) => (
          <div className="grid-row" key={rowKey}>
              {rowArr.map((groundValue, colKey) => (
                <GridSquare
                  key={colKey}
                  groundType={groundValue}
                  x={colKey}
                  y={rowKey}
                />))
              }
          </div>
        ))
      }
    </div>
  );
  return bigMap;

}