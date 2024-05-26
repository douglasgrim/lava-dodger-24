export type GridPlacement = {
  x: number,
  y: number,
  mapWidth?: number,
  mapHeight?: number,
  mapXOffset?: number,
  mapYOffset?: number,
  gridWidth?: number,
  gridHeight?: number,
}

export type MapPosition = {
  mapX: number,
  mapY: number,
  heroX: number,
  heroY: number,
}

export const getMapPosition = ({
  x,
  y,
  mapWidth = 500,
  mapHeight = 500,
  gridWidth = 55,
  gridHeight = 55,
  mapXOffset = 2,
  mapYOffset = 2,
}: GridPlacement): MapPosition => {
  // console.log(mapHeight, mapWidth, x, y);
  const heroX = x * gridWidth + mapXOffset;
  const heroY = y * gridHeight + mapYOffset;
  const mapX = Math.min(Math.max(0, heroX - mapWidth / 2), 50 * gridWidth - mapWidth);
  const mapY = Math.min(Math.max(0, heroY - mapHeight / 2), 50 * gridHeight - mapHeight);

  return { mapX, mapY, heroX, heroY };
}