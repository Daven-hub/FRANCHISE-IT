
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Devis from "./Devis";
import { useEffect, useState } from "react";


const StatsGrid = () => {
  const totalCells = 7 * 4;

  return (
    <div className="relative px-[5%] md:px-[6%] w-full section-padding bg-[#031322]/30 overflow-hidden flex items-center justify-center">

      <div
        className="absolute h-full w-full grid grid-cols-4 md:grid-cols-7 grid-rows-4 md:grid-rows-4 z-0"
      >
        {Array.from({ length: totalCells }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-800/50"
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
  <div className="bg-primary/60 text-white p-6 flex flex-col items-center justify-center rounded-md shadow-md">
    <div className="text-4xl font-bold">{value}</div>
    <div className="text-lg mt-2">{label}</div>
  </div>
);
const Index = () => {

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <StatsGrid />
      {/* <Team /> */}
      <Devis/>
      {/* <Partners /> */}
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default Index;
