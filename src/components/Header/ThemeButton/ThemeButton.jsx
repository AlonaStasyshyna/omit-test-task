import { Button, IconWrapper } from './ThemeButton.styled';

export const ThemeButton = ({ theme, changeTheme }) => {
  return (
    <Button type="button" onClick={changeTheme}>
      {theme === 'light' ? 'Daymode' : 'Nightmode'}
      <IconWrapper themeType={theme}>
        {theme === 'light' ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9998 6.44507C15.0664 6.44507 17.5553 8.93396 17.5553 12.0006C17.5553 15.0673 15.0664 17.5562 11.9998 17.5562C8.9331 17.5562 6.44421 15.0673 6.44421 12.0006C6.44421 8.93396 8.9331 6.44507 11.9998 6.44507Z"
              stroke="#343434"
              stroke-width="1.77778"
              stroke-linecap="round"
            />
            <path
              d="M11.9998 22V23.1111M21.9998 12H23.1109M11.9998 2.00003V0.888916M1.99978 12H0.888672"
              stroke="#343434"
              stroke-width="1.77778"
              stroke-linecap="round"
            />
            <path
              d="M19.222 19.2227L19.7776 19.7782M19.222 4.77821L19.7776 4.22266M4.7776 4.77821L4.22205 4.22266M4.7776 19.2227L4.22205 19.7782"
              stroke="#343434"
              stroke-width="1.77778"
              stroke-linecap="round"
            />
          </svg>
        ) : (
          <svg
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.0866 5.4264L20.1481 3.7192L17.5488 3.64L16.6851 1L15.8214 3.64L13.2222 3.7192L15.2836 5.4264L14.5422 8.1192L16.6851 6.5264L18.8281 8.1192L18.0866 5.4264Z"
              fill="#343434"
            />
            <path
              d="M21.6637 10.9L23 9.80004L21.3215 9.75604L20.7593 8.04004L20.1971 9.75604L18.5186 9.80004L19.8549 10.9L19.3741 12.6424L20.7593 11.6128L22.1445 12.6424L21.6637 10.9Z"
              fill="#343434"
            />
            <path
              d="M5.92038 3.07246C5.92038 11.1498 11.9724 17.686 19.4514 17.686C20.1034 17.686 20.743 17.6328 21.3704 17.5399C19.3899 20.8213 15.9703 23 12.0709 23C5.95728 23 1 17.6461 1 11.0435C1 6.83213 3.01736 3.13889 6.05569 1C5.96958 1.67754 5.92038 2.36836 5.92038 3.07246Z"
              fill="#343434"
              stroke="#343434"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </IconWrapper>
    </Button>
  );
};
