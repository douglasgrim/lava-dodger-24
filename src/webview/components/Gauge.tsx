import './gauge.css';

type GaugeType = {
  title: string,
  maxValue: number,
  value: number,
}

const Gauge = ({
  title,
  maxValue,
  value,
}: GaugeType) => {
  const pct = Math.max(0, value / (maxValue || 1));
  const conditionColor = `rgb(${Math.floor((1 - pct) * 255)}, ${Math.floor(pct * 255)}, 0)`;
  const style = {
    backgroundColor: conditionColor,
    width: `${pct * 100}%`
  }
  return (
    <div className="gauge">
      <div className="gauge-scale-container">
        <div className="gauge-scale" style={style} />
      </div>
      <h2>{title} <span style={{ color: conditionColor }}>{value}</span></h2>
    </div>
  )
}

export default Gauge;