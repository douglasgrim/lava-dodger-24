import { ReactElement } from 'react';

import loadingIcon from '../../assets/images/loadingIcon.png';
import './loading-indicator.css';

interface PropTypes {
  isLoading: boolean;
  className?: string;
};

const LoadingIndictor = ({
  isLoading,
  className = 'loading-indicator',
}: PropTypes):ReactElement => {
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
