import { Button, List } from './SliderButtons.styled';

export const SliderButtons = ({ page, changePage }) => {
  return (
    <List>
      <li>
        <Button
          type="button"
          value="1"
          aria-label="Slider button"
          page={page}
          onClick={changePage}
        ></Button>
      </li>

      <li>
        <Button
          type="button"
          value="2"
          aria-label="Slider button"
          page={page}
          onClick={changePage}
        ></Button>
      </li>

      <li>
        <Button
          type="button"
          value="3"
          aria-label="Slider button"
          page={page}
          onClick={changePage}
        ></Button>
      </li>
    </List>
  );
};
