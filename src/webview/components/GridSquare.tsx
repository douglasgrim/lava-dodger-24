import { ReactElement } from "react";

import { GroundType } from "../../types";
import lavaImg from '../../assets/images/lava.png';
import mudImg from '../../assets/images/mud.png';
import normalImg from '../../assets/images/normal.png';
import speederImg from '../../assets/images/speeder.png';

export type GridSquareProps = {
  groundType: GroundType;
}

function GridSquare({
  groundType
}:GridSquareProps): ReactElement {
  switch(groundType) {
  case GroundType.Speeder:
    return <img src={speederImg} />;
    break;
  case GroundType.Mud:
    return <img src={mudImg} />;
    break;
  case GroundType.Lava:
    return <img src={lavaImg} />;
    break;
  default:
    return <img src={normalImg} />;
  }
}

export default GridSquare;