import { useEffect, useState } from 'react';
import { Header } from './Header/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'utils/GlobalStyle';
import { darkTheme, lightTheme } from 'utils/theme';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { ModalChatButton } from './ModalChat/ModalChatButton/ModalChatButton';
import { ModalChat } from './ModalChat/ModalChat';

export const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || 'light'
  );
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
  };

  const openChat = () => {
    setIsChatOpen(prevState => !prevState);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header theme={theme} changeTheme={changeTheme} />
      <Main />
      <Footer />
      <ModalChatButton openChat={openChat} />

      {isChatOpen && <ModalChat />}
    </ThemeProvider>
  );
};
