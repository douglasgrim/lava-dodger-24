import { ReactElement } from 'react';
import homeSweetHomeImg from '../../assets/images/homeSweetHome.png';
import gameOverImg from '../../assets/images/gameOver.png';

type ReactProps = {
  happyEnding: boolean;
};

const LastPage = ({ happyEnding }: ReactProps):ReactElement => {
  return (
    <div className="page last">
      <img src={ happyEnding ? homeSweetHomeImg : gameOverImg } />
    </div>
  );
}

export default LastPage;

