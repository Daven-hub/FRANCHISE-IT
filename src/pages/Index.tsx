import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQSection from "@/components/FAQSection";
import Layout from "./Layout";
import StageSection from "@/components/StageSection";
// import FormationSection from "@/components/FormationSection";
import Marquee from "react-fast-marquee";
import Hero from "@/components/Hero";
import { SiKubernetes, SiNginx ,SiTypescript, SiSpring , SiJavascript ,SiPostgresql,SiRedis , SiMongodb ,SiMysql, SiAnsible, SiVuedotjs, SiExpress  } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact,FaJava  , FaGithub ,FaGitlab  ,FaGitAlt, FaDocker, FaPython, FaAws, FaNodeJs, FaAngular, FaPhp, FaLaravel, FaJenkins } from "react-icons/fa";
import ProjectHomePage from "@/components/ProjectHomePage";
import { useTheme } from "@/context/ThemeContext";
import { NavLink } from "react-router-dom";


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

  const {theme}=useTheme()

  return (
    <Layout>
      <Hero />
      <div className="section-padding w-full relative px-[5%] grid grid-cols-1 max-md:gap-5 md:grid-cols-3 bg-background">
        <div className="col-span-1 flex flex-col justify-center items-center pr-1">
          <h1 className="font-title text-xl max-md:font-bold md:heading-lg"> Notre stack au service des solutions performantes.</h1>
        </div>
        <div className="col-span-1 flex flex-col gap-4 w-full md:col-span-2">
          <Marquee direction="right" speed={15} pauseOnHover autoFill gradientWidth={15} gradientColor={theme==='dark' ? 'black' : 'white'} gradient={true}>
            <div className="flex items-center gap-5">
              {techs.map((Icon,index) => {
                return (
                  <div key={index} className="flex bg-tech-dark last-of-type:mr-5 text-white dark:bg-accent p-4 flex-col justify-center items-center">
                    <Icon size={40} strokeWidth={0.5} />
                  </div>
                );
              })}
            </div>
          </Marquee>
          <Marquee direction="left" speed={15} pauseOnHover autoFill gradientWidth={15} gradientColor={theme==='dark' ? 'black' : 'white'} gradient={true}>
            <div className="flex items-center gap-5">
              {techs.map((Icon,index) => {
                return (
                  <div key={index} className="flex bg-tech-dark last-of-type:mr-5 text-white dark:bg-accent p-4 flex-col justify-center items-center">
                    <Icon size={40} strokeWidth={0.5}/>
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

      {/**barre bleue*/}
      <div className="px-[5%]">
          <div className="bg-primary p-8 w-full section-padding rounded-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Exclusivité</h2>
              <p className="text-white/90 max-w-3xl text-base md:text-[1rem]">Nous développons des programmes de formation personnalisés pour renforcer les compétences de vos équipes dans les technologies modernes et les méthodologies innovantes.</p>
            </div>
            <NavLink to={'/formations'} className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-white/90 transition-colors whitespace-nowrap">
              En savoir plus
            </NavLink>
          </div>
      </div>
      {/* <FormationSection /> */}
      <ProjectHomePage />
      {/* <Partners /> */}
      <StageSection />
      <FAQSection />
      <StatsGrid />
      {/* <Devis/> */}
      <Contact />
    </Layout>
  );
};

export default Index;
