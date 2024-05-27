import { useSelector } from 'react-redux';
import './sidebars.css';
import { RootState } from '../../app/state/store';
import Gauge from './Gauge';

const HeroStatsDisplay = () => {
  const { heroStatus } = useSelector((state: RootState) => state.gameComponents);
  return (
    <div className="sidebars">
      <h1>Hero Stats</h1>
      <Gauge title="Health" value={heroStatus.health} maxValue={200} />
      <Gauge title="Moves" value={heroStatus.moves} maxValue={450} />
    </div>
  )
}

export default HeroStatsDisplay;