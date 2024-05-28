import { ReactElement  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/state/store';

import Hero from './Hero';
import Goal from './Goal';
import './world-map.css';
import { userKeyAction } from '../../app/actions/userKeyAction';

import { getMapPosition } from '../utils';
import { WorldGrid } from './WorldGrid';

type ReactProps = {
  containerWidth: number,
  containerHeight: number,
}

const WorldMap = ({
  containerWidth,
  containerHeight
}: ReactProps):ReactElement => {
  const dispatch = useDispatch<AppDispatch>();

  const { heroPosition } = useSelector((state: RootState) => state.gameComponents);
  const { isLoaded, isLoading } = useSelector((state: RootState) => state.gameEvents);

  const { x, y } = heroPosition;
  const { mapX, mapY } = getMapPosition({
    x,
    y,
    mapWidth: containerWidth,
    mapHeight: containerHeight
  });

  const style = {
    top: `${-mapY}px`,
    left: `${-mapX}px`,
  }

  return (
    <div
      className={ `world-map ${isLoading ? '' : 'loaded'}`}
      style={style}
      data-testid="worldMap"
      onClick={() => {dispatch(userKeyAction('ArrowUp', heroPosition))}}
    >
    { isLoaded && (
      <>
        <WorldGrid />
        <Hero />
        <Goal />
      </> 
    )}
  </div>
  );
};

export default WorldMap;