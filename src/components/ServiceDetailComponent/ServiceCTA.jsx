import { motion } from "framer-motion";

const ServiceCTA = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 1.5 }}
    className="bg-primary/5 p-6 rounded-2xl border border-primary/10 animate__animated animate__fadeInUp"
  >
    <h3 className="text-lg font-semibold text-gray-900 mb-3">
      Intéressé par ce service ?
    </h3>
    <p className="text-gray-600 mb-4">
      Discutons de votre projet et trouvons la meilleure solution pour vos besoins.
    </p>
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-primary text-white font-medium py-2 px-4 rounded-lg shadow hover:shadow-md transition-all animate__animated animate__pulse animate__infinite"
    >
      Contactez-nous
    </motion.button>
  </motion.div>
);

export default ServiceCTA;