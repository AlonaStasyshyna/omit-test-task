import { Link, List, Nav } from './Navigation.styled';

export const Navigation = ({ menuVisibility }) => {
  return (
    <Nav>
      <List>
        <li>
          <Link href="#home" onClick={menuVisibility}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#services" onClick={menuVisibility}>
            Services
          </Link>
        </li>
        <li>
          <Link href="#design" onClick={menuVisibility}>
            Instructional Design
          </Link>
        </li>
        <li>
          <Link href="#development" onClick={menuVisibility}>
            eLearning Development
          </Link>
        </li>
        <li>
          <Link href="#priceQuote" onClick={menuVisibility}>
            eLearning Price Quote
          </Link>
        </li>
        <li>
          <Link href="#packages" onClick={menuVisibility}>
            eLearning Packages
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={menuVisibility}>
            Contact
          </Link>
        </li>
      </List>
    </Nav>
  );
};
