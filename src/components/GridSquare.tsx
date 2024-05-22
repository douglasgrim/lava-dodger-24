import { ReactElement } from "react";

import { GroundType } from "../types";

export type GridSquareProps = {
  groundType: GroundType;
}

function GridSquare({
  groundType
}:GridSquareProps): ReactElement {
  switch(groundType) {
  case GroundType.Normal:
    return <div />;
  }
  return <div />;
}