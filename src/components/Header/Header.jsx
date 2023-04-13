import { MainLogo } from './MainLogo/MainLogo';
import { Navigation } from './Navigation/Navigation';
import { Slider } from './Slider/Slider';

export const Header = ({ isThemeLight, changeTheme }) => {
  return (
    <header>
      <MainLogo isThemeLight={isThemeLight} changeTheme={changeTheme} />
      <Slider />
      <Navigation />
    </header>
  );
};
