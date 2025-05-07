import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const BackButton = ({ navigate, categoryId }) => (
  <motion.button
    onClick={() => navigate(`/service#${categoryId}`)}
    whileHover={{ x: -5 }}
    className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-12 group animate__animated animate__fadeIn"
  >
    <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
    <span>Retour aux services</span>
  </motion.button>
);

export default BackButton;