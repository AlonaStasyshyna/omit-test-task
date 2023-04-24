import menu from '../../../images/menu.svg';
import cancelMenu from '../../../images/cancelMenu.svg';
import { Button } from './NavButton.styled';

export const NavButton = ({ isBurgerMenuOpen, menuVisibility }) => {
  return (
    <Button type="button" aria-label="Menu button" onClick={menuVisibility}>
      <img src={isBurgerMenuOpen ? cancelMenu : menu} alt="Menu" />
    </Button>
  );
};
