import { forEachChild } from 'typescript';
import './gauge.css';

type GaugeType = {
  title: string,
  maxValue: number,
  value: number,
  showScale?: boolean,
  forceColor?: string,
}

const Gauge = ({
  title,
  maxValue,
  value,
  showScale = true,
  forceColor,
}: GaugeType) => {
  const pct = Math.max(0, value / (maxValue || 1));
  let conditionColor = `rgb(${Math.floor((1 - pct) * 255)}, ${Math.floor(pct * 255)}, 0)`;
  if (forceColor) {
    conditionColor = forceColor;
  }
  const style = {
    backgroundColor: conditionColor,
    width: `${pct * 100}%`
  }
  return (
    <div className="gauge">
      { showScale && 
        (
          <div className="gauge-scale-container">
            <div className="gauge-scale" style={style} />
          </div>
        )
      }
      <h2>{title} <span style={{ color: conditionColor }}>{value}</span></h2>
    </div>
  )
}

export default Gauge;