import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../app/state/store';

// import { ReadyContext } from '../../app/_contexts/ReadyContext';
import './welcome-page.css';
// import welcomeImage from '../../assets/images/welcomeImage.png';
import { getImage } from '../utils/getImage';

function WelcomePage() {
  const isReady = useSelector((state: RootState) => state.loadedData.appReady);

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
