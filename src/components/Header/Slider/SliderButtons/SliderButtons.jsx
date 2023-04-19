export const SliderButtons = ({ changePage }) => {
  return (
    <ul>
      <li>
        <button
          type="button"
          value="1"
          aria-label="Slider button"
          onClick={changePage}
        ></button>
      </li>

      <li>
        <button
          type="button"
          value="2"
          aria-label="Slider button"
          onClick={changePage}
        ></button>
      </li>

      <li>
        <button
          type="button"
          value="3"
          aria-label="Slider button"
          onClick={changePage}
        ></button>
      </li>
    </ul>
  );
};
