import { ReactElement, useEffect, useState, useContext } from 'react';
import './header.css';
import { ReadyContext } from '../../app/contexts/ReadyContext';

type HeaderProps = {
  activeTitle: string;
};

const TYPING_DELAY = 75;

const Header = ({
  activeTitle,
}:HeaderProps): ReactElement => {
  const titleWords = activeTitle.split('');
  const [title, setTitle] = useState('');
  const [wordIndex, setWordIndex] = useState(0);

  const { setIsReady } = useContext(ReadyContext);

  useEffect(() => {
    console.log('use effect invoked')
    let timeout: ReturnType<typeof setTimeout>;
    const buildTitle = () => {
      if (wordIndex < titleWords.length) {
        const word = titleWords[wordIndex];
        setTitle(`${title}${word}`);
        setWordIndex(wordIndex + 1);
        timeout = setTimeout(() => {
          buildTitle();
        }, TYPING_DELAY);
      } else {
        setIsReady(true);
      }
    }
    timeout = setTimeout(() => buildTitle(), TYPING_DELAY);
    return () => {
      clearTimeout(timeout);
    }
  }, [title, wordIndex, titleWords, setIsReady]);
  return <div className="header">{title}</div>
}

export default Header;