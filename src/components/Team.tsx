import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Locate, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "react-photo-album/styles.css";
import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  loc?: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const Team = () => {
  const team: TeamMember[] = [
    {
      id: 1,
      name: "Maxime Tsafack",
      role: "CTO & Co-Founder",
      bio: "Software Engineer, Expert en gestion de projets IT",
      loc: "Canada - Cameroun",
      image: "/team/maxime.JPG",
      linkedin: "#",
      email: "info@franchise-it-tech.com"
    },
    {
      id: 7,
      name: "Herve Njafang",
      role: "Co-Founder",
      bio: "Software Engineer | Aerospace Engineer I MBA",
      loc: "Munich - Allemagne",
      image: "/team/stephane.jpeg",
      linkedin: "#",
      email: "info@franchise-it-tech.com"
    },
    {
      id: 9,
      name: "Ronald Djomkam",
      role: "Co-Founder",
      bio: "Senior Software Engineer",
      loc: "suisse",
      image: "/smith.jpg",
      linkedin: "#",
      email: "info@franchise-it-tech.com"
    },
    {
      id: 8,
      name: "Jeremy Dubois",
      role: "Co-Founder",
      bio: "Scrum Master",
      loc: "Canada",
      image: "/team/jeremy.jpg",
      linkedin: "#",
      email: "info@franchise-it-tech.com"
    },
    {
      id: 2,
      name: "Lionel Fotso",
      role: "Développeur Fullstack",
      bio: "Passionné par les bonnes pratiques pour transformer des idées en produits concrets.",
      loc: "",
      image: "/team/lionel.png",
      linkedin: "#",
      email: "info@franchise-it-tech.com"
    },
    {
      id: 3,
      name: "Richard Hemba",
      role: "Développeur Fullstack",
      loc: "",
      bio: "Passionné par les bonnes pratiques pour transformer des idées en produits concrets.",
      image: "/team/richard.png",
      linkedin: "#",
      email: "info@franchise-it-tech.com"
    },
    {
      id: 4,
      name: "Jethro Dieudonné",
      role: "Graphic Designer",
      bio: "Créateur d'expériences utilisateur intuitives et d'interfaces modernes pour applications web, mobile et autres.",
      image: "/team/jeth.jpg",
      loc: "",
      linkedin: "#",
      email: "info@franchise-it-tech.com"
    },
    // {
    //   id: 5,
    //   name: "Chavita Adang",
    //   role: "Responsable marketing",
    //   bio: "Stratégie, acquisition & fidélisation | J’aide les marques à se démarquer et à croître durablement.",
    //   image: "/team/shavita.jpg",
    //   loc:"",
    //   linkedin: "#",
    //   email: "info@franchise-it-tech.com"
    // },
    {
      id: 5,
      name: "Roger BENCHA",
      role: "Consultant FreeLance",
      bio: "Expert en développement d'applications FullStack ainsi qu'en conception UI/UX. ",
      image: "/team/roger.jpeg",
      loc: "Paris, France",
      linkedin: "#",
      email: "info@franchise-it-tech.com"
    },
    {
      id: 6,
      name: "Cédric TIAKO,",
      role: "Consultant Senior",
      loc: "",
      bio: "Expert en Solution maintenables et orientées utilisateur, en suivant les bonnes pratiques de développement",
      image: "/team/pers.jpg",
      linkedin: "#",
      email: "info@franchise-it-tech.com"
    },
  ];

  const teamsWithPhotos = team.map((item) => ({
      ...item,
      src: item.image || "",
      width: 1,
      height: 1,
    }));

    const CustomPhoto = ({ member }) => {
      const [loaded, setLoaded] = useState(false)
      return (
        <Card key={member.id} className="glass-effect w-full h-full border-white/10 card-hover group team-member-card bg-[#031322]/50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover aspect-[9/8] transition-transform duration-500 group-hover:scale-105"
                  />
              </Card>
      )
    }

  return (
    <section id="team" className="section-padding px-[5%]">
      {/* j'ai retirer bg-[#031322]/40  */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex items-center flex-col gap-4 w-full mx-auto mb-6"
        >
          <div className="inline-block w-fit px-6 py-1 bg-tech-dark/5 dark:bg-white/5 text-primary rounded-full text-xs font-medium border border-white/10">
            Équipes
          </div>
          <div className="space-y-1.5">
            <h2 className="md:heading-lg font-title heading-md text-tech-dark dark:text-white">Nos Équipes</h2>
            <p className="text-sm md:text-lg text-tech-dark/80 dark:text-white/70">
              Rencontrez les talents qui font de Franchise IT une entreprise d'exception
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member) => (
            <Card key={member.id} className="glass-effect group relative overflow-hidden rounded-[4px] card-hover group team-member-card bg-[#031322]/50">
              <div className="relative overflow-hidden md:aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* <div className="absolute group-hover:bottom-0 -bottom-full inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center gap-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Mail size={18} />
                        </a>
                      )}
                    </div>
                  </div>
              </div> */}
              <CardContent className="px-3.5 py-3.5 w-full group-hover:bg-tech-dark/95 group-hover:bottom-0 transition-all duration-500 absolute -bottom-full text-center">
                <h3 className="text-lg text-white font-bold mb-1">{member.name}</h3>
                <p className="text-[.9rem] text-primary/90 font-semibold contrast-200 mb-2">{member.role}</p>
                <p className="text-sm text-white/70">{member.bio}</p>
                {member.loc !== "" && <span className="text-[.75rem] text-white mt-1.5 flex items-center mx-auto w-fit"><Locate className="inline mr-1 w-4 h-4 text-primary/70 align-middle" /> {member.loc}</span>}
                <div className="pt-1 w-full">
                    <div className="flex justify-center gap-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 rounded-full text-white glass-effect flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 rounded-full text-white glass-effect flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Mail size={18} />
                        </a>
                      )}
                    </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
