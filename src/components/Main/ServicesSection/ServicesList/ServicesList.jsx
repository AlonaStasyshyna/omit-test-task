export const ServicesList = ({ services }) => {
  return (
    <ul>
      {services.map(({ id, occupation, description }) => (
        <li key={id}>
          <h3>{occupation}</h3>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
};
