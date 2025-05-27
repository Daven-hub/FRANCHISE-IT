
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    { name: "Microsoft", logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
    { name: "Microsoft", logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
    { name: "Microsoft", logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
    { name: "Microsoft", logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
    { name: "Microsoft", logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
    { name: "Microsoft", logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
    { name: "Microsoft", logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!scrollerRef.current) return;
    
    // Clone the content for seamless looping
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach(item => {
      const duplicate = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicate);
    });
  }, []);

  return (
    <section id="partners" className="section-padding bg-card/30 relative">
      {/* Background accent element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute left-[10%] top-[40%] w-[300px] h-[300px] rounded-full bg-accent/20 blur-[100px]"></div>
      </div>
 
      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex items-center flex-col gap-4 w-full mx-auto mb-10"
        >
          <div className="inline-block w-fit px-6 py-2 bg-white/5 text-primary rounded-full text-xs md:text-sm font-medium border border-white/10">
             Nos Parténaires
          </div>
          <h2 className="md:heading-lg font-title heading-md text-white">Les Parténaires qui nous font Confiance</h2>
          <p className="text-sm md:text-lg text-white/70">
          Nous collaborons avec les leaders de l'industrie technologique pour vous offrir les meilleures solutions
          </p>
        </motion.div>
      
      <div className="relative w-full overflow-hidden" ref={containerRef}>
        <div 
          className="flex gap-8 partner-scroll" 
          ref={scrollerRef}
          style={{ minWidth: "fit-content" }}
        >
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="w-[200px] h-[100px] glass-effect border-white/10 rounded-lg flex items-center justify-center px-6 py-4 flex-shrink-0 hover:border-accent/40 hover:accent-glow transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-auto h-full max-h-16 object-contain brightness-0 invert hover:filter-none transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
