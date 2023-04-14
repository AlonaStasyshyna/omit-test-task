import logo from '../../../images/logo.png';

export const Navigation = () => {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="Site logo" width="107px" height="28px" />
      </a>

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#design">Instructional Design</a>
        </li>
        <li>
          <a href="#development">eLearning Development</a>
        </li>
        <li>
          <a href="#priceQuote">eLearning Price Quote</a>
        </li>
        <li>
          <a href="#packages">eLearning Packages</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
