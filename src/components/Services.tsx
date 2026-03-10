
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
    <Card className="glass-effect cursor-pointer border-white/10 card-hover overflow-hidden bg-[#031322]/50 hover:border-primary hover:scale-105 transition-transform duration-300">
      <CardContent className="px-[6%] md:px-12 py-14">
        <div className="flex flex-col items-start">
          <div className="w-16 h-16 glass-effect rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
            {icon}
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3 text-left">{title}</h3>
          <div className="text-left text-[.9rem] md:text-[1rem]">
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
      icon: <Code size={32} />,
      title: "Développement D'applications web et mobiles",
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
      icon: <DesignLogo size={32} />,
      title: "Design Graphique",
      description: "Franchise IT propose des services professionnels de design graphique qui aidentdévelopper une image de marque forte, cohérente et visuellement attrayante."
    },
    {
      icon: <Database size={32} />,
      title: "Marketing Numérique",
      description: "Notre société propose une large gamme de services de marketing numérique, notamment le SMM, le marketing par e-mail, la publicité PPC et le marketing de contenu."
    },
    {
      icon: <Cpu size={32} />,
      title: "DevOps & Automatisation des Déploiements",
      description: (
        <>
          {/* <p className="text-primary font-semibold">Description</p> */}
          <p>Mise en place de pipelines CI/CD, automatisation des builds, des tests et des déploiements afin d’accélérer la livraison des applications tout en garantissant stabilité et fiabilité des systèmes.</p>
          {/* <p className="text-primary font-semibold mt-2">Prestations</p>
          <ul className="list-disc ml-5 mt-1 text-primary">
            <li>Mise en place GitHub Actions / GitLab CI</li>
            <li>Automatisation des déploiements</li>
            <li>Containerisation avec Docker</li>
            <li>Orchestration Kubernetes</li>
            <li>Monitoring et logs</li>
          </ul> */}
        </>
      )
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersécurité & DevSecOps",
      description: (
        <>
          {/* <p className="text-primary font-semibold">Description</p> */}
          <p>Protection des infrastructures numériques et intégration de la sécurité directement dans le cycle de développement des applications.</p>
          {/* <p className="text-primary font-semibold mt-2">Prestations</p>
          <ul className="list-disc ml-5 mt-1 text-primary">
            <li>Audit de sécurité des applications</li>
            <li>Tests de vulnérabilité</li>
            <li>Sécurisation des serveurs</li>
            <li>Mise en place DevSecOps</li>
            <li>Gestion des accès et identités</li>
          </ul> */}
        </>
      )
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Computing & Infrastructure",
      description: (
        <>
          {/* <p className="text-primary font-semibold">Description</p> */}
          <p>Conception, migration et gestion d’infrastructures cloud sécurisées et performantes pour les entreprises et institutions.</p>
          {/* <p className="text-primary font-semibold mt-2">Prestations</p>
          <ul className="list-disc ml-5 mt-1 text-primary">
            <li>Migration vers le Cloud</li>
            <li>Architecture cloud</li>
            <li>Gestion serveurs Linux</li>
            <li>Sauvegardes et reprise après sinistre</li>
            <li>Haute disponibilité</li>
          </ul> */}
        </>
      )
    },
    {
      icon: <Box size={32} />,
      title: "Solutions Microsoft 365 & Digital Workplace",
      description: (
        <>
          {/* <p className="text-primary font-semibold">Description</p> */}
          <p>Déploiement et gestion des environnements collaboratifs Microsoft 365 pour améliorer la productivité et la communication des équipes.</p>
          {/* <p className="text-primary font-semibold mt-2">Prestations</p>
          <ul className="list-disc ml-5 mt-1 text-primary">
            <li>Déploiement Microsoft 365</li>
            <li>Administration des comptes et licences</li>
            <li>Configuration Teams, SharePoint, OneDrive</li>
            <li>Sécurité et gestion des accès</li>
            <li>Formation des équipes</li>
          </ul> */}
        </>
      )
    },
    {
      icon: <Zap size={32} />,
      title: "Conseil Technologique & Innovation",
      description: (
        <>
          {/* <p className="text-primary font-semibold">Description</p> */}
          <p>Accompagnement stratégique pour aider les entreprises à adopter les meilleures technologies et anticiper les évolutions du marché.</p>
          {/* <p className="text-primary font-semibold mt-2">Prestations</p>
          <ul className="list-disc ml-5 mt-1 text-primary">
            <li>Architecture logicielle</li>
            <li>Choix technologiques</li>
            <li>Roadmap digitale</li>
            <li>Audit IT</li>
          </ul> */}
        </>
      )
    },
    {
      icon: <Airplay size={32} />,
      title: "Solutions Technologiques pour l’Aviation & l’Aérospatial",
      description: (
        <>
          {/* <p className="text-primary font-semibold">Description</p> */}
          <p>Développement de solutions technologiques, logiciels et systèmes numériques pour le secteur aéronautique et spatial.</p>
          {/* <p className="text-primary font-semibold mt-2">Prestations</p>
          <ul className="list-disc ml-5 mt-1 text-primary">
            <li>Analyse de données aéronautiques</li>
            <li>Simulation et modélisation</li>
            <li>Développement d’outils spécialisés</li>
            <li>Solutions IT pour l’aviation</li>
          </ul> */}
        </>
      )
    },
    {
      icon: <FileText size={32} />,
      title: "Production de Contenus & Communication Digitale",
      description: (
        <>
          {/* <p className="text-primary font-semibold">Description</p> */}
          <p>Création de contenus stratégiques pour renforcer l’image de marque et la présence digitale des entreprises.</p>
          {/* <p className="text-primary font-semibold mt-2">Prestations</p>
          <ul className="list-disc ml-5 mt-1 text-primary">
            <li>Stratégie de communication</li>
            <li>Gestion des réseaux sociaux</li>
            <li>Création de contenus</li>
            <li>Branding et storytelling</li>
          </ul> */}
        </>
      )
    }
  ];

  return (
    <section id="services" className="section-padding px-[5%] md:px-[6%]">
      <div className="w-full">
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