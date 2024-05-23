import { createContext, PropsWithChildren, ReactElement } from 'react';
import useReady,  { IReadyContext } from '../hooks/useReady';

export const ReadyContext = createContext<IReadyContext>({
  isReady: false,
  setIsReady: () => {},
});

export const ReadyProvider = ({ children }:PropsWithChildren): ReactElement => {
  const value = useReady();
  return (
    <ReadyContext.Provider value={value}>
      {children}
    </ReadyContext.Provider>
  )
}