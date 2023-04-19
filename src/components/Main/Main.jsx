import { AccentSection } from './AccentSection/AccentSection';
import { ContactSection } from './ContactSection/ContactSection';
import { DesignSection } from './DesignSection/DesignSection';
import { ServicesSection } from './ServicesSection/ServicesSection';

export const Main = () => {
  return (
    <main>
      <ServicesSection />
      <AccentSection />
      <DesignSection />
      <ContactSection />
    </main>
  );
};
