import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/state/store';
import { getImage } from '../utils/getImage';



import './hero.css';

const Hero = ():ReactElement => {
  const position = useSelector((state: RootState) => state.loadedData.heroPosition);
  const { x, y } = position;
  const left = `${3 + 54 * x}px`;
  const top = `${3 + 54 * y}px`;
  const style = {
    top,
    left,
  };
  return (
    <div className="hero" style={style}>
      <img src={getImage('hero')} />
    </div>
  );
}

export default Hero;