
import { Link } from 'react-router-dom';

import './welcome-page.css';
import { getImage } from '../utils/getImage';

function WelcomePage() {
  const style = {
    background: `url(${getImage('welcomeImage')}) no-repeat 50%`,
    backgroundSize: 'contain',
  };
  
  return (
    <div
      className="page welcome-page"
      data-testid="welcomePage"
      style={style}
    >
      <div className="button-container showing">
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
