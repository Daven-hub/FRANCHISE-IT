import { useState } from "react";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projectes } from "@/data/projects";

const Project = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = activeTab === "all"
    ? projectes.filter(project => project.id === "dev")
    : projectes.filter(project => project.id === activeTab);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="section-padding px-[4.5%] md:px-[5%] bg-black">
      <div className="w-full mx-auto px-0">
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
              <TabsTrigger value="all" className="rounded-[5px] px-7 py-1 data-[state=active]:bg-primary data-[state=active]:text-white text-white">
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

        {activeTab === "logo" ? (

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="aspect-square bg-white/5 rounded-xl border border-white/10 p-6 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-white/10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`object-contain w-full h-full transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                  />
                </div>


                <motion.div
                  className="absolute inset-0 flex items-end p-4 pointer-events-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-black/80 backdrop-blur-sm p-3 rounded-lg w-full">
                    <h3 className="text-white font-medium text-sm truncate">{project.title}</h3>
                    <p className="text-white/70 text-xs truncate">{project.description}</p>
                  </div>
                </motion.div>


                <div className="absolute top-3 right-3 z-20">
                  <Badge variant="secondary" className="bg-black/60 text-white backdrop-blur-sm border-none text-xs">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#031322]/50 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute bottom-4 left-4 z-20 flex space-x-2">
                    {project.icons?.map((icon, i) => (
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
                <div className="p-6">
                  <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className=" flex justify-between">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies?.map((tech) => (
                        <Badge key={tech} className="bg-white/10 text-white hover:bg-white/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center text-white hover:text-primary transition-colors text-sm"
                    >
                      Voir le projet <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto w-full md:w-[35%] lg:w-[20%] text-sm glass-effect bg-white/10 border border-white mt-8 flex justify-center py-3 cursor-pointer font-title rounded-[7px] items-center gap-2 hover:bg-white/20 transition-colors">
        Voir plus <ArrowRight />
      </div>
    </section>
  );
};

export default Project;