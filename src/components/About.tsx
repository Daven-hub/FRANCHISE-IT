import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const advantages = [
    "Expertise technique",
    "Support client 24/7 multilingue",
    "Solutions d'entreprise personnalisées",
    "Technologies de pointe & innovation R&D",
    "Respect des délais & méthodologie Agile",
    "Prix compétitifs & ROI mesurable"
  ];

  return (
    <section id="a-propos" className="section-padding px-[5%] md:px-[5%] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="w-full md:mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex items-center flex-col gap-3.5 w-full mb-5"
        >
          <div className="inline-block px-6 py-1 bg-black/5 dark:bg-white/5 text-primary rounded-full text-xs font-medium border border-white/10">
            Notre Expertise
          </div>
          <div className="space-y-1.5 max-w-4xl">
            <h2 className="heading-md md:heading-lg font-title text-tech-dark dark:text-white">À propos de nous</h2>
            <p className="text-md md:text-lg w-3/2 text-tech-dark/80 dark:text-white/70">
              Nous sommes une entreprise IT de pointe spécialisée dans la fourniture de solutions technologiques innovantes pour les organisations de toutes tailles.
            </p>
          </div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-14">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative w-[calc(100%-0.875rem)] md:w-full">
              <div className="absolute -top-6 -left-6 w-66 h-66 bg-accent/10 rounded-full blur-3xl z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" 
                alt="Notre équipe informatique" 
                className="w-full h-auto rounded-2xl shadow-sm relative z-[9]"
              />
              <div className="absolute -bottom-3 -right-3 md:-bottom-3.5 md:-right-3.5 w-full h-full border-[3px] border-primary rounded-2xl z-0"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-3xl font-bold mb-3.5 text-tech-dark dark:text-white">Une expertise technologique au service de votre transformation digitale</h3>
            <p className="text-[1rem] md:text-[1.1rem] leading-[1.5] text-tech-dark/95 dark:text-white/70 mb-3.5">
            Nous accompagnons les entreprises et particuliers dans leur transformation numérique grâce à des solutions IT innovantes, fiables et sur mesure.
Notre expertise métier et notre approche orientée résultats font de vos projets une réussite.
            </p>
            
            <div className="grid text-[.97rem] md:text-[1.07rem] grid-cols-1 sm:grid-cols-2 gap-3.5">
              {advantages.map((advantage, index) => (
                <div key={index} className="inline items-center">
                  <CheckCircle className="inline align-middle text-primary mr-2.5" size={20} />
                  <span className="text-tech-dark/95 dark:text-white">{advantage}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
