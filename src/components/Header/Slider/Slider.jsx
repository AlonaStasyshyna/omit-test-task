import { useState } from 'react';
import { SliderButtons } from './SliderButtons/SliderButtons';
import { SliderList } from './SliderList/SliderList';

export const Slider = () => {
  const [page, setPage] = useState('1');

  const changePage = e => {
    setPage(e.target.value);
  };

  return (
    <>
      <SliderList page={page} />
      <SliderButtons changePage={changePage} />
    </>
  );
};
