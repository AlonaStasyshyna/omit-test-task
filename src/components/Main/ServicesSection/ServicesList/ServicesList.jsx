import layers from '../../../../images/layers.svg';
import computer from '../../../../images/computer.svg';
import phone from '../../../../images/phone.svg';
import man from '../../../../images/man.svg';

export const ServicesList = ({ services }) => {
  const getIcon = img => {
    let icon;

    switch (img) {
      case 'layers':
        icon = layers;
        break;
      case 'computer':
        icon = computer;
        break;
      case 'phone':
        icon = phone;
        break;
      case 'man':
        icon = man;
        break;
      default:
        break;
    }

    return icon;
  };

  return (
    <ul>
      {services.map(({ id, img, occupation, description }) => (
        <li key={id}>
          <img src={getIcon(img)} alt={`${occupation} icon`} />
          <h3>{occupation}</h3>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
};
