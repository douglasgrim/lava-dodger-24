import { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../app/state/store';

import './header.css';
import { setAppReady } from '../../app/state/reducers/loadedDataSlice';
import { useAnimatedTitle } from '../../app/hooks/useAnimatedTitle';

type HeaderProps = {
  activeTitle: string;
  firstYear?: number,
  lastYear?: number,
};

const TYPING_DELAY = 75;

const Header = ({
  activeTitle,
  firstYear = 1983,
  lastYear = 2024,
}:HeaderProps): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();

  const { titleWithYear, isComplete } = useAnimatedTitle({
    activeTitle,
    firstYear,
    lastYear,
  });

  if (isComplete) {
    dispatch(setAppReady(true));
  }

  return <div className="header">{titleWithYear}</div>
}

export default Header;