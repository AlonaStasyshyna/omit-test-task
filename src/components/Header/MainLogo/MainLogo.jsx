import { ThemeButton } from '../ThemeButton/ThemeButton';
import logo from '../../../images/logo.png';
import { LogoImg, Text, Wrapper } from './MainLogo.styled';

export const MainLogo = ({ theme, changeTheme }) => {
  return (
    <Wrapper>
      <LogoImg src={logo} alt="Site logo" />
      <Text>Taking Learning to the Next Level</Text>
      <ThemeButton theme={theme} changeTheme={changeTheme} />
    </Wrapper>
  );
};
