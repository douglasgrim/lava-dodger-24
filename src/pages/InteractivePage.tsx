import {
  ReactElement,
  useEffect,
  useState,
} from 'react';

import GridSquare from '../components/GridSquare';
import { fetch } from '../mocks';
import LoadingIndictor from '../components/LoadingIndicator';
import { ResponseData } from '../types';
import './interactive-page.css';

interface rd {
  groundSquares: number[][] | null;
}

/**
 * @remarks In a larger app this would be referenced from ReactRouter
 * or something similar, like a nextJS route. In this case, it's attached
 * to the app for simplicity
 * 
 * @returns React component representing the main "game page"
 */
function InteractivePage():ReactElement | null {

  let [data, setData] = useState<ResponseData>({
    groundSquares: undefined,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetch();
      console.log(data);
      setData(fetchedData);
      setIsLoading(false);
    }
    fetchData();

    return () => {};
  }, []);

  const { groundSquares = [[]]} = data;

  // if (!groundSquares) {
  //   return null;
  // }

  return (
    <div className="page interactive-page">
      <div className="map-container">
        <LoadingIndictor isLoading={true} />
        <div className={ `map ${isLoading ? '' : 'loaded'}`}>
          {
              groundSquares.map((arr) => (
                  <div className="grid-row">
                      {arr.map((val) => <GridSquare groundType={val} />)}
                  </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default InteractivePage;