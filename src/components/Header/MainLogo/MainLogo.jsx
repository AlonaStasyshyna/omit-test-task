import { ThemeButton } from '../ThemeButton/ThemeButton';
import logo from '../../../images/logo.png';

export const MainLogo = ({ theme, changeTheme }) => {
  return (
    <div>
      <img src={logo} alt="Site logo" width="177px" height="48px" />
      <p>Taking Learning to the Next Level</p>
      <ThemeButton theme={theme} changeTheme={changeTheme} />
    </div>
  );
};
