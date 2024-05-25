import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ReadyContext } from '../../app/contexts/ReadyContext';
import './welcome-page.css';
// import welcomeImage from '../../assets/images/welcomeImage.png';
import { getImage } from '../../assets/getImage';

function WelcomePage() {
  const { isReady } = useContext(ReadyContext);

  const style = {
    background: `url(${getImage('welcomeImage')}) no-repeat 50%`,
    backgroundSize: 'contain',
  };
  
  return (
    <div
      className="page welcome-page"
      style={style}
    >
      <div className={`button-container ${isReady ? 'showing' : ''}`}>
        <Link to="/interactive">
          <button>
            <div>Start Dodging</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;