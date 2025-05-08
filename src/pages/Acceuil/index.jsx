// pages/Accueil/index.jsx
import 'animate.css';
import About from "../../components/About";
import FormulaireContact from "../../components/ContactComponent/FormulaireContact";
import servicesData from "../../data/ServiceData/Index";
import NosServices from "./CarroucelService";
import RealisationsSection from "./RealisationSection";
import AnimateOnScroll from '../../components/AnimateOnScroll';

const service = servicesData.services;

const Accueil = () => {
  return (
    <div className="bg-bg-end relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-grid-blue-900/[0.02]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 relative z-10 space-y-16">

        <AnimateOnScroll animation="animate__fadeInUp">
          <NosServices services={service} />
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate__fadeInLeft">
          <About />
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate__zoomIn">
          <RealisationsSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate__fadeInUp">
          <FormulaireContact />
        </AnimateOnScroll>
        
      </div>
    </div>
  );
};

export default Accueil;
