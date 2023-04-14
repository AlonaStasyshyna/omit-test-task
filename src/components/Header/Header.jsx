import { MainLogo } from './MainLogo/MainLogo';
import { Navigation } from './Navigation/Navigation';
import { Slider } from './Slider/Slider';

export const Header = ({ theme, changeTheme }) => {
  return (
    <header id="home">
      <MainLogo theme={theme} changeTheme={changeTheme} />
      <Slider />
      <Navigation />
    </header>
  );
};
