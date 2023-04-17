export const Pagination = ({ totalPages, prevPage, nextPage, changePage }) => {
  const numbers = [];

  for (let i = 1; i <= totalPages; i += 1) {
    numbers.push(i);
  }

  return (
    <ul>
      <li>
        <button type="button" onClick={prevPage}>
          Prev
        </button>
      </li>
      {numbers.map(number => (
        <li key={number}>
          <button type="button" onClick={() => changePage(number)}>
            {number}
          </button>
        </li>
      ))}
      <li>
        <button type="button" onClick={nextPage}>
          Next
        </button>
      </li>
    </ul>
  );
};
