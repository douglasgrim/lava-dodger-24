import { ReactElement } from 'react';

import './header.css';
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
  const { titleWithYear } = useAnimatedTitle({
    activeTitle,
    firstYear,
    lastYear,
  });

  return <div className="header">{titleWithYear}</div>
}

export default Header;