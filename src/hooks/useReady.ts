import { useState, Dispatch, SetStateAction } from "react";

export interface IReadyContext {
  isReady: boolean;
  setIsReady: Dispatch<SetStateAction<boolean>>;
  isStarted: boolean;
  setIsStarted: Dispatch<SetStateAction<boolean>>;
}

export default function useReady() {
  const [isReady, setIsReady] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const value: IReadyContext = {
    isReady,
    setIsReady,
    isStarted,
    setIsStarted,
  };

  return value;
}
