import { useState, useEffect } from 'react';

const TYPING_DELAY = 100;

type AnimatedTitle = {
  activeTitle: string,
  firstYear?: number,
  lastYear?: number,
}

export const useAnimatedTitle = ({
  activeTitle,
  firstYear = 1982,
  lastYear = 2024,
}: AnimatedTitle) => {
  const titleWords = activeTitle.split('');
  const [isComplete, setIsComplete] = useState(false);
  const [headerState, setHeaderState] = useState(0);
  const [title, setTitle] = useState('');
  const [titleWithYear, setTitleWithYear] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedYear, setDisplayedYear] = useState(firstYear);
  
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const buildTitle = () => {
      if (wordIndex < titleWords.length) {
        const word = titleWords[wordIndex];
        const nextTitle = `${title}${word}`;
        setTitleWithYear(nextTitle);
        setTitle(nextTitle)
        setWordIndex(wordIndex + 1);
      } else {
        setTitleWithYear(`${title} '${displayedYear.toString().slice(-2)}`);
        setHeaderState(1);
      }
    }
    const runYears = () => {
      if (displayedYear <= lastYear) {
        setTitleWithYear(`${title} '${displayedYear.toString().slice(-2)}`);
        setDisplayedYear(displayedYear + 1);
      } else {
        setIsComplete(true);
      }   
    }
  
    if (headerState === 0) {
      timeoutId = setTimeout(() => buildTitle(), TYPING_DELAY);
    } else if (headerState === 1 ){
      timeoutId = setTimeout(() => {setHeaderState(2)}, 500);
    }
    else {
      timeoutId = setTimeout(() => runYears(), TYPING_DELAY / 5);
    }
  
    return () => {
      clearTimeout(timeoutId);
    }
  }, [title, wordIndex, titleWords]);
  return { 
    titleWithYear,
    isComplete,
  }
}

