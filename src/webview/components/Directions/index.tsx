import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/state/store';
import './directions.css';
import Verbiage from './Verbiage';
import { VerbiageType } from '../../../app/types';

const Directions = ():ReactElement => {
  const directionList = useSelector(( state: RootState) => state.loadedData.directionList);
  return (
    <div className="directions">
      <h1>Directions</h1>
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