import { useEffect, useState } from 'react';

export const Pagination = ({
  page,
  totalPages,
  prevPage,
  nextPage,
  changePage,
}) => {
  const [firstNumberIndex, setFirstNumberIndex] = useState(0);
  const [lastNumberIndex, setLastNumberIndex] = useState(3);

  useEffect(() => {
    if (page === lastNumberIndex && page !== totalPages) {
      setFirstNumberIndex(prevState => prevState + 1);
      setLastNumberIndex(prevState => prevState + 1);
    }

    if (page === firstNumberIndex + 1 && firstNumberIndex !== 0) {
      setFirstNumberIndex(prevState => prevState - 1);
      setLastNumberIndex(prevState => prevState - 1);
    }
  }, [page, totalPages, firstNumberIndex, lastNumberIndex]);

  const numbers = [];

  for (let i = 1; i <= totalPages; i += 1) {
    numbers.push(i);
  }

  return (
    <ul>
      <li>
        <button
          type="button"
          onClick={prevPage}
          disabled={page > 1 ? false : true}
        >
          Prev
        </button>
      </li>
      {numbers.slice(firstNumberIndex, lastNumberIndex).map(number => (
        <li key={number}>
          <button type="button" onClick={() => changePage(number)}>
            {number}
          </button>
        </li>
      ))}
      <li>
        <button
          type="button"
          onClick={nextPage}
          disabled={page < totalPages ? false : true}
        >
          Next
        </button>
      </li>
    </ul>
  );
};
