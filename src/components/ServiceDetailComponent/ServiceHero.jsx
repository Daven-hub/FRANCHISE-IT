import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt, FaCheckCircle, FaChartLine, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceHero = ({ service }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-20 lg:mb-28 relative"
  >
    {/* Fond décoratif */}
    <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
    <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-purple-100/20 rounded-full blur-3xl"></div>

    {/* Partie Image */}
    <div className="lg:w-1/2 relative group">
      <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl"></div>
      <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full"></div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-2xl shadow-2xl border-8 border-white"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Badge sur l'image */}
        {service.expertTip && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-800 flex items-center gap-2">
              <FaLightbulb className="text-yellow-500" /> {service.expertTip}
            </p>
          </div>
        )}
      </motion.div>

      {/* Badge de garantie */}
      {service.guarantee && (
        <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-1">
          <FaCheckCircle /> {service.guarantee}
        </div>
      )}
    </div>

    {/* Partie Texte */}
    <div className="lg:w-1/2 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl text-2xl mb-6 shadow-lg"
      >
        {service.icon}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-primary mb-4 md:mb-6"
      >
        {service.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-base sm:text-lg md:text-xl  text-gray-600 mb-6 md:mb-8"
      >
        {service.description}
      </motion.p>

      {/* Section Avantages */}
      {service.advantages && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaChartLine className="text-primary" /> Pourquoi choisir ce service ?
          </h3>
          <ul className="space-y-3">
            {service.advantages.map((advantage, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Statistique clé */}
      {service.stats && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100"
        >
          <p className="text-primary-dark font-semibold flex items-center gap-2">
            <span className="bg-primary-light/20 px-2 py-1 rounded-md">📈</span>
            {service.stats}
          </p>
        </motion.div>
      )}

      {/* Boutons d'action */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link to={'/contact'}>
        <motion.button
          whileHover={{ 
            scale: 1.03, 
            boxShadow: "0 10px 25px -10px rgba(59, 130, 246, 0.5)",
            backgroundColor: "#2563eb" // Darker primary color on hover
          }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all"
        >
          Discutons de votre projet <FaArrowRight />
        </motion.button>
        </Link>

        {/* <motion.a
          href="tel:+1234567890"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 border border-gray-300 bg-white text-gray-700 font-medium py-3 px-6 rounded-lg shadow-sm transition-all"
        >
          <FaPhoneAlt /> Nous appeler
        </motion.a> */}
      </motion.div>
    </div>
  </motion.div>
);

export default ServiceHero;