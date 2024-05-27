import { useSelector } from 'react-redux';
import './sidebars.css';
import { RootState } from '../../app/state/store';
import Gauge from './Gauge';
import { GroundType } from '../../app/types';
import { getImage, getSquare } from '../utils';

const HeroStatsDisplay = () => {
  const {
    heroStatus,
    heroPosition: { x, y },
    goalPosition: { x: goalX, y: goalY },
    groundSquares,
  } = useSelector((state: RootState) => state.gameComponents);
  console.log('groundSquares', groundSquares);
  const currentTerrain: GroundType = (groundSquares[y] && groundSquares[y][x]) || 0;
  const movesFromHome = Math.abs(x - goalX) + Math.abs(y - goalY);
  const { image, healthCost, movesCost } = getSquare(groundSquares, x, y);
  return (
    <div className="sidebars">
      <h1>Hero Stats</h1>
      <Gauge title="Health remaining" value={heroStatus.health} maxValue={200} />
      <Gauge title="Moves remaining" value={heroStatus.moves} maxValue={450} />
      <Gauge title="Moves from home: " value={movesFromHome} maxValue={100} forceColor="white" showScale={false} />
      <div className="terrain-info">
        <h2>Current conditions</h2>
        <img className="terrain-image" src={getImage(image)} />
        <h2>Cost: {movesCost} moves / {healthCost} health</h2>
      </div>
    </div>
  )
}

export default HeroStatsDisplay;