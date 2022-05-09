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

  useEffect((): void => {
    window
      .matchMedia(bigScreen)
      .addEventListener('change', (e: MediaQueryListEvent): void => setBig(e.matches));

    window
      .matchMedia(middleScreen)
      .addEventListener('change', (e: MediaQueryListEvent): void => setMiddle(e.matches));

    window
      .matchMedia(smallScreen)
      .addEventListener('change', (e: MediaQueryListEvent): void => setSmall(e.matches));
  });

  return screen;
}
