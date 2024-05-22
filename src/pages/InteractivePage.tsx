import { ReactElement, useContext } from 'react';

import GridSquare from '../components/GridSquare';
import { ReadyContext } from '../contexts/ReadyContext';
import { GroundType } from '../types';
import './interactive-page.css';

  /**
   * @remarks In a larger app this would be referenced from ReactRouter
   * or something similar, like a nextJS route. In this case, it's attached
   * to the app for simplicity
   * 
   * @returns React component representing the main "game page"
   */
function InteractivePage():ReactElement {
  
    const { isStarted } = useContext(ReadyContext);

    const groundColumn = Array(50).fill(0).map(() => Array(50).fill(0));
    const groundSquare = groundColumn.map((col) => {
        return col.map(() => Math.floor(Math.random() * Object.keys(GroundType).length / 2))
    });

    console.log(GroundType)
    console.log(groundSquare)

    return (
      <div className="page interactive-page">
        <div className="map-container">
          <div className="map">
            {
                groundSquare.map((arr) => (
                    <div>
                        {arr.map((val) => <GridSquare groundType={val} />)}
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    );

    return <div>hello</div>;
};

export default InteractivePage;