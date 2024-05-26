import { ReactElement, KeyboardEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/state/store';
import { getImage } from '../utils/getImage';
import { getMapPosition } from '../utils';
import { userKeyAction } from '../../app/actions/userKeyAction';

import './hero.css';

const Hero = ():ReactElement => {
  const position = useSelector((state: RootState) => state.gameComponents.heroPosition);
  const dispatch = useDispatch<AppDispatch>();

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    dispatch(userKeyAction(key, position));
  }
  const { x, y } = position;
  const { heroX, heroY } = getMapPosition({ x, y });
  const left = `${heroX}px`;
  const top = `${heroY}px`;
  const style = {
    top,
    left,
  };

  return (
    <div
      className="world-entity hero"
      style={style}

    >
      <img src={getImage('hero')} />
    </div>
  );
}

export default Hero;