import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonial = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={isVisible ? { opacity: 1 } : {}}
    transition={{ delay: 1.8 }}
    className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl text-white animate__animated animate__fadeIn"
  >
    <FaQuoteLeft className="text-3xl opacity-20 mb-4" />
    <p className="text-xl italic mb-6 animate__animated animate__fadeIn">
      "Leur expertise a transformé notre présence en ligne. Le service était
      exceptionnel et les résultats ont dépassé nos attentes."
    </p>
    <div className="flex items-center gap-4 animate__animated animate__fadeInUp">
      <div className="w-12 h-12 bg-white/20 rounded-full"></div>
      <div>
        <p className="font-semibold">Sarah Dupont</p>
        <p className="text-white/80">Directrice Marketing</p>
      </div>
    </div>
  </motion.div>
);

export default Testimonial;