import { useEffect, useState } from 'react';
import servicesData from '../../../data/services.json';
import { Pagination } from './Pagination/Pagination';
import { ServicesFilter } from './ServicesFilter/ServicesFilter';
import { ServicesList } from './ServicesList/ServicesList';

export const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [occupation, setOccupation] = useState('');
  const [page, setPage] = useState(1);
  const [limit] = useState(4);

  useEffect(() => {
    if (!occupation && type) {
      setServices(
        servicesData.filter(
          service =>
            service.description.includes(query) && service.type === type
        )
      );
    } else if (!type && occupation) {
      setServices(
        servicesData.filter(
          service =>
            service.description.includes(query) &&
            service.occupation === occupation
        )
      );
    } else if (!type && !occupation) {
      setServices(
        servicesData.filter(service => service.description.includes(query))
      );
    } else {
      setServices(
        servicesData.filter(
          service =>
            service.description.includes(query) &&
            service.type === type &&
            service.occupation === occupation
        )
      );
    }
  }, [type, occupation, query]);

  const totalPages = services.length / limit;
  const lastServiceIndex = page * limit;
  const firstServiceIndex = lastServiceIndex - limit;
  const currentServices = services.slice(firstServiceIndex, lastServiceIndex);

  const changeQuery = ({ target: { value } }) => {
    setQuery(value.trim());
  };

  const changeType = ({ target: { value } }) => {
    setType(value);
  };

  const changeOccupation = ({ target: { value } }) => {
    setOccupation(value);
  };

  const prevPage = () => {
    if (page === 1) {
      return;
    }

    setPage(prevState => prevState - 1);
  };

  const nextPage = () => {
    if (page === totalPages) {
      return;
    }

    setPage(prevState => prevState + 1);
  };

  const changePage = number => {
    setPage(number);
  };

  return (
    <section id="services">
      <h2>Services We Provide</h2>

      <ServicesFilter
        changeQuery={changeQuery}
        changeType={changeType}
        changeOccupation={changeOccupation}
      />
      <ServicesList services={currentServices} />
      <Pagination
        page={page}
        totalPages={totalPages}
        prevPage={prevPage}
        nextPage={nextPage}
        changePage={changePage}
      />
    </section>
  );
};
