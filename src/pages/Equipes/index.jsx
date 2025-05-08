import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { equipe } from '../../data/EquipeData';

export default function NotreEquipeExperimental() {
    return (
        <section className="relative py-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* En-tête stylisé */}
                <div className="text-center ">
                    <h2 className="text-2xl sm:text-3xl text-center md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-primary mb-4 md:mb-6">
                        <span className="text-outline">NOTRE ÉQUIPE</span>
                    </h2>
                    {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div> */}
                    <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
                        Des talents pluridisciplinaires réunis pour votre succès
                    </p>
                </div>

                {/* Version desktop - Grille asymétrique */}
                <div className="hidden md:grid grid-cols-3 gap-6 relative z-10">
                    {equipe.map((membre, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
                        >
                            <div className="aspect-square w-full h-full">
                                <img
                                    src={membre.photo}
                                    alt={membre.nom}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                                    <div className="transform transition-all duration-500 group-hover:translate-y-0">
                                        <h3 className="text-xl font-bold text-white mb-1">{membre.nom}</h3>
                                        <p className="text-blue-300 font-medium mb-3">{membre.poste}</p>
                                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {membre.domaines.map((domaine, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium"
                                                >
                                                    {domaine}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Version mobile - Effet carte */}
                <div className="md:hidden">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="w-full max-w-xs h-[400px] mx-auto"
                    >
                        {equipe.map((membre, index) => (
                            <SwiperSlide key={index} className="rounded-2xl overflow-hidden bg-white shadow-xl">
                                <div className="relative h-full">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                                    <img
                                        src={membre.photo}
                                        alt={membre.nom}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                                        <h3 className="text-xl font-bold text-white mb-1">{membre.nom}</h3>
                                        <p className="text-blue-300 font-medium mb-3">{membre.poste}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {membre.domaines.map((domaine, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                                                >
                                                    {domaine}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Élément décoratif */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20 z-0"></div>
            </div>

            <style jsx global>{`
        .text-outline {
          -webkit-text-stroke: 1px rgba(99, 102, 241, 0.3);
          color: transparent;
        }
        
        .mix-blend-luminosity {
          mix-blend-mode: luminosity;
        }
      `}</style>
        </section>
    );
}