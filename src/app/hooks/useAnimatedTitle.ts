import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
import { setAppReady } from '../state/reducers/gameEventsSlice';

const TYPING_DELAY = 100;

type AnimatedTitle = {
  activeTitle: string,
  firstYear?: number,
  lastYear?: number,
}

export const useAnimatedTitle = ({
  activeTitle,
  firstYear,
  lastYear,
}: AnimatedTitle) => {
  const dispatch = useDispatch<AppDispatch>();
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
        if (displayedYear) {
            setTitleWithYear(`${title} '${displayedYear.toString().slice(-2)}`);
            setHeaderState(1);  
        } else {
          dispatch(setAppReady(true));
        }
      }
    }
    const runYears = () => {
      if ((displayedYear && lastYear) && displayedYear <= lastYear) {
        setTitleWithYear(`${title} '${displayedYear.toString().slice(-2)}`);
        setDisplayedYear(displayedYear + 1);
      } else {
        dispatch(setAppReady(true))
      }   
    }
  
    if (headerState === 0) {
      timeoutId = setTimeout(() => buildTitle(), TYPING_DELAY);
    } else if (headerState === 1 ){
      timeoutId = setTimeout(() => {setHeaderState(2)}, 500);
    }
    else if (headerState === 2) {
      timeoutId = setTimeout(() => runYears(), TYPING_DELAY / 5);
    }
  
    return () => {
      clearTimeout(timeoutId);
    }
  }, [title, wordIndex, titleWords, activeTitle]);
  return { 
    titleWithYear,
  }
}

