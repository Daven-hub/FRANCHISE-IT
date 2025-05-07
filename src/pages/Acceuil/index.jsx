import { useEffect } from 'react';
import FormulaireContact from "../../components/ContactComponent/FormulaireContact";
import servicesData from "../../data/ServiceData/Index";
import NosServices from "./CarroucelService";
import RealisationsSection from "./RealisationSection";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Styles AOS

const service = servicesData.services;

const Accueil = () => {
  useEffect(() => {
    // Initialisation AOS avec des options pour des animations douces
    AOS.init({
      duration: 800, // Durée de l'animation en ms
      easing: 'ease-in-out-quad', // Courbe de vitesse douce
      once: false, // Si true, l'animation ne se joue qu'une fois
      offset: 120, // Déclenche l'animation un peu avant que l'élément soit visible
      delay: 100, // Délai optionnel pour chaque élément
    });
  }, []);

  return (
    <>
      <div className="bg-bg-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 relative z-10">
          <div data-aos="fade-up" data-aos-delay="50">
            <NosServices services={service} />
          </div>
          
          <div data-aos="fade-up" data-aos-delay="150">
            <RealisationsSection />
          </div>
          
          <div data-aos="fade-up" data-aos-delay="250">
            <FormulaireContact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil;