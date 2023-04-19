import { useState } from 'react';
import { useMedia } from 'react-use';
import { Container } from 'utils/GlobalStyle';
import { MainLogo } from './MainLogo/MainLogo';
import { Navigation } from './Navigation/Navigation';
import { Slider } from './Slider/Slider';
import { Logo } from './Logo/Logo';
import { NavButton } from './NavButton/NavButton';
import { CustomizedHeader, MenuWrapper, Wrapper } from './Header.styled';

export const Header = ({ theme, changeTheme }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const isTablet = useMedia('(min-width: 768px)');

  const menuVisibility = () => {
    setIsBurgerMenuOpen(prevState => !prevState);
  };

  return (
    <CustomizedHeader id="home">
      <Container>
        {isTablet && (
          <Wrapper>
            <MainLogo theme={theme} changeTheme={changeTheme} />
            <Slider />
          </Wrapper>
        )}

        <MenuWrapper>
          <Logo />
          {!isTablet && !isBurgerMenuOpen && (
            <NavButton
              isBurgerMenuOpen={isBurgerMenuOpen}
              menuVisibility={menuVisibility}
            />
          )}
          {!isTablet && isBurgerMenuOpen && (
            <>
              <NavButton
                isBurgerMenuOpen={isBurgerMenuOpen}
                menuVisibility={menuVisibility}
              />
              <Navigation />
            </>
          )}
          {isTablet && <Navigation />}
        </MenuWrapper>
      </Container>
    </CustomizedHeader>
  );
};
