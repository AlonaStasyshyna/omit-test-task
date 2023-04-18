import { AccentSection } from './AccentSection/AccentSection';
import { DesignSection } from './DesignSection/DesignSection';
import { ServicesSection } from './ServicesSection/ServicesSection';

export const Main = () => {
  return (
    <main>
      <ServicesSection />
      <AccentSection />
      <DesignSection />
    </main>
  );
};
