
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Globe, Code, Database, Lock, ArrowRight } from "lucide-react";

const projectes = [
  {
    id: "dev",
    category: "Business",
    title: "Chambre de Commerce Canada - Afrique",
    description: "Transformation numérique complète pour une grande institution financière avec système d'authentification multi-facteurs et analyses en temps réel.",
    image: "/projet/ccca.png",
    technologies: ["React", "Node.js", "MySql", "AWS"],
    link: "https://cc-ca.ca/",
    results: "Augmentation de 45% des transactions numériques",
    icons: [<Globe key="globe" />, <Lock key="lock" />, <Database key="db" />],
  },
  {
    id: "dev",
    category: "Education",
    title: "Institut De formation Professionnel",
    description: "Infrastructure IoT complète pour la gestion intelligente des ressources urbaines, incluant l'éclairage, la gestion des déchets et le trafic routier.",
    image: "/projet/ifpf.png",
    technologies: ["NextJs", "PHP", "MySQL", "Serveur PHP"],
    link: "https://ifpfranchise.com/",
    results: "Réduction de 30% des coûts énergétiques municipaux",
    icons: [<Code key="code" />, <Database key="db" />],
  },
  {
    id: "logo",
    category: "spa",
    title: "Impulsions",
    description: "Solution e-commerce complète avec intégration ERP, gestion de stocks en temps réel et expérience personnalisée pour plus de 1M d'utilisateurs.",
    image: "/projet/impulsion.png", 
    technologies: ["wordpress"],
    link: "https://impulsion-spa.com/",
    results: "Augmentation des conversions de 28% en 6 mois",
    icons: [<Globe key="globe" />, <Database key="db" />],
  },
  {
    id: "logo",
    category: "Business",
    title: "NGK - Entreprise",
    description: "Plateforme sécurisée pour la gestion des dossiers médicaux, téléconsultations et suivi des patients en temps réel conformément aux normes RGPD et HDS.",
    image: "/projet/ngk.png",
    technologies: ["php", "javascript","bootstrap"],
    link: "https://ngk-entreprises.com/",
    results: "Temps d'attente réduit de 40% pour les patients",
    icons: [<Lock key="lock" />, <Database key="db" />],
  },
  {
    id: "dev",
    category: "Bussiness",
    title: "Franchise Opportunité Canada",
    description: "Plateforme sécurisée pour la gestion des dossiers médicaux, téléconsultations et suivi des patients en temps réel conformément aux normes RGPD et HDS.",
    image: "/projet/foc.png",
    technologies: ["HTML", "javascript", "Bootstrap"],
    link: "https://foc-cof.ca/",
    results: "Temps d'attente réduit de 40% pour les patients",
    icons: [<Lock key="lock" />, <Database key="db" />],
  },
  {
    id: "dev",
    category: "Coiffure",
    title: "Salon Faro PASSO",
    description: "Plateforme sécurisée pour la gestion des dossiers médicaux, téléconsultations et suivi des patients en temps réel conformément aux normes RGPD et HDS.",
    image: "/projet/faro.png",
    technologies: ["HTML", "javascript", "MySQL"],
    link: "https://salonfaropasso.ca/",
    results: "Temps d'attente réduit de 40% pour les patients",
    icons: [<Lock key="lock" />, <Database key="db" />],
  },
  {
    id: "dev",
    category: "Business",
    title: "Institut Africain de Biothique",
    description: "Plateforme sécurisée pour la gestion des dossiers médicaux, téléconsultations et suivi des patients en temps réel conformément aux normes RGPD et HDS.",
    image: "/projet/iaab.png",
    technologies: ["wordpress"],
    link: "https://iab-aib.org/",
    results: "Temps d'attente réduit de 40% pour les patients",
    icons: [<Lock key="lock" />, <Database key="db" />],
  },
  {
    id: "dev",
    category: "Business",
    title: "Gecaf",
    description: "Plateforme sécurisée pour la gestion des dossiers médicaux, téléconsultations et suivi des patients en temps réel conformément aux normes RGPD et HDS.",
    image: "/projet/gecaf.png",
    technologies: ["VueJs", "nodeJs", "MongoDB"],
    link: "https://gecaf.ca/",
    results: "Temps d'attente réduit de 40% pour les patients",
    icons: [<Lock key="lock" />, <Database key="db" />],
  }
];

const Project = () => {
  const [activeTab, setActiveTab] = useState("all");

  // console.log(activeTab)
  
  const filteredProjects = activeTab === "all" 
    ? projectes 
    : projectes.filter(project => project.id === activeTab);

  return (
    <section id="projects" className="section-padding px-[0%] md:px-[5%] bg-black">
      <div className="w-full mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex items-center flex-col gap-4 w-full mx-auto mb-10"
        >
          <div className="inline-block px-6 py-2 bg-white/5 text-primary rounded-full text-sm font-medium border border-white/10">
            Nos Réalisations
          </div>
          <h2 className="heading-lg font-title text-white">Projets Récents</h2>
          <p className="text-lg text-white/70">
            Découvrez notre portfolio de solutions technologiques innovantes qui ont transformé les entreprises et les organisations.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6 flex justify-center"
        >
          <Tabs defaultValue="all" value={activeTab} className="max-md:overflow-x-scroll" onValueChange={setActiveTab}>
            <TabsList className="bg-white/5 border border-white/10 p-1 rounded-[5px]">
              <TabsTrigger value="all" className="rounded-[5px] px-7  py-1 data-[state=active]:bg-primary data-[state=active]:text-white text-white">
                Tous
              </TabsTrigger>
              <TabsTrigger value="dev" className="rounded-[5px] px-7 data-[state=active]:bg-primary data-[state=active]:text-white text-white">
                Dévéloppement d'application
              </TabsTrigger>
              <TabsTrigger value="flyers" className="rounded-[5px] px-7 data-[state=active]:bg-primary data-[state=active]:text-white text-white">
                Flyers
              </TabsTrigger>
              <TabsTrigger value="logo" className="rounded-[5px] px-7 data-[state=active]:bg-primary data-[state=active]:text-white text-white">
                Logo
              </TabsTrigger>
              <TabsTrigger value="carte" className="rounded-[5px] px-7 data-[state=active]:bg-primary data-[state=active]:text-white text-white">
                Carte de visite
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div 
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute bottom-4 left-4 z-20 flex space-x-2">
                    {project.icons.map((icon, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-primary">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="secondary" className="bg-black/60 text-white backdrop-blur-sm border-none">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-white/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="bg-white/10 text-white hover:bg-white/20">
                        {tech}
                      </Badge>
                    ))}
                  </div> */}
                  <div className="flex md:flex-row flex-col justify-center gap-5 md:justify-between items-center">
                    <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="bg-white/10 text-white hover:bg-white/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                    <a 
                      href={project.link}  target="_blank"
                      className="inline-flex text-[.7rem] items-center text-white hover:text-primary transition-colors"
                    >
                      Voir le projet <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full mt-8 flex items-center gap-2">
          Voir plus <ArrowRight />
        </div>
    </section>
  );
};

export default Project;
