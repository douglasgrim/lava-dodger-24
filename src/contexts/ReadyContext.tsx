import { createContext, PropsWithChildren } from 'react';
import useReady,  { IReadyContext } from '../hooks/useReady';

export const ReadyContext = createContext<IReadyContext>({
  isReady: false,
  setIsReady: () => {},
  isStarted: false,
  setIsStarted: () => {},
});

export const ReadyProvider = ({ children }:PropsWithChildren) => {
  const value = useReady();
  return (
    <ReadyContext.Provider value={value}>
      {children}
    </ReadyContext.Provider>
  )
}