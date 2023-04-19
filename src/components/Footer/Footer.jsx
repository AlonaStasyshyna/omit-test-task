import { FooterCopyright } from './FooterCopyright/FooterCopyright';
import { FooterList } from './FooterList/FooterList';
import { FooterLogo } from './FooterLogo/FooterLogo';

export const Footer = () => {
  return (
    <footer>
      <FooterLogo />
      <FooterList />
      <FooterCopyright />
    </footer>
  );
};
