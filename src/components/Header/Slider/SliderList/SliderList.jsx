import servicesImg from '../../../../images/services.jpg';
import designImg from '../../../../images/design.jpg';
import developmentImg from '../../../../images/development.jpg';
import priceQuoteImg from '../../../../images/priceQuote.jpg';
import packagesImg from '../../../../images/packages.jpg';
import envelopeIcon from '../../../../images/envelope.svg';
import { Image, Item, List, Text } from './SliderList.styled';

export const SliderList = ({ page }) => {
  return (
    <List>
      {page === '1' && (
        <>
          <Item>
            <a href="#services">
              <Image src={servicesImg} alt="Keyboard" />
              <Text>Services</Text>
            </a>
          </Item>

          <Item>
            <a href="#design">
              <Image src={designImg} alt="Laptop" />
              <Text>Instructional Design</Text>
            </a>
          </Item>
        </>
      )}

      {page === '2' && (
        <>
          <Item>
            <a href="#development">
              <Image src={developmentImg} alt="Workplace" />
              <Text>eLearning Development</Text>
            </a>
          </Item>

          <Item>
            <a href="#priceQuote">
              <Image src={priceQuoteImg} alt="Worker" />
              <Text>eLearning Price Quote</Text>
            </a>
          </Item>
        </>
      )}

      {page === '3' && (
        <>
          <Item>
            <a href="#packages">
              <Image src={packagesImg} alt="Desktop" />
              <Text>eLearning Packages</Text>
            </a>
          </Item>

          <Item>
            <a href="#contact">
              <Image src={envelopeIcon} alt="Envelope" />
              <Text>Contact us</Text>
            </a>
          </Item>
        </>
      )}
    </List>
  );
};
