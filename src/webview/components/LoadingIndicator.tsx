import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/state/store';

import loadingIcon from '../../assets/images/loadingIcon.png';
import './loading-indicator.css';

interface PropTypes {
  className?: string;
};

const LoadingIndictor = ({
  className = 'loading-indicator',
}: PropTypes):ReactElement => {
  const isLoading = useSelector(({ loadedData: { isLoading } }: RootState) => isLoading);
  if (!isLoading) {
    return <></>;
  }

  return (
    <div className={className}>
      <img src={loadingIcon} />
      <h1>Loading</h1>
    </div>
  );
}

export default LoadingIndictor;
