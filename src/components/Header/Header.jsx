import { MainLogo } from './MainLogo/MainLogo';
import { Navigation } from './Navigation/Navigation';
import { Slider } from './Slider/Slider';

export const Header = () => {
  return (
    <header>
      <MainLogo />
      <Slider />
      <Navigation />
    </header>
  );
};
