import { useContext } from 'react';

import { ReadyContext } from '../contexts/ReadyContext';
import './welcome-page.css';
import welcomeImage from '../assets/images/welcomeImage.png';

function WelcomePage() {
  const { isReady, isStarted, setIsStarted } = useContext(ReadyContext);

  const style = {
    background: `url(${welcomeImage}) no-repeat 50%`,
    backgroundSize: 'contain',
  };

  if (isStarted) {
    return null;
  }

  return (
    <div
      className="page welcome-page"
      style={style}
    >
      <div className={`button-container ${isReady ? 'showing' : ''}`}>
        <button onClick={() => { setIsStarted(true) }}>
          <div>Start Dodging</div>
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
