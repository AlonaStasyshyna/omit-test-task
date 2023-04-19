import menu from '../../../images/menu.svg';
import cancel from '../../../images/cancel.svg';

export const NavButton = ({ isBurgerMenuOpen, menuVisibility }) => {
  return (
    <button type="button" aria-label="Menu button" onClick={menuVisibility}>
      <img src={isBurgerMenuOpen ? cancel : menu} alt="Menu" />
    </button>
  );
};
