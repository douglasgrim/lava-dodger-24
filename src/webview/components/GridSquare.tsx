import { ReactElement } from "react";
import { GroundType } from "../../app/types";


import { getImage } from "../utils/getImage";

export type GridSquareProps = {
  groundType: GroundType;
}

function GridSquare({
  groundType
}:GridSquareProps): ReactElement {
  switch(groundType) {
  case GroundType.Speeder:
    return <img src={getImage('speeder')} />;
    break;
  case GroundType.Mud:
    return <img src={getImage('mud')} />;
    break;
  case GroundType.Lava:
    return <img src={getImage('lava')} />;
    break;
  default:
    return <img src={getImage('blank')} />;
  }
}

export default GridSquare;