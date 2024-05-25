import { ReactElement  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/state/store';


import Hero from './Hero';
import GridSquare from './GridSquare';
import './world-map.css';

import {
  setHeroPosition,
} from '../../app/state/reducers/loadedDataSlice';
import { getMapPosition } from '../utils';

type ReactProps = {
  containerWidth: number,
  containerHeight: number,
}

const WorldMap = ({
  containerWidth,
  containerHeight
}: ReactProps):ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isLoading,
    isLoaded,
    groundSquares,
    heroPosition,
  } = useSelector((state: RootState) => state.loadedData);
  const { x, y } = heroPosition;
  const { mapX, mapY } = getMapPosition({
    x,
    y,
    mapWidth: containerWidth,
    mapHeight: containerHeight
  });

  console.log(mapX, mapY);

  const style = {
    top: `${-mapY}px`,
    left: `${-mapX}px`,
  }

  return (
    <div
      className={ `world-map ${isLoading ? '' : 'loaded'}`}
      style={style}
      onClick={() => {
        dispatch(setHeroPosition({ x: x + 1, y: y + 1 }));
        console.log('clicking along', heroPosition)
      }}
    >
    {
        isLoaded && groundSquares.map((arr, rowKey) => (
            <div className="grid-row" key={rowKey}>
                {arr.map((val, colKey) => <GridSquare key={colKey} groundType={val} />)}
            </div>
        ))
    }
    { isLoaded && <Hero /> }
  </div>
  );
};

export default WorldMap;