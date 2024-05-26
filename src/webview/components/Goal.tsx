import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/state/store';
import { getImage } from '../utils/getImage';
import { getMapPosition } from '../utils';

import './hero.css';

const Goal = ():ReactElement => {
  const position = useSelector((state: RootState) => state.gameComponents.goalPosition);
  const { x, y } = position;
  const { heroX, heroY } = getMapPosition({ x, y });
  const left = `${heroX}px`;
  const top = `${heroY}px`;
  const style = {
    top,
    left,
  };
  return (
    <div className="world-entity goal" style={style}>
      <img src={getImage('goal')} />
    </div>
  );
}

export default Goal;