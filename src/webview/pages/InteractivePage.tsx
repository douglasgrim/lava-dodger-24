import {
  ReactElement,
  useEffect,
  useRef,
} from 'react';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/state/store';

import {
  setDirectionList,
  setGroundSquares,
  setIsLoaded,
  setIsLoading,
} from '../../app/state/reducers/loadedDataSlice';

import { fetch } from '../../app/mocks';
import LoadingIndicator from '../components/LoadingIndicator';

import './interactive-page.css';
import WorldMap from '../components/WorldMap';
import Directions from '../components/Directions';

import { useContainerDimensions } from '../../app/hooks/useContainerDimensions';

/**
 * @remarks In a larger app this would be referenced from ReactRouter
 * or something similar, like a nextJS route. In this case, it's attached
 * to the app for simplicity
 * 
 * @returns React component representing the main "game page"
 */
function InteractivePage():ReactElement | null {
  const dispatch = useDispatch<AppDispatch>();

  const containerRef = useRef(null);

  const { width, height } = useContainerDimensions(containerRef);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setIsLoading(true));
      const data = await fetch();
      dispatch(setIsLoading(false));
      dispatch(setIsLoaded(true));
      const { directionList, groundSquares } = data;
      dispatch(setDirectionList(directionList));
      dispatch(setGroundSquares(groundSquares));
    }
    fetchData();
    return () => {};
  }, []);

  return (
    <div className="page interactive-page">
      <div className="interactive-page">
        <div className="world-map-container" ref={containerRef}>
          <LoadingIndicator />
          <WorldMap
            containerWidth={width}
            containerHeight={height}
          />
        </div>
        <Directions />
      </div>
    </div>
  );
};

export default InteractivePage;