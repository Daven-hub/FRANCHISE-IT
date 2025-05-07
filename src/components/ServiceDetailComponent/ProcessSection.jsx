import { motion } from "framer-motion";

const ProcessSection = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 1.2 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate__animated animate__fadeInUp"
  >
    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
      <div className="w-2 h-8 bg-primary rounded-full"></div>
      <span>Notre approche</span>
    </h2>
    <div className="space-y-8 relative">
      <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200"></div>
      {[
        {
          title: "Consultation initiale",
          desc: "Nous discutons de vos besoins, objectifs et exigences spécifiques pour comprendre parfaitement votre projet.",
          icon: "🗣️",
        },
        {
          title: "Proposition détaillée",
          desc: "Nous élaborons une proposition personnalisée avec planning, livrables et investissement.",
          icon: "📄",
        },
        {
          title: "Développement & itérations",
          desc: "Nous travaillons sur votre projet avec des points de validation réguliers pour garantir la qualité.",
          icon: "🛠️",
        },
        {
          title: "Livraison & support",
          desc: "Nous livrons le projet final et fournissons un support post-livraison pour votre satisfaction.",
          icon: "🎯",
        },
      ].map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.3 + index * 0.15 }}
          className="flex gap-6 relative pl-10 animate__animated animate__fadeInLeft"
        >
          <div className="absolute left-0 top-0 w-12 h-12 bg-white border-4 border-primary/20 rounded-full flex items-center justify-center text-xl z-10">
            {step.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default ProcessSection;
