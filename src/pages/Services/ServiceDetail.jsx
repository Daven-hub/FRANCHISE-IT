import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "../../data/ServiceData/Index";
import "animate.css/animate.min.css";
import BackButton from "../../components/ServiceDetailComponent/BackButton";
import ServiceHero from "../../components/ServiceDetailComponent/ServiceHero";
import FeaturesSection from "../../components/ServiceDetailComponent/FeaturesSection";
import ProcessSection from "../../components/ServiceDetailComponent/ProcessSection";
import Testimonial from "../../components/ServiceDetailComponent/Testimonial";
import ServiceCTA from "../../components/ServiceDetailComponent/ServiceCTA";
import QuickFacts from "../../components/ServiceDetailComponent/QuickFacts";

const ServiceDetail = () => {
  const { categoryId, serviceId } = useParams();
  const navigate = useNavigate();
  const category = servicesData.services[categoryId];
  const service = category?.items.find((item) => item.id === serviceId);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Service non trouvé
      </div>
    );
  }

  return (
    <div className="bg-bg-end">
      <AnimatePresence mode="wait">
        <motion.div
          key={serviceId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

          <BackButton navigate={navigate} categoryId={categoryId} />
          
          <ServiceHero service={service} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <FeaturesSection 
                isVisible={isVisible} 
                features={service.features} 
              />
              
              <ProcessSection isVisible={isVisible} />
              
              <Testimonial isVisible={isVisible} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <QuickFacts isVisible={isVisible} />
              
              {service.technologies && (
                <TechnologiesList 
                  isVisible={isVisible} 
                  technologies={service.technologies} 
                />
              )}
              
              <ServiceCTA isVisible={isVisible} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServiceDetail;