import { ReactElement } from "react";
import { GroundType, ImageType } from "../../app/types";
import { getImage } from "../utils/getImage";
import { getMapPosition } from "../utils";

export type GridSquareProps = {
  groundType: GroundType;
  x: number;
  y: number;
}

function GridSquare({
  groundType,
  x,
  y,
}:GridSquareProps): ReactElement {
  let imageName:ImageType;
  const { heroX, heroY } = getMapPosition({ x, y });
  switch(groundType) {
  case GroundType.Speeder:
    imageName = 'speeder';
    // return <img src={getImage('speeder')} />;
    break;
  case GroundType.Mud:
    imageName = 'mud';
    // return <img src={getImage('mud')} />;
    break;
  case GroundType.Lava:
    imageName = 'lava';
    // return <img src={getImage('lava')} />;
    break;
  default:
    imageName = 'blank';
    // return <img src={getImage('blank')} />;
  }
  return (
    <img
      src={getImage(imageName)}
      style={{
        position: 'absolute',
        left: `${heroX}px`,
        top: `${heroY}px`,
      }}
    />);
}

export default GridSquare;