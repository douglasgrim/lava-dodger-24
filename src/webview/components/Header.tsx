import { ReactElement, useEffect } from 'react';

import './header.css';
import { useAnimatedTitle } from '../../app/hooks/useAnimatedTitle';

type HeaderProps = {
  activeTitle: string;
};

const Header = ({
  activeTitle,
}:HeaderProps): ReactElement => {
  return <div className="header">{activeTitle}</div>
}

export default Header;