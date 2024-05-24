import { ReactElement } from 'react';
import './directions.css';
import Verbiage from './Verbiage';
import { VerbiageType } from '../../../app/types';


interface PropTypes {
  directionList: VerbiageType[];
}

const Directions = ({ directionList }: PropTypes):ReactElement => {
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