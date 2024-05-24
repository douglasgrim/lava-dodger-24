import {
  ReactElement,
  useEffect,
  useState,
} from 'react';

import { fetch } from '../../app/mocks';
import LoadingIndictor from '../components/LoadingIndicator';
import { IResponseData } from '../../app/types';
import './interactive-page.css';
import WorldMap from '../components/WorldMap';
import Directions from '../components/Directions';

/**
 * @remarks In a larger app this would be referenced from ReactRouter
 * or something similar, like a nextJS route. In this case, it's attached
 * to the app for simplicity
 * 
 * @returns React component representing the main "game page"
 */
function InteractivePage():ReactElement | null {

  let [data, setData] = useState<IResponseData>({
    groundSquares: undefined,
    directionList: [],
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

  const { directionList } = data;

  return (
    <div className="page interactive-page">
      <div className="interactive-page">
        <div className="world-map-container">
          <LoadingIndictor isLoading={isLoading} />
          <WorldMap data={data} isLoading={isLoading} />
        </div>
        <Directions directionList={directionList}/>
      </div>
    </div>
  );
};

export default InteractivePage;