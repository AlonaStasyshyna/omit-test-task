import { useState } from 'react';
import { Header } from './Header/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'utils/GlobalStyle';
import { darkTheme, lightTheme } from 'utils/theme';

export const App = () => {
  const [isThemeLight, setIsThemeLight] = useState(true);

  const changeTheme = () => {
    setIsThemeLight(prevState => !prevState);
  };

  return (
    <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header isThemeLight={isThemeLight} changeTheme={changeTheme} />
    </ThemeProvider>
  );
};
