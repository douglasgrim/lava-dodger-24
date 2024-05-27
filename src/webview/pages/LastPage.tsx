import { ReactElement } from 'react';
import { getImage } from '../utils';

import './last-page.css';

type ReactProps = {
  happyEnding: boolean;
};

const LastPage = ({ happyEnding }: ReactProps):ReactElement => {
  return (
    <div className="page last-page">
      <img src={ happyEnding ? getImage('homeSweetHome') : getImage('gameOver') } />
    </div>
  );
}

export default LastPage;

