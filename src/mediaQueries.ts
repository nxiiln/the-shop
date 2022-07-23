import {useState, useEffect} from 'react';


export const bigScreen: string = '(min-width: 961px)';
export const mediumScreen: string = '(min-width: 760px) and (max-width: 960px)';
export const smallScreen: string = '(max-width: 759px)';

interface Screen {
  big: boolean;
  medium: boolean;
  small: boolean;
  touch: boolean;
}

export const useMediaQuery = (): Screen => {
  const [big, setBig] = useState<boolean>(window.matchMedia(bigScreen).matches);
  const [medium, setMedium] = useState<boolean>(window.matchMedia(mediumScreen).matches);
  const [small, setSmall] = useState<boolean>(window.matchMedia(smallScreen).matches);
  const touch: boolean = window.matchMedia('(hover: hover)').matches;
  const screen: Screen = {big: big, medium: medium, small: small, touch: touch};
 
  useEffect(() => {
    const queryBigScreen: MediaQueryList = window.matchMedia(bigScreen);
    const queryMediumScreen: MediaQueryList = window.matchMedia(mediumScreen);
    const querySmallScreen: MediaQueryList = window.matchMedia(smallScreen);

    const listenerBigScreen = (): void => setBig(queryBigScreen.matches);
    const listenerMediumScreen = (): void => setMedium(queryMediumScreen.matches);
    const listenerSmallScreen = (): void => setSmall(querySmallScreen.matches);

    queryBigScreen.addEventListener('change', listenerBigScreen);
    queryMediumScreen.addEventListener('change', listenerMediumScreen);
    querySmallScreen.addEventListener('change', listenerSmallScreen);

    return (): void => {
      queryBigScreen.removeEventListener('change', listenerBigScreen);
      queryMediumScreen.removeEventListener('change', listenerMediumScreen);
      querySmallScreen.removeEventListener('change', listenerSmallScreen);
    }
  }, [big, medium, small]);

  return screen;
}
