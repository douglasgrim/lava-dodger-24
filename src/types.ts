export enum GroundType {
  Normal,
  Lava,
  Speeder,
  Mud,
}

export type ReadyContent = {
  isReady: boolean
  setIsReady: () => void
}
