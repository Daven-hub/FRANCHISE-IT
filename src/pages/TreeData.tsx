import React from 'react'
import Tree from 'react-d3-tree';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";


export type TeamMember = {
    id: string;
    name: string;
    role: string;
    bio?: string;
    image: string;
    linkedin?: string;
    email?: string;
    children?: TeamMember[];
  };
  interface OrgNodeProps {
    node: TeamMember;
  }
  
  export const teamData: TeamMember = {
    id: "1",
    name: "Jean Dupont",
    role: "CEO",
    bio: "Fondateur et visionnaire",
    image: "/team/lionel.png",
    linkedin: "https://linkedin.com/in/jeandupont",
    email: "jean.dupont@example.com",
    children: [
      {
        id: "2",
        name: "Sarah K.",
        role: "Responsable Marketing",
        bio: "Expert en branding et campagne",
        image: "/team/lionel.png",
        linkedin: "https://linkedin.com/in/sarahk",
        email: "sarah.k@example.com",
        children: [
          {
            id: "3",
            name: "Ali B.",
            role: "Community Manager",
            bio: "Gère les réseaux sociaux",
            image: "/team/lionel.png",
            linkedin: "https://linkedin.com/in/alib",
            email: "ali.b@example.com",
          },
          {
            id: "4",
            name: "Inès L.",
            role: "Graphiste",
            bio: "Création visuelle et branding",
            image: "/team/lionel.png",
            linkedin: "https://linkedin.com/in/inesl",
            email: "ines.l@example.com",
          },
        ],
      },
      {
        id: "5",
        name: "David M.",
        role: "CTO",
        bio: "Architecte technique",
        image: "/team/lionel.png",
        linkedin: "https://linkedin.com/in/davidm",
        email: "david.m@example.com",
        children: [
          {
            id: "6",
            name: "Yann T.",
            role: "Frontend Dev",
            bio: "Spécialiste React",
            image: "/team/lionel.png",
            linkedin: "https://linkedin.com/in/yannt",
            email: "yann.t@example.com",
          },
          {
            id: "7",
            name: "Fatou D.",
            role: "Backend Dev",
            bio: "API et bases de données",
            image: "/team/lionel.png",
            linkedin: "https://linkedin.com/in/fatoud",
            email: "fatou.d@example.com",
          },
        ],
      },
    ],
  };
  export const OrgNode = ({ node }: OrgNodeProps) => {
    return (
      <div className="flex flex-col items-center relative text-center">
        {/* Grand cadre Card */}
        <Card key={node.id} className="glass-effect border-white/10 card-hover group team-member-card w-[300px]">
          <div className="relative overflow-hidden aspect-square">
            <img
              src={node.image}
              alt={node.name}
              className="w-full h-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full flex justify-center gap-4">
                {node.linkedin && (
                  <a
                    href={node.linkedin}
                    className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {node.email && (
                  <a
                    href={`mailto:${node.email}`}
                    className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
  
          <CardContent className="p-5 text-center">
            <h3 className="text-xl font-bold mb-1 text-white">{node.name}</h3>
            <p className="text-sm text-primary/70 font-medium mb-2">{node.role}</p>
            <p className="text-sm text-muted-foreground">{node.bio}</p>
          </CardContent>
        </Card>
  
        {/* Relations */}
        {node.children && (
          <div className="flex flex-col md:flex-row items-center mt-12 relative">
            {/* Trait vertical du parent */}
            <div className="absolute top-0 left-1/2 w-0.5 h-10 bg-blue-400 -translate-x-1/2 z-0" />
  
            <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 relative">
              {node.children.map((child, index) => (
                <div key={child.id} className="relative flex flex-col items-center">
                  {index < node.children.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-[-50%] w-full h-0.5 bg-blue-400 z-[-1]" />
                  )}
                  <OrgNode node={child} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

function TreeData() {
    // const treeData = [
    //     {
    //       name: 'CEO',
    //       attributes: {
    //         imageUrl: '/blag.jpg',
    //       },
    //       children: [
    //         {
    //           name: 'CTO',
    //           attributes: {
    //             imageUrl: '/blag.jpg',
    //           },
    //         },
    //         {
    //           name: 'CFO',
    //           attributes: {
    //             imageUrl: '/blag.jpg',
    //           },
    //         },
    //       ],
    //     },
    //   ];
      
  return (
    <div className="min-h-screen bg-black py-8">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-12">
        Organigramme de l'Équipe
      </h1>
      <div className="flex justify-center">
        <OrgNode node={teamData} />
      </div>
    </div>
  )
}

export default TreeData
