import { Button } from "@/components/ui/button";

const HeroDevis = () => {
  return (
    <section
      id="hero-devis"
      className="relative w-full h-[400px] md:h-[500px] flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute w-full h-full">
        <img
          src="/blag.jpg"
          alt="Bannière devis"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full inset-0 grid grid-cols-8 md:grid-cols-12 h-full grid-rows-8 md:grid-rows-6 gap-0 pointer-events-none">
        {Array.from({ length: 12 * 6 }).map((_, i) => (
          <div key={i} className="border border-gray-800/45" />
        ))}
      </div>

      <div className="px-[4.5%] md:px-[6%] w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 w-full animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Obtenez votre <span className="text-gradient bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">devis personnalisé</span>
            </h1>
            <p className="text-white md:text-lg text-muted-foreground">
              Dites-nous en plus sur votre projet et recevez une estimation sous 48h.
            </p>
            <Button
              className="glass-effect !text-black !bg-white hover:bg-white/10 border border-white/20 px-8 py-6 text-sm md:text-base group"
              onClick={() =>
                document
                  .getElementById("form-devis")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Remplir le formulaire
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDevis;
