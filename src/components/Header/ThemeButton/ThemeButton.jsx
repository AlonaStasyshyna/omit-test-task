import sun from '../../../images/sun.svg';
import moon from '../../../images/moon.svg';

export const ThemeButton = ({ isThemeLight, changeTheme }) => {
  return (
    <button type="button" onClick={changeTheme}>
      {isThemeLight ? 'Daymode' : 'Nightmode'}
      <img
        src={isThemeLight ? sun : moon}
        alt="Theme icon"
        width="22px"
        height="22px"
      />
    </button>
  );
};
