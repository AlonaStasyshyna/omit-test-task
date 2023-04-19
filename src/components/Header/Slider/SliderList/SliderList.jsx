import servicesImg from '../../../../images/services.jpg';
import designImg from '../../../../images/design.jpg';
import developmentImg from '../../../../images/development.jpg';
import priceQuoteImg from '../../../../images/priceQuote.jpg';
import packagesImg from '../../../../images/packages.jpg';
import envelopeIcon from '../../../../images/envelope.svg';

export const SliderList = ({ page }) => {
  return (
    <ul>
      {page === '1' && (
        <>
          <li>
            <a href="#services">
              <img src={servicesImg} alt="Keyboard" />
              <p>Services</p>
            </a>
          </li>

          <li>
            <a href="#design">
              <img src={designImg} alt="Laptop" />
              <p>Instructional Design</p>
            </a>
          </li>
        </>
      )}

      {page === '2' && (
        <>
          <li>
            <a href="#development">
              <img src={developmentImg} alt="Workplace" />
              <p>eLearning Development</p>
            </a>
          </li>

          <li>
            <a href="#priceQuote">
              <img src={priceQuoteImg} alt="Worker" />
              <p>eLearning Price Quote</p>
            </a>
          </li>
        </>
      )}

      {page === '3' && (
        <>
          <li>
            <a href="#packages">
              <img src={packagesImg} alt="Desktop" />
              <p>eLearning Packages</p>
            </a>
          </li>

          <li>
            <a href="#contact">
              <img src={envelopeIcon} alt="Envelope" />
              <p>Contact us</p>
            </a>
          </li>
        </>
      )}
    </ul>
  );
};
