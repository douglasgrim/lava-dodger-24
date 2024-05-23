import {
  ReactElement,
  useEffect,
  useState,
} from 'react';

import { fetch } from '../../mocks';
import LoadingIndictor from '../components/LoadingIndicator';
import { IResponseData } from '../../types';
import './interactive-page.css';
import WorldMap from '../components/WorldMap';

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

  return (
    <div className="page interactive-page">
      <div className="world-map-container">
        <LoadingIndictor isLoading={isLoading} />
        <WorldMap data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default InteractivePage;