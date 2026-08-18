
import { FC } from 'react';
import { Cpu, Shield, Cloud, Box, Zap, FileText, Airplay, Database, Camera, Server, Globe, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

interface DesignLogoProps {
  size?: number | string;
  strokeColor?: string;
  fillColor?: string;
  showColors?: boolean;
  withBorder?: boolean;
}

const DesignLogo: FC<DesignLogoProps> = ({
  size = 32,
  strokeColor = "currentColor",
  fillColor = "#f43f5e",
  showColors = true,
  withBorder = false,
}) => (
  <div
    style={{
      width: typeof size === 'number' ? `${size}px` : size,
      height: typeof size === 'number' ? `${size}px` : size,
      display: 'inline-block',
      border: withBorder ? '1px solid #ccc' : 'none',
      borderRadius: withBorder ? '6px' : '0',
      padding: withBorder ? '4px' : '0',
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="100%"
      height="100%"
    >
      <path d="M14 3L21 10L10 21L3 21L3 14Z" />
      {showColors && <circle cx="6.5" cy="6.5" r="2.5" fill={fillColor} />}
      {showColors && <path d="M17 7 L19 11 L15 11 Z" fill="#3b82f6" />}
    </svg>
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="glass-effect cursor-pointer rounded-[6px] border-white/10 card-hover overflow-hidden bg-tech-dark dark:bg-[#031322]/50 hover:border-primary hover:scale-105 transition-transform duration-300">
      <CardContent className="px-[6%] md:px-8 py-8">
        <div className="flex flex-col items-start">
          <div className="w-16 h-16 text-primary glass-effect rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
            {icon}
          </div>
          <h3 className="text-lg md:text-xl text-white font-bold mb-3 text-left">{title}</h3>
          <div className="text-left text-white/80 dark:text-white/60 text-[.9rem] md:text-[.95rem]">
            {description}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
     {
      icon: <Code size={37} />,
      title: "Devéloppement web et mobiles",
      description: "Applications web performantes et applications mobiles natives et hybrides adaptées à vos besoins spécifiques."
    },
    {
      icon: <Globe size={37} />,
      title: "Référencement SEO",
      description: "Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne et générer plus de trafic qualifié."
    },
    {
      icon: <Server size={37} />,
      title: "Hébergement d'application",
      description: "Hébergement sécurisé et performant pour vos applications web et mobiles, garantissant disponibilité, rapidité et scalabilité selon vos besoins."
    },
    {
      icon: <Camera size={37} />,
      title: "Caméras de Surveillance",
      description: "Installation et maintenance de systèmes de vidéosurveillance pour sécuriser vos locaux et protéger vos biens."
    },
    {
      icon: <DesignLogo size={37} />,
      title: "Design Graphique",
      description: "Conception de supports visuels modernes et d’identités graphiques cohérentes pour valoriser l’image et la communication des marques."
    },
    {
      icon: <Database size={37} />,
      title: "Content & Digital Marketing",
      description: "Élaboration de contenus stratégiques et mise en œuvre de campagnes digitales pour accroître la visibilité, engager l’audience et générer des opportunités commerciales."
    },
    {
      icon: <Cpu size={37} />,
      title: "DevOps",
      description: (
        <>
          <p>Mise en place de pipelines CI/CD, afin d’accélérer la livraison des applications tout en garantissant stabilité et fiabilité des systèmes.</p>
        </>
      )
    },
    {
      icon: <Shield size={37} />,
      title: "Cybersécurité & DevSecOps",
      description: (
        <>
          <p>Protection des infrastructures numériques et intégration de la sécurité directement dans le cycle de développement des applications.</p>
        </>
      )
    },
    {
      icon: <Airplay size={37} />,
      title: "Aviation & Aérospatial",
      description: (
        <>
          <p>Développement de solutions technologiques, logiciels et systèmes numériques pour le secteur aéronautique et spatial.</p>
        </>
      )
    },
    {
      icon: <Cloud size={37} />,
      title: "Cloud Computing & Infrastructure",
      description: (
        <>
          <p>Conception, migration et gestion d’infrastructures cloud sécurisées et performantes pour les entreprises et institutions.</p>
        </>
      )
    },
    {
      icon: <Box size={37} />,
      title: "Microsoft 365 & Digital Workplace",
      description: (
        <>
          <p>Mise en place d’un environnement de travail digital complet avec Microsoft 365 et autres outils collaboratifs pour améliorer la productivité, la communication et la collaboration des équipes.</p>
        </>
      )
    },
    {
      icon: <Zap size={37} />,
      title: "Conseil Technologique & Innovation",
      description: (
        <>
          <p>Accompagnement stratégique pour aider les entreprises à adopter les meilleures technologies et anticiper les évolutions du marché.</p>
        </>
      )
    },
    // {
    //   icon: <FileText size={37} />,
    //   title: "Digital Content Strategy",
    //   description: (
    //       <p>Création de contenus stratégiques pour renforcer l’image de marque et la présence digitale des entreprises.</p>
    //   )
    // }
  ];

  return (
    <section id="services" className="section-padding bg-background px-[5%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex items-center flex-col gap-3.5 w-full mb-5 md:mb-7"
        >
          <div className="inline-block w-fit px-6 py-1 bg-black/5 dark:bg-white/5 text-primary rounded-full text-xs font-medium border border-white/10">
            Nos Services
          </div>
          <div className='space-y-1.5'>
            <h2 className="md:heading-lg font-title heading-md text-tech-dark dark:text-white">Les Services que Nous Proposons</h2>
            <p className="text-md md:text-lg text-tech-dark/80 dark:text-white/70">
              Des solutions informatiques complètes pour répondre à tous vos besoins
            </p>
          </div>
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
    </section>
  );
};

export default Services;