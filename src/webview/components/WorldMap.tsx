import { ReactElement  } from 'react';

import { IResponseData } from '../../app/types';
import GridSquare from './GridSquare';
import './world-map.css';

interface PropTypes {
  isLoading: boolean;
  data: IResponseData;
};

const WorldMap = (props: PropTypes):ReactElement => {
  const { data, isLoading } = props;
  const { groundSquares = [[]] } = data;

  return (
    <div className={ `world-map ${isLoading ? '' : 'loaded'}`}>
    {
        groundSquares.map((arr) => (
            <div className="grid-row">
                {arr.map((val) => <GridSquare groundType={val} />)}
            </div>
        ))
    }
  </div>
  );
};

export default WorldMap;