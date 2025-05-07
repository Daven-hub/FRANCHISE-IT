import { motion } from "framer-motion";
import {
  FaRocket,
  FaMoneyBillWave,
  FaShieldAlt,
  FaGlobe,
  FaSync,
  FaPhone,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const QuickFacts = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.3 }}
    className="bg-primary p-6 rounded-2xl shadow-xl sticky top-8 border border-blue-400/20"
  >
    <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
      POPULAIRE
    </div>

    <h3 className="text-xl font-bold text-white mb-4">
      Pourquoi nous choisir ?
    </h3>

    <ul className="space-y-4">
      {[
        {
          icon: <FaRocket className="text-xl" />,
          title: "Délais Express",
          description: "MVP en 15 jours max !",
          highlight: true,
        },
        {
          icon: <FaMoneyBillWave className="text-xl" />,
          title: "30% moins cher",
          description: "Que les agences parisiennes",
          highlight: true,
        },
        {
          icon: <FaShieldAlt className="text-xl" />,
          title: "Sécurité Garantie",
          description: "Certifié ISO 27001 & RGPD",
        },
        {
          icon: <FaGlobe className="text-xl" />,
          title: "Disponible 24/7",
          description: "Support ultra-réactif <2h",
        },
        {
          icon: <FaSync className="text-xl" />,
          title: "Satisfait ou Remboursé",
          description: "15 jours d'essai gratuit",
        },
        {
          icon: <GiProgression className="text-xl" />,
          title: "Évolutivité",
          description: "Solutions adaptables à votre croissance",
        },
      ].map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 + index * 0.15 }}
          className={`flex items-start gap-3 p-3 rounded-lg ${
            item.highlight ? "bg-blue-800/50 backdrop-blur-sm" : ""
          }`}
        >
          <span
            className={`mt-1 ${
              item.highlight ? "text-yellow-300 scale-110" : "text-blue-300"
            }`}
          >
            {item.icon}
          </span>
          <div>
            <p
              className={`font-bold ${
                item.highlight ? "text-yellow-300" : "text-white"
              }`}
            >
              {item.title}
            </p>
            <p className="text-blue-100 text-sm">{item.description}</p>
          </div>
        </motion.li>
      ))}
    </ul>

    {/* CTA Puissant */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
      transition={{ delay: 1.2, type: "spring" }}
      className="mt-6"
    >
      {/* <div className="bg-white/10 p-4 rounded-lg border border-white/20 mb-3 text-center">
        <p className="text-white text-sm font-medium flex items-center justify-center gap-2">
          <FaCalendarAlt className="text-yellow-300" />
          OFFRE SPÉCIALE : <span className="text-yellow-300">-40%</span> sur
          votre 1er projet
        </p>
        <p className="text-blue-200 text-xs mt-1">Valable jusqu'au 30/06</p>
      </div>

      <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 font-extrabold py-3 px-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-yellow-400/20 flex items-center justify-center gap-2">
        <FaPhone className="text-lg" />
        DEMANDER UN DEVIS GRATUIT
      </button> */}

      {/* <div className="flex items-center mt-3 justify-center gap-2">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((item) => (
            <img
              key={item}
              src={`https://i.pravatar.cc/150?img=${item}`}
              className="w-6 h-6 rounded-full border-2 border-blue-800"
              alt="Client satisfait"
            />
          ))}
        </div>
        <p className="text-blue-200 text-xs flex items-center gap-1">
          <FaUsers className="text-xs" /> +85 clients satisfaits ce mois-ci
        </p>
      </div> */}
    </motion.div>
  </motion.div>
);

export default QuickFacts;
