import { useSelector } from 'react-redux';
import './sidebars.css';
import { RootState } from '../../app/state/store';

const HeroStatsDisplay = () => {
  const { heroStatus } = useSelector((state: RootState) => state.gameComponents);
  return (
    <div className="sidebars">
      <h1>Hero Stats</h1>
      <div>{JSON.stringify(heroStatus)}</div>
    </div>
  )
}

export default HeroStatsDisplay;