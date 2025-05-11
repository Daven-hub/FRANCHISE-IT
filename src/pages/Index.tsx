
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
// import Team from "@/components/Team";
// import Partners from "@/components/Partners";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Devis from "./Devis";

const StatsGrid = () => {
  const totalCells = 7 * 4;

  return (
    <div className="relative px-[4%] md:px-[7%] w-full section-padding bg-[#031322]/30 overflow-hidden flex items-center justify-center">

      <div
        className="absolute h-full w-full grid grid-cols-4 md:grid-cols-7 grid-rows-4 md:grid-rows-4 z-10"
        style={{ width: '100%', height: '100%' }}
      >
        {Array.from({ length: totalCells }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-800/50"
            style={{ minHeight: '100%', minWidth: '100%' }}
          ></div>
        ))}
      </div>
   
      <div className="relative grid w-full grid-cols-1 md:grid-cols-3 m z-10 gap-4 md:gap-8">
        <StatBlock value="+30" label="Clients Satisfait" />
        <StatBlock value="+40" label="Projets Réalisés" />
        <StatBlock value="+10" label="Années d'expériences" />
      </div>
    </div>
  );
};

const StatBlock = ({ value, label }) => (
  <div className="bg-primary/60 text-white p-6 flex flex-col items-center justify-center rounded-md shadow-md">
    <div className="text-4xl font-bold">{value}</div>
    <div className="text-lg mt-2">{label}</div>
  </div>
);
const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vh] bg-accent/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[35vw] h-[35vh] bg-accent/5 rounded-full blur-[150px]"></div>
        <div className="absolute top-[60%] left-[20%] w-[25vw] h-[25vh] bg-white/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <StatsGrid />
      <Devis/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
