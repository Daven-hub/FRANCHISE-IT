
import { Code, Globe, Server, Camera, Shield, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="glass-effect cursor-pointer  border-white/10 card-hover overflow-hidden">
      <CardContent className="px-[6%] md:px-12 py-14">
        <div className="flex flex-col items-start">
          <div className="w-16 h-16 glass-effect rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
            {icon}
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3 text-left">{title}</h3>
          <p className="text-muted-foreground text-[.9rem] md:text-[1rem] text-left">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Développement D'application",
      description: "Applications web performantes et applications mobiles natives et hybrides adaptées à vos besoins spécifiques."
    },
    {
      icon: <Globe size={32} />,
      title: "Référencement SEO",
      description: "Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne et générer plus de trafic qualifié."
    },
    {
      icon: <Server size={32} />,
      title: "Hébergement Web",
      description: "Solutions d'hébergement sécurisées, rapides et fiables pour vos sites web et applications."
    },
    {
      icon: <Camera size={32} />,
      title: "Caméras de Surveillance",
      description: "Installation et maintenance de systèmes de vidéosurveillance pour sécuriser vos locaux et protéger vos biens."
    },
    {
      icon: <Shield size={32} />,
      title: "Design Graphique",
      description: "Franchise IT propose des services professionnels de design graphique qui aidentdévelopper une image de marque forte, cohérente et visuellement attrayante."
    },
    {
      icon: <Database size={32} />,
      title: "Marketing Numérique",
      description: "Notre société propose une large gamme de services de marketing numérique, notamment le SMM, le marketing par e-mail, la publicité PPC et le marketing de contenu."
    }
  ];

  return (
    <section id="services" className="section-padding px-[4%] md:px-[7%] bg-[#031322]/50">
      <div className="w-full">
        {/* <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos Services</h2>
          <p className="text-lg text-muted-foreground text-center">
            Des solutions informatiques complètes pour répondre à tous vos besoins
          </p>
        </div> */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex items-center flex-col gap-4 w-full mx-auto mb-10"
        >
          <div className="inline-block w-fit px-6 py-2 bg-white/5 text-primary rounded-full text-xs md:text-sm font-medium border border-white/10">
             Nos Services
          </div>
          <h2 className="md:heading-lg font-title heading-md text-white">Les Services que Nous Proposons</h2>
          <p className="text-sm md:text-lg text-white/70">
            Des solutions informatiques complètes pour répondre à tous vos besoins
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
