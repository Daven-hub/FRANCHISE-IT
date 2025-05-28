
// import { Button } from "@/components/ui/button";
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
    <section id="a-propos" className="section-padding px-[4%] md:px-[6%] bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="w-full md:mx-auto px-2 md:px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex items-center flex-col gap-4 w-full mb-10"
        >
          <div className="inline-block px-6 py-2 bg-white/5 text-primary rounded-full text-sm font-medium border border-white/10">
            Notre Expertise
          </div>
          <h2 className="heading-lg font-title text-white">À propos de nous</h2>
          <p className="text-[1rem] w-3/2 text-white/70">
            Nous sommes une entreprise IT de pointe spécialisée dans la fourniture de solutions technologiques innovantes pour les organisations de toutes tailles.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-66 h-66 bg-accent/10 rounded-full blur-3xl z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" 
                alt="Notre équipe informatique" 
                className="w-full h-auto rounded-2xl professional-shadow relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-2xl z-0"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">Une expertise technologique au service de votre transformation digitale</h3>
            <p className="text-[1rem] md:text-lg text-white/70 mb-2.5">
              Depuis plus de 10 ans, notre équipe d'experts IT fournit des solutions technologiques 
              innovantes et fiables à des entreprises et particuliers. Notre mission est d'accélérer la transformation 
              numérique de nos clients avec des technologies de pointe et une expertise métier approfondie.
            </p>
            
            <div className="grid text-[.9rem] md:text-lg grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
              {advantages.map((advantage, index) => (
                <div key={index} className="inline items-center">
                  <CheckCircle className="inline align-middle text-primary mr-2.5" size={20} />
                  <span className="text-white">{advantage}</span>
                </div>
              ))}
            </div>
            
            {/* <Button className="bg-primary hover:bg-accent text-white px-6 py-6">
              Découvrir notre histoire
            </Button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
