import { useState } from "react";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowRight, ZoomIn } from "lucide-react";
import { projectes } from "@/data/projects";

const Project = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = activeTab === "all"
    ? projectes.filter(project => project.id === "dev")
    : projectes.filter(project => project.id === activeTab);

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

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="section-padding px-[5%] md:px-[6%] bg-black">
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
          <p className="text-lg text-white/70 max-w-2xl">
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

        {(activeTab === "logo" || activeTab === "flyers" || activeTab === "carte") ? (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 ${activeTab === "flyers" ? "lg:grid-cols-4" : ""
              }`}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openImageModal(project.image)}
              >
                <div className={`
                  relative bg-white/5 rounded-xl border border-white/10 
                  flex items-center justify-center transition-all duration-300 
                  group-hover:border-primary/50 group-hover:bg-white/10 
                  overflow-hidden
                  ${activeTab === "flyers" ? "aspect-[3/4]" : "aspect-square"}
                `}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`object-contain w-full h-full transition-transform duration-500 ${hoveredIndex === index ? 'scale-105' : 'scale-100'
                      }`}
                  />

                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="bg-primary/90 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute inset-0 flex items-end p-3 pointer-events-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-black/80 backdrop-blur-sm p-3 rounded-lg w-full border border-white/10">
                    <h3 className="text-white font-medium text-sm truncate">{project.title}</h3>
                    <p className="text-white/70 text-xs truncate mt-1">{project.description}</p>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <span key={tech} className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="text-xs bg-white/20 text-white px-1.5 py-0.5 rounded">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>

                <div className="absolute top-2 right-2 z-10">
                  <Badge variant="secondary" className="bg-black/80 text-white backdrop-blur-sm border-none text-xs font-medium">
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
                className="bg-[#031322]/50 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-[9]"></div>

                  <div
                    className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>

                  <div className="absolute bottom-4 left-4 z-[9] flex space-x-2">
                    {project.icons?.map((icon, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-primary border border-white/10"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="bg-black/80 text-white backdrop-blur-sm border-none">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies?.map((tech) => (
                        <Badge key={tech} className="bg-white/10 text-white hover:bg-white/20 border-none text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-primary transition-colors text-sm font-medium group/link"
                    >
                      Voir le projet
                      <ArrowUpRight className="ml-1 h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-4xl max-h-[90vh] bg-black rounded-2xl overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-full object-contain max-h-[80vh]"
              />

              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded-full hover:bg-black transition-colors border border-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>

      <div className="mx-auto w-full md:w-[35%] lg:w-[20%] text-sm glass-effect bg-white/10 border border-white mt-8 flex justify-center py-3 cursor-pointer font-title rounded-[7px] items-center gap-2 hover:bg-white/20 transition-colors group/button">
        Voir plus
        <ArrowRight className="group-hover/button:translate-x-1 transition-transform" />
      </div>
    </section>
  );
};

export default Project;