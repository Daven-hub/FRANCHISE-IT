import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css"; // Assurez-vous d'inclure les styles du Lightbox
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { projectes } from "@/data/projects";
import PhotoAlbum from 'react-photo-album';
import { cn } from "@/lib/utils";
import Lightbox from "yet-another-react-lightbox"
import { ArrowUpRight } from "lucide-react";

const Project = () => {
  const [activeTab, setActiveTab] = useState("dev-web");
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  // Composant réutilisable pour chaque photo
  const CustomPhoto = ({ project, onClick }) => {
    const [loaded, setLoaded] = useState(false)
    return (
      <div onClick={onClick} className="relative w-full bg-gray-50 border p-[0.3rem] overflow-hidden group">
        {!loaded && (
          <div className="absolute inset-0 z-10 animate-pulse bg-muted" />
        )}

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={cn(
            "w-full relative cursor-pointer object-cover h-auto transition-all duration-500 group-hover:scale-105",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
        {project.isMoreCard && (
          <div className="absolute cursor-pointer inset-0 bg-black/60 flex items-center justify-center transition-colors group-hover:bg-black/70">
            <span className="text-white text-4xl font-medium">
              +{project.remaining}
            </span>
          </div>
        )}
      </div>
    )
  }

  // Composant pour les cartes de projets (Web & Mobile)
  const ProjectCard = ({ project, index: idx }) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="bg-tech-dark/95 dark:bg-[#031322]/50 border border-white/10 rounded-[6px] overflow-hidden hover:border-primary/50 transition-all duration-300 group"
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
            {project.category ? project.category.charAt(0).toUpperCase() + project.category.slice(1) : ''}
          </Badge>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-white text-lg md:text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-white/70 text-sm md:text-[1rem] md:!leading-[1.3] mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies?.map((tech) => (
              <Badge key={tech} className="bg-white/10 text-white hover:bg-white/20 border-none text-[.65rem] md:text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-primary transition-colors text-xs md:text-sm font-medium group/link"
          >
            Voir le projet
            <ArrowUpRight className="ml-1 h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );

  const projectesWithPhotos = projectes.map((item) => ({
    ...item,
    src: item.image || "",
    width: 1,
    height: 1
  }));

  const filteredProjects = activeTab === "all"
    ? projectesWithPhotos
    : projectesWithPhotos.filter(project => project.id === activeTab);

  const slides = filteredProjects.map((item) => ({
    src: item.image,
  }))

  const MAX_VISIBLE = 20

  const photosToShow = useMemo(() => {
    const total = filteredProjects.length;

    if (total <= MAX_VISIBLE) {
      return filteredProjects;
    }
    const remaining = total - (MAX_VISIBLE - 1);
    return [
      ...filteredProjects.slice(0, MAX_VISIBLE - 1),
      {
        ...filteredProjects[MAX_VISIBLE - 1],
        isMoreCard: true,
        remaining,
      },
    ];
  }, [filteredProjects]);


  return (
    <section id="projects" className="section-padding pt-[3rem] px-[5%]">
      <div className="w-full px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex items-center flex-col gap-4 w-full mx-auto mb-6"
        >
          <div className="inline-block px-6 py-1 bg-black/5 dark:bg-white/5 text-primary rounded-full text-xs font-medium border border-white/10">
            Nos Réalisations
          </div>
          <div className="space-y-2">
            <h2 className="heading-md md:heading-lg font-title text-tech-dark dark:text-white">Projets Récents</h2>
            <p className="text-[.95rem] md:text-lg text-tech-dark/70 dark:text-white/70 max-w-2xl">
              Découvrez notre portfolio de solutions technologiques innovantes qui ont transformé les entreprises et les organisations.
            </p>
          </div>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} className="max-md:overflow-x-scroll" onValueChange={setActiveTab}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center"
          >
            <div className="max-md:overflow-x-scroll">
              <TabsList className="bg-tech-dark/5 dark:bg-white/5 border border-white/10 p-1 rounded-[5px]">
                <TabsTrigger value="dev-web" className="rounded-[5px] px-7 data-[state=active]:bg-primary data-[state=active]:text-white text-tech-dark dark:text-white">
                  App web
                </TabsTrigger>
                <TabsTrigger value="dev-mobile" className="rounded-[5px] px-7 data-[state=active]:bg-primary data-[state=active]:text-white text-tech-dark dark:text-white">
                  App mobile
                </TabsTrigger>
                <TabsTrigger value="flyers" className="rounded-[5px] px-7 data-[state=active]:bg-primary data-[state=active]:text-white text-tech-dark dark:text-white">
                  Flyers
                </TabsTrigger>
                <TabsTrigger value="logo" className="rounded-[5px] px-7 data-[state=active]:bg-primary data-[state=active]:text-white text-tech-dark dark:text-white">
                  Logo
                </TabsTrigger>
                <TabsTrigger value="carte" className="rounded-[5px] px-7 data-[state=active]:bg-primary data-[state=active]:text-white text-tech-dark dark:text-white">
                  Carte de visite
                </TabsTrigger>
              </TabsList>
            </div>
          </motion.div>

          <TabsContent value="dev-web" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dev-mobile" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="flyers" >
            <div>
              <PhotoAlbum
                layout='columns'
                spacing={14}
                breakpoints={[750, 650, 568, 300, 547, 700]}
                photos={photosToShow}
                sizes={{
                  size: "calc(100vw - 240px)"
                }}
                render={{
                  photo: ({ onClick }, { photo, index: photoIdx }) => (
                    <CustomPhoto
                      key={`${photo.image}-${activeTab}-${photoIdx}`}
                      project={photo}
                      onClick={() => {
                        setIndex(photoIdx);
                        setOpen(true);
                      }}
                    />
                  ),
                }}
              />
            </div>
          </TabsContent>

          <TabsContent value="logo" >
            <div>
              <PhotoAlbum
                layout='masonry'
                spacing={16}
                breakpoints={[850, 650, 568, 65, 547, 52]}
                photos={photosToShow}
                sizes={{
                  size: "calc(100vw - 300px)"
                }}
                render={{
                  photo: ({ onClick }, { photo, index: photoIdx }) => (
                    <CustomPhoto
                      key={`${photo.image}-${activeTab}-${photoIdx}`}
                      project={photo}
                      onClick={() => {
                        setIndex(photoIdx);
                        setOpen(true);
                      }}
                    />
                  ),
                }}
              />
            </div>
          </TabsContent>

          <TabsContent value="carte" >
            <div className="text-sm text-muted-foreground text-center py-8">
              Aucun élément trouvé pour ce type de service!
            </div>
          </TabsContent>
        </Tabs>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      </div>
    </section>
  );
};

export default Project;