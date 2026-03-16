import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Rocket, Target, HeartHandshake } from "lucide-react";
import { Button } from "./ui/button";

const StageSection = () => {
    const pourquoiStages = [
        "Immersion professionnelle dans un environnement tech innovant",
        "Encadrement par des experts passionnés",
        "Projets concrets et responsabilités réelles",
        "Accès aux technologies de pointe",
        "Flexibilité horaire et télétravail possible",
        "Opportunités d'embauche à la clé"
    ];

    const avantagesStagiaires = [
        {
            icon: Award,
            title: "Certification",
            description: "Attestation de stage et certification des compétences acquises"
        },
        {
            icon: Users,
            title: "Mentorat",
            description: "Suivi personnalisé par un référent technique dédié"
        }
    ];

    const images = [
        {
            src: "/stage/sa.jpeg",
            alt: "Équipe de stagiaires en réunion",
        },
        {
            src: "/stage/st.jpeg",
            alt: "Mentorat individuel",
        },
        {
            src: "/stage/ga.jpeg",
            alt: "Travail sur projets innovants",

        },
        {
            src: "/stage/ge.jpeg",
            alt: "Travail sur projets innovants",
        },
        {
            src: "/stage/stag.jpeg",
            alt: "Travail sur projets innovants",
        },
        {
            src: "/stage/sa.jpeg",
            alt: "Équipe de stagiaires en réunion",
        },
    ];

    return (
        <section id="stages" className="section-padding px-[5%] bg-tech-dark dark:bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="w-full md:mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center flex items-center flex-col gap-4 w-full mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-1 bg-white/5 text-primary rounded-full text-xs font-medium border border-white/10">
                        <span>Programme Stages</span>
                    </div>

                    <div className="space-y-1.5">
                        <h2 className="md:heading-lg heading-md font-title text-white">
                            Rejoignez notre programme de stages
                        </h2>
                        <p className="text-sm mx-auto md:text-lg w-full md:w-3/4 lg:w-3/5 text-white/70">
                            Lancez votre carrière dans le numérique avec nos offres de stages
                            immersifs et formateurs au cœur de l'innovation technologique.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -10 }}
                             viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="relative overflow-hidden rounded-2xl">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                                <div className="relative">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-64 object-cover rounded-2xl professional-shadow"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex w-full flex-col lg:flex-row items-start gap-14">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-66 h-66 bg-primary/10 rounded-full blur-3xl z-0"></div>

                            <h3 className="text-2xl font-bold mb-4 text-tech-dark dark:text-white relative z-10">
                                <span className="text-primary">Pourquoi</span> faire votre stage chez nous ?
                            </h3>
                            <p className="text-white/70 mb-6 relative z-10">
                                Nous offrons bien plus qu'un simple stage : une véritable expérience professionnelle
                                qui prépare votre avenir dans le monde du travail.
                            </p>

                            <div className="grid grid-cols-1 gap-4 relative z-10">
                                {pourquoiStages.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                         viewport={{ once: true }}
                                        className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10"
                                    >
                                        <CheckCircle className="flex-shrink-0 text-primary" size={20} />
                                        <span className="text-white text-sm md:text-base">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -bottom-6 -right-6 w-66 h-66 bg-accent/10 rounded-full blur-3xl z-0"></div>

                            <h3 className="text-2xl font-bold mb-4 text-white relative z-10">
                                <span className="text-accent">Les plus</span> de notre programme
                            </h3>
                            <p className="text-white/70 mb-6 relative z-10">
                                Des avantages exclusifs pour nos stagiaires, conçus pour maximiser
                                votre apprentissage et votre employabilité.
                            </p>

                            <div className="space-y-4 relative z-10">
                                {avantagesStagiaires.map((avantage, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="bg-primary/20 p-3 rounded-lg">
                                                <avantage.icon className="text-primary" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold text-lg mb-1">{avantage.title}</h4>
                                                <p className="text-white/60 text-sm">{avantage.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="mt-8 p-6 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-xl border border-white/10"
                            >
                                <div className="flex max-md:flex-col text-center items-center gap-4">
                                    <HeartHandshake className="text-primary" size={32} />
                                    <div>
                                        <p className="text-white font-semibold">Prêt à relever le défi ?</p>
                                        <p className="text-white/60 text-sm">Envoyez-nous votre candidature dès maintenant</p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="border-white/20 tracking-wider text-white hover:bg-white/10 px-8 py-6 md:py-6 text-sm md:text-[1rem] bg-primary group"
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Contactez-nous
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StageSection;