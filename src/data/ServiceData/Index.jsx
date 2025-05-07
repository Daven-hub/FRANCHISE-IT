import { FaLaptopCode, FaMobileAlt, FaDesktop, FaBolt, FaChartLine, FaServer } from "react-icons/fa";
import {
  MdOutlineCampaign,
  MdSearch,
  MdSms,
  MdDesignServices,
  MdEmail
} from "react-icons/md";
import { SiGoogleads, SiFacebook } from "react-icons/si";
import { FiTarget } from "react-icons/fi";
import { BsFillPeopleFill, BsShieldLock } from "react-icons/bs";
import { TbWorldWww, TbPencilMinus, TbBrandInstagram } from "react-icons/tb";
import { RiVipCrownLine, RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

import web from "../../assets/service/web.jpg";
import application from "../../assets/service/application.jpg";
import burreau from "../../assets/service/burreau.jpg";
import progressif from "../../assets/service/progressif.jpg";
import strategie from "../../assets/service/strategie.jpg";
import seo from "../../assets/service/seo.jpg";
import social from "../../assets/service/social.jpg";
import click from "../../assets/service/click.jpg";
import sms from "../../assets/service/sms.jpg";
import design from "../../assets/service/ux.jpg";
import logo from "../../assets/service/logo.jpg";
import ecommerce from "../../assets/service/commerce.jpg";
import hosting from "../../assets/service/hosting.jpg";
import emailing from "../../assets/service/emailing-removebg-preview.png";

const servicesData = {
  services: {
    "developpement-web-logiciel": {
      key: "developpement-web-logiciel",
      name: "Développement Web & Logiciel",
      icon: <FaLaptopCode />,
      items: [
        {
          id: "conception-web",
          key: "developpement-web-logiciel",
          title: "Sites Web Professionnels",
          description: "Des sites web sur-mesure conçus pour convertir vos visiteurs en clients. Optimisés pour le référencement et adaptés à tous les écrans.",
          icon: <TbWorldWww />,
          image: web,
          features: [
            "Design UX/UI personnalisé et intuitif",
            "Intégration de fonctionnalités avancées (formulaires, RDV en ligne...)",
            "Optimisation des performances (temps de chargement <2s)",
            "Compatibilité avec tous les navigateurs",
            "Maintenance et mises à jour incluses 3 mois",
          ],
          advantages: [
            "Augmentation de votre crédibilité en ligne",
            "Meilleure expérience utilisateur = plus de conversions",
            "Site optimisé pour le SEO dès le départ"
          ],
          tips: "Pensez à définir clairement votre cible et vos objectifs avant la conception pour un site parfaitement adapté."
        },
        {
          id: "ecommerce",
          key: "developpement-web-logiciel",
          title: "Boutiques en Ligne",
          description: "Plateformes e-commerce performantes pour vendre vos produits 24h/24 avec un parcours d'achat optimisé.",
          icon: <AiOutlineShoppingCart />,
          image: ecommerce,
          features: [
            "Solutions Prestashop, WooCommerce ou sur-mesure",
            "Intégration des moyens de paiement sécurisés",
            "Gestion des stocks et commandes",
            "Optimisation du tunnel de conversion",
            "Analytics et tracking des ventes",
          ],
          advantages: [
            "Augmentation de votre chiffre d'affaires en ligne",
            "Gestion simplifiée des produits et commandes",
            "Expérience d'achat fluide pour vos clients"
          ],
          tips: "Prévoyez un budget marketing pour promouvoir votre boutique (SEO, publicités...)."
        },
        {
          id: "applications-mobiles",
          key: "developpement-web-logiciel",
          title: "Applications Mobiles",
          description: "Applications natives performantes conçues pour fidéliser vos clients et améliorer leur engagement.",
          icon: <FaMobileAlt />,
          image: application,
          features: [
            "Développement iOS (Swift) et Android (Kotlin)",
            "Conception centrée utilisateur (UX mobile)",
            "Notifications push personnalisées",
            "Synchronisation avec votre back-office",
            "Publication sur les stores incluse",
          ],
          advantages: [
            "Présence permanente sur le smartphone de vos clients",
            "Meilleure engagement qu'un site mobile",
            "Accès à des fonctionnalités natives (GPS, caméra...)"
          ],
          tips: "Privilégiez une version MVP (Minimum Viable Product) pour tester votre concept avant d'investir dans des fonctionnalités avancées."
        },
        {
          id: "applications-bureau",
          key: "developpement-web-logiciel",
          title: "Logiciels Métiers (Bureau)",
          description: "Solutions logicielles personnalisées pour automatiser vos processus et gagner en productivité.",
          icon: <FaDesktop />,
          image: burreau,
          features: [
            "Applications Windows, macOS ou multiplateforme",
            "Interfaces intuitives et ergonomiques",
            "Gestion des utilisateurs et permissions",
            "Export des données (Excel, PDF...)",
            "Formation et documentation technique",
          ],
          advantages: [
            "Automatisation des tâches répétitives",
            "Centralisation de vos données métier",
            "Solution adaptée à vos besoins spécifiques"
          ],
          tips: "Identifiez bien vos workflows avant le développement pour une solution parfaitement adaptée."
        },
        {
          id: "pwa",
          key: "developpement-web-logiciel",
          title: "Progressive Web Apps (PWA)",
          description: "La puissance d'une application mobile avec la simplicité d'un site web. Accessible hors connexion et installable.",
          icon: <FaBolt />,
          image: progressif,
          features: [
            "Installation sans passer par les stores",
            "Fonctionnement offline ou en réseau lent",
            "Mises à jour automatiques",
            "Compatibilité avec tous les appareils",
            "Coût réduit par rapport aux apps natives",
          ],
          advantages: [
            "Pas de commission sur les stores d'applications",
            "Déploiement instantané sans validation",
            "Expérience utilisateur proche d'une app native"
          ],
          tips: "Solution idéale pour les projets avec budget limité ou besoin de rapidité de déploiement."
        },
        {
          id: "hebergement",
          key: "developpement-web-logiciel",
          title: "Hébergement & Infogérance",
          description: "Solutions d'hébergement sécurisées et performantes avec support technique réactif.",
          icon: <FaServer />,
          image: hosting,
          features: [
            "Serveurs mutualisés, VPS ou dédiés",
            "Sauvegardes automatiques quotidiennes",
            "Certificats SSL inclus",
            "Monitoring 24/7 et support technique",
            "Migration gratuite depuis votre ancien hébergeur",
          ],
          advantages: [
            "Temps de disponibilité garanti à 99,9%",
            "Protection contre les attaques DDoS",
            "Support technique expert inclus"
          ],
          tips: "Choisissez votre formule d'hébergement en fonction de votre trafic attendu et des sensibilités de vos données."
        },
      ],
    },
    "digital-marketing": {
      key: "digital-marketing",
      name: "Marketing Digital",
      icon: <MdOutlineCampaign />,
      items: [
        {
          id: "strategie-digitale",
          key: "digital-marketing",
          title: "Stratégie Digitale",
          description: "Plan d'action sur-mesure pour maximiser votre visibilité et vos conversions en ligne.",
          icon: <FiTarget />,
          image: strategie,
          features: [
            "Audit complet de votre présence digitale",
            "Définition des personas et parcours client",
            "Roadmap tactique avec priorités",
            "Plan de contenu et calendrier éditorial",
            "Tableau de bord de suivi KPI",
          ],
          advantages: [
            "Vision claire de vos priorités digitales",
            "Optimisation de votre budget marketing",
            "Alignement de tous vos canaux digitaux"
          ],
          tips: "Réévaluez votre stratégie tous les trimestres pour l'adapter aux évolutions du marché."
        },
        {
          id: "seo",
          key: "digital-marketing",
          title: "Référencement Naturel (SEO)",
          description: "Augmentez durablement votre trafic organique et votre visibilité sur les moteurs de recherche.",
          icon: <MdSearch />,
          image: seo,
          features: [
            "Audit technique et concurrentiel approfondi",
            "Optimisation du contenu et des balises",
            "Netlinking et stratégie de backlinks",
            "Optimisation des Core Web Vitals",
            "Reporting mensuel avec recommandations",
          ],
          advantages: [
            "Trafic qualifié gratuit à long terme",
            "Meilleure crédibilité auprès des clients",
            "Performance durable contrairement aux publicités"
          ],
          tips: "Le SEO est un investissement à long terme - prévoyez au moins 6 mois pour voir des résultats significatifs."
        },
        {
          id: "social-media",
          key: "digital-marketing",
          title: "Réseaux Sociaux",
          description: "Gestion professionnelle de vos réseaux sociaux pour développer votre communauté et votre notoriété.",
          icon: <BsFillPeopleFill />,
          image: social,
          features: [
            "Stratégie de contenu personnalisée",
            "Création de visuels et vidéos engageants",
            "Gestion des publications et interactions",
            "Campagnes publicitaires ciblées",
            "Analyse des performances et ajustements",
          ],
          advantages: [
            "Renforcement de votre image de marque",
            "Relation client directe et personnalisée",
            "Génération de leads qualifiés"
          ],
          tips: "Ciblez 2-3 réseaux sociaux maximum en priorité plutôt que d'être présent partout sans moyens."
        },
        {
          id: "ppc",
          key: "digital-marketing",
          title: "Publicité en Ligne (PPC)",
          description: "Campagnes publicitaires performantes sur Google, Facebook et autres plateformes pour des résultats rapides.",
          icon: <SiGoogleads />,
          image: click,
          features: [
            "Création et optimisation de campagnes",
            "Ciblage précis par centres d'intérêt",
            "Tests A/B des créatifs et landing pages",
            "Suivi des conversions et ROI",
            "Optimisation continue des performances",
          ],
          advantages: [
            "Résultats visibles en quelques jours",
            "Contrôle total sur votre budget",
            "Flexibilité pour ajuster rapidement"
          ],
          tips: "Commencez avec un petit budget pour tester ce qui fonctionne avant d'augmenter vos investissements."
        },
        {
          id: "emailing",
          key: "digital-marketing",
          title: "Email Marketing",
          description: "Campagnes email automatisées pour fidéliser vos clients et booster vos ventes.",
          icon: <MdEmail />,
          image: emailing,
          features: [
            "Création de templates responsive",
            "Segmentation de votre base contacts",
            "Automatisation des envois (welcome, abandon panier...)",
            "Analyse des taux d'ouverture et clics",
            "A/B testing des sujets et contenus",
          ],
          advantages: [
            "Coût très faible par rapport au ROI",
            "Communication directe avec vos clients",
            "Personnalisation poussée possible"
          ],
          tips: "Respectez scrupuleusement la RGPD et proposez systématiquement un lien de désabonnement."
        },
        {
          id: "bulk-sms",
          key: "digital-marketing",
          title: "Marketing SMS",
          description: "Messages courts et percutants pour des communications urgentes ou promotions flash.",
          icon: <MdSms />,
          image: sms,
          features: [
            "Envois groupés ou ciblés",
            "Personnalisation des messages",
            "Planification des envois",
            "Suivi des taux de lecture",
            "Intégration avec votre CRM",
          ],
          advantages: [
            "Taux d'ouverture supérieur à 95%",
            "Messages lus en moyenne en 3 minutes",
            "Idéal pour les urgences ou promotions"
          ],
          tips: "Utilisez les SMS avec parcimonie pour ne pas lasser vos clients - réservez pour les messages importants."
        },
      ],
    },
    "conception-graphique": {
      key: "conception-graphique",
      name: "Design Graphique",
      icon: <MdDesignServices />,
      items: [
        {
          id: "design-global",
          key: "conception-graphique",
          title: "Création Graphique Globale",
          description: "Identité visuelle cohérente et professionnelle pour tous vos supports de communication.",
          icon: <TbPencilMinus />,
          image: design,
          features: [
            "Charte graphique complète",
            "Maquettes de documents professionnels",
            "Création de templates pour réseaux sociaux",
            "Design d'interface utilisateur (UI)",
            "Supports print et digitaux",
          ],
          advantages: [
            "Cohérence visuelle renforçant votre image",
            "Gain de temps sur la création de futurs supports",
            "Professionnalisme accru de vos communications"
          ],
          tips: "Investissez dans une charte graphique solide dès le début - c'est le fondement de toute votre communication visuelle."
        },
        {
          id: "logo",
          key: "conception-graphique",
          title: "Création de Logo & Identité Visuelle",
          description: "Logo mémorable incarnant les valeurs de votre marque et déclinable sur tous supports.",
          icon: <RiVipCrownLine />,
          image: logo,
          features: [
            "Brief créatif approfondi",
            "3 concepts originaux proposés",
            "Révisions illimitées jusqu'à satisfaction",
            "Déclinaisons en noir/blanc et formats variés",
            "Pack complet de fichiers sources",
          ],
          advantages: [
            "Premier contact visuel avec vos clients",
            "Différenciation de vos concurrents",
            "Reconnaissance immédiate de votre marque"
          ],
          tips: "Un bon logo doit être simple, mémorable et intemporel - évitez les effets de mode qui vieilliront mal."
        },
      ],
    },
  },
};

export default servicesData;