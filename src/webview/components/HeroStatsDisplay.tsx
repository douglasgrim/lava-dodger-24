import { useSelector } from 'react-redux';
import './sidebars.css';
import { RootState } from '../../app/state/store';
import Gauge from './Gauge';

const HeroStatsDisplay = () => {
  const { heroStatus, heroPosition, goalPosition } = useSelector((state: RootState) => state.gameComponents);
  const movesFromHome = Math.abs(heroPosition.x - goalPosition.x) + Math.abs(heroPosition.y - goalPosition.y);
  return (
    <div className="sidebars">
      <h1>Hero Stats</h1>
      <Gauge title="Health remaining" value={heroStatus.health} maxValue={200} />
      <Gauge title="Moves remaining" value={heroStatus.moves} maxValue={450} />
      <Gauge title="Moves from home: " value={movesFromHome} maxValue={100} forceColor="white" showScale={false} />
    </div>
  )
}

export default HeroStatsDisplay;