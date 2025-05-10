
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const Team = () => {
  const team: TeamMember[] = [
    {
      id: 1,
      name: "Thomas Dubois",
      role: "Fondateur & CEO",
      bio: "Plus de 15 ans d'expérience dans le développement informatique et la gestion de projets IT.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
      linkedin: "#",
      email: "thomas@franchise-it.com"
    },
    {
      id: 2,
      name: "Sophie Martin",
      role: "Directrice Technique",
      bio: "Experte en architecture de solutions et développement backend avec une passion pour les technologies cloud.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
      linkedin: "#",
      email: "sophie@franchise-it.com"
    },
    {
      id: 3,
      name: "Alexandre Petit",
      role: "Lead Developer",
      bio: "Développeur full-stack spécialisé en JavaScript avec expertise en React et Node.js.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      linkedin: "#",
      email: "alex@franchise-it.com"
    },
    {
      id: 4,
      name: "Julie Leroy",
      role: "UX/UI Designer",
      bio: "Créatrice d'expériences utilisateur intuitives et d'interfaces modernes pour applications web et mobile.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
      linkedin: "#",
      email: "julie@franchise-it.com"
    }
  ];

  return (
    <section id="team" className="section-padding">
      <div className="w-full">
        <div className="text-center w-full mx-auto mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Notre Équipe</h2>
          <p className="text-lg text-muted-foreground text-center">
            Rencontrez les talents qui font de Franchise IT une entreprise d'exception
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card key={member.id} className="glass-effect border-white/10 card-hover group team-member-card">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
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
                </div>
              </div>
              
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary/70 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
