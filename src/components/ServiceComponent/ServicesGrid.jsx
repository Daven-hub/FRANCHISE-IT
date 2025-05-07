import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";

export default function ServicesGrid({ services, hoveredService, setHoveredService }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ServicesCard
            service={service}
            isHovered={hoveredService === service.id}
            onHover={() => setHoveredService(service.id)}
            onLeave={() => setHoveredService(null)}
          />
        </motion.div>
      ))}
    </div>
  );
}