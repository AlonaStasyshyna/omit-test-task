import sun from '../../../images/sun.svg';
import moon from '../../../images/moon.svg';

export const ThemeButton = ({ theme, changeTheme }) => {
  return (
    <button type="button" onClick={changeTheme}>
      {theme === 'light' ? 'Daymode' : 'Nightmode'}
      <img
        src={theme === 'light' ? sun : moon}
        alt="Theme icon"
        width="22px"
        height="22px"
      />
    </button>
  );
};
