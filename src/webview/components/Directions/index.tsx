import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/state/store';
import '../sidebars.css';
import Verbiage from './Verbiage';
import { VerbiageType } from '../../../app/types';

const Directions = ():ReactElement => {
  const directionList = useSelector(( state: RootState) => state.gameEvents.directionList);
  const { heroStatus: { health, moves } } = useSelector((state: RootState) => state.gameComponents);
  return (
    <div className="sidebars">
      <h1>Directions {health} {moves} </h1>
      { 
        directionList.map((item: VerbiageType, key: number) => (
          <Verbiage 
            text={item.text} 
            imageUrl={item.imageUrl}
            key={key}
          />
        ))
      }
    </div>
  );
}

export default Directions;