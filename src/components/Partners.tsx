
import { useRef, useEffect } from "react";

const Partners = () => {
  const partners = [
    { name: "Microsoft", logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
    { name: "AWS", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png" },
    { name: "Google Cloud", logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" },
    { name: "Oracle", logo: "https://cdn-icons-png.flaticon.com/512/5969/5969170.png" },
    { name: "IBM", logo: "https://cdn-icons-png.flaticon.com/512/882/882704.png" },
    { name: "Cisco", logo: "https://cdn-icons-png.flaticon.com/512/882/882730.png" },
    { name: "SAP", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968410.png" },
    { name: "Intel", logo: "https://cdn-icons-png.flaticon.com/512/882/882693.png" }
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
      
      <div className="w-full mb-8 relative z-10">
        <div className="text-center w-full mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos Partenaires</h2>
          <p className="text-lg text-center text-muted-foreground">
            Nous collaborons avec les leaders de l'industrie technologique pour vous offrir les meilleures solutions
          </p>
        </div>
      </div>
      
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
