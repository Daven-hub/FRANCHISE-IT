import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const FeaturesSection = ({ isVisible, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.8 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate__animated animate__fadeInUp"
  >
    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
      <div className="w-2 h-8 bg-primary rounded-full"></div>
      <span>Fonctionnalités clés</span>
    </h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 + index * 0.1 }}
          className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors animate__animated animate__fadeIn"
        >
          <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-lg flex items-center justify-center mr-3 mt-0.5">
            <FaCheck className="w-3 h-3" />
          </span>
          <span className="text-gray-700">{feature}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default FeaturesSection;