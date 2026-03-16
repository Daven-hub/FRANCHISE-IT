import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
// import * as Icons from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { lazy } from "react";
import Layout from "./Layout";
import StageSection from "@/components/StageSection";
import FormationSection from "@/components/FormationSection";
import Marquee from "react-fast-marquee";
// import FAQSection from "@/components/FAQSection";
const Hero = lazy(() => import("@/components/Hero"));
import { SiKubernetes, SiNginx ,SiTypescript, SiSpring , SiJavascript ,SiPostgresql,SiRedis , SiMongodb ,SiMysql, SiAnsible, SiVuedotjs, SiExpress  } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact,FaJava  , FaGithub ,FaGitlab  ,FaGitAlt, FaDocker, FaPython, FaAws, FaNodeJs, FaAngular, FaPhp, FaLaravel, FaJenkins } from "react-icons/fa";



const StatsGrid = () => {
  const totalCells = 7 * 4;

  return (
    <div className="relative px-[5%] md:px-[6%] w-full section-padding  overflow-hidden flex items-center justify-center">

      <div
        className="absolute h-full w-full bg-tech-dark dark:bg-[#031322]/30 grid grid-cols-4 md:grid-cols-7 grid-rows-4 md:grid-rows-4 z-0"
      >
        {Array.from({ length: totalCells }).map((_, i) => (
          <div
            key={i}
            className="border border-white/10 dark:border-gray-800/40"
            style={{ minHeight: '100%', minWidth: '100%' }}
          ></div>
        ))}
      </div>

      <div className="relative grid w-full grid-cols-1 md:grid-cols-3 m z-0 gap-4 md:gap-8">
        <StatBlock value="+27" label="Clients Satisfait" />
        <StatBlock value="+31" label="Projets Réalisés" />
        <StatBlock value="+06" label="Projets en cours" />
      </div>
    </div>
  );
};

const StatBlock = ({ value, label }) => (
  <div className="bg-primary/80 backdrop-blur text-white p-6 flex flex-col items-center justify-center rounded-md shadow-md">
    <div className="text-4xl font-bold">{value}</div>
    <div className="text-lg mt-2">{label}</div>
  </div>
);

const logos = [
  {
    link: '/logo/ANG.png',
    url: ''
  },
  {
    link: '/logo/asso.png',
    url: ''
  },
  {
    link: '/logo/ccca.png',
    url: ''
  },
  {
    link: '/logo/centre.jpg',
    url: ''
  },
  {
    link: '/logo/chambre.jpg',
    url: ''
  },
  {
    link: '/logo/ifpf.png',
    url: ''
  },
  {
    link: '/logo/impulsion.jpg',
    url: ''
  },
  {
    link: '/logo/ngk.jpg',
    url: ''
  },
  {
    link: '/logo/nfp.png',
    url: ''
  },
  {
    link: '/logo/foc.jpg',
    url: ''
  },
  {
    link: '/logo/fcc.png',
    url: ''
  },
  {
    link: '/logo/jicac.png',
    url: ''
  }
]

// const techs = [
//   { "name": "JavaScript", "icon": "FileCode", "category": "language" },
//   { "name": "TypeScript", "icon": "FileCode2", "category": "language" },
//   { "name": "Python", "icon": "Terminal", "category": "language" },
//   { "name": "Java", "icon": "Coffee", "category": "language" },
//   { "name": "C++", "icon": "Code", "category": "language" },

//   { "name": "React", "icon": "Atom", "category": "frontend" },
//   { "name": "Next.js", "icon": "Globe", "category": "frontend" },
//   { "name": "Vue", "icon": "Triangle", "category": "frontend" },
//   { "name": "Angular", "icon": "Hexagon", "category": "frontend" },
//   { "name": "Svelte", "icon": "Zap", "category": "frontend" },

//   { "name": "Node.js", "icon": "Server", "category": "backend" },
//   { "name": "Express", "icon": "Route", "category": "backend" },
//   { "name": "Django", "icon": "Layers", "category": "backend" },
//   { "name": "Laravel", "icon": "Box", "category": "backend" },
//   { "name": "Spring", "icon": "Leaf", "category": "backend" },

//   { "name": "MySQL", "icon": "Database", "category": "database" },
//   { "name": "PostgreSQL", "icon": "DatabaseBackup", "category": "database" },
//   { "name": "MongoDB", "icon": "Cylinder", "category": "database" },
//   { "name": "Redis", "icon": "HardDrive", "category": "database" },

//   { "name": "Docker", "icon": "Package", "category": "devops" },
//   { "name": "Kubernetes", "icon": "Boxes", "category": "devops" },
//   { "name": "Git", "icon": "GitBranch", "category": "devops" },
//   { "name": "GitHub", "icon": "Github", "category": "devops" },
//   { "name": "GitLab", "icon": "GitMerge", "category": "devops" },

//   { "name": "AWS", "icon": "Cloud", "category": "cloud" },
//   { "name": "Azure", "icon": "CloudCog", "category": "cloud" },
//   { "name": "Google Cloud", "icon": "CloudLightning", "category": "cloud" },

//   { "name": "Linux", "icon": "TerminalSquare", "category": "system" },
//   { "name": "Bash", "icon": "Terminal", "category": "system" },
//   { "name": "Nginx", "icon": "ServerCog", "category": "system" }
// ]
const techs = [
  FaReact,
  FaDocker,
  FaPython,
  FaAws,
  FaNodeJs,
  FaAngular,
  FaPython,
  FaPhp,
  FaLaravel,
  FaJenkins,
  SiKubernetes,
  SiAnsible,
  SiVuedotjs,
  RiNextjsLine,
  SiExpress,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  DiDjango,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript ,
  FaJava,
  SiSpring,
  SiNginx 
];

const Index = () => {

  return (
    <Layout>
      <Hero />
      <div className="section-padding w-full relative px-[5%] grid grid-cols-1 max-md:gap-5 md:grid-cols-3 bg-primary/10">
        <div className="col-span-1 flex flex-col justify-center items-center pr-1">
          <h1 className="font-title heading-md md:heading-lg"> Notre stack au service de solutions performantes.</h1>
        </div>
        <div className="col-span-1 flex flex-col gap-5 w-full md:col-span-2">
          <Marquee direction="right" speed={15} pauseOnHover gradientWidth={40} gradient={true}>
            <div className="flex items-center gap-5">
              {techs.map((Icon,index) => {
                return (
                  <div key={index} className="flex bg-tech-dark last-of-type:mr-5 text-white dark:bg-accent p-5 flex-col justify-center items-center">
                    <Icon size={40} />
                  </div>
                );
              })}
            </div>
          </Marquee>
          <Marquee direction="left" speed={15} pauseOnHover gradientWidth={40} gradient={true}>
            <div className="flex items-center gap-5">
              {techs.map((Icon,index) => {
                return (
                  <div key={index} className="flex bg-tech-dark last-of-type:mr-5 text-white dark:bg-accent p-5 flex-col justify-center items-center">
                    <Icon size={40} />
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
      {/* <div className="section-padding px-[5%] space-y-5 bg-primary/10">
        <h1 className="heading-md">Ils nous font confiance</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {logos?.map((x, index) =>
            <a className="h-[80px] bg-white px-3 py-1 rounded-[5px]" key={index} href={x.url}>
              <img className="w-full aspect-square object-contain h-full" src={x.link} ></img>
            </a>
          )}
        </div>
      </div> */}
      <About />
      <Services />
      <FormationSection />
      <Projects />
      <StageSection />
      <FAQSection />
      <StatsGrid />
      {/* <Devis/> */}
      {/* <Partners /> */}
      <Contact />
    </Layout>
  );
};

export default Index;
