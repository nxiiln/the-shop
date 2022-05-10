import {useState, useEffect} from 'react';


export const bigScreen: string = '(min-width: 961px)';
export const middleScreen: string = '(min-width: 731px) and (max-width: 960px)';
export const smallScreen: string = '(max-width: 730px)';

interface Screen {
  big: boolean;
  middle: boolean;
  small: boolean;
}

export const useMediaQuery = (): Screen => {
  const [big, setBig] = useState<boolean>(window.matchMedia(bigScreen).matches);
  const [middle, setMiddle] = useState<boolean>(window.matchMedia(middleScreen).matches);
  const [small, setSmall] = useState<boolean>(window.matchMedia(smallScreen).matches);
  const screen: Screen = {big: big, middle: middle, small: small};
 
  useEffect(() => {
    const queryBigScreen: MediaQueryList = window.matchMedia(bigScreen);
    const queryMiddleScreen: MediaQueryList = window.matchMedia(middleScreen);
    const querySmallScreen: MediaQueryList = window.matchMedia(smallScreen);

    const listenerBigScreen = (): void => setBig(queryBigScreen.matches);
    const listenerMiddleScreen = (): void => setMiddle(queryMiddleScreen.matches);
    const listenerSmallScreen = (): void => setSmall(querySmallScreen.matches);

    queryBigScreen.addEventListener('change', listenerBigScreen);
    queryMiddleScreen.addEventListener('change', listenerMiddleScreen);
    querySmallScreen.addEventListener('change', listenerSmallScreen);

    return (): void => {
      queryBigScreen.removeEventListener('change', listenerBigScreen);
      queryMiddleScreen.removeEventListener('change', listenerMiddleScreen);
      querySmallScreen.removeEventListener('change', listenerSmallScreen);
    }
  }, [big, middle, small]);

  return screen;
}
