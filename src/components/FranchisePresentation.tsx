import { motion } from "framer-motion";
import { Search, Server, Shield } from "lucide-react";

const SolutionsProfessionnelles = () => {

    return (
        <section id="solutions" className="section-padding px-[5%] bg-secondary dark:bg-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>

            <div className="w-full md:mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center flex items-center flex-col gap-4 w-full mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-1 bg-black/5 dark:bg-white/5 text-primary rounded-full text-xs font-medium border border-white/10">
                        <span>Solutions Professionnelles</span>
                    </div>

                    <div className="space-y-1.5">
                        <h2 className="heading-lg font-title text-tech-dark dark:text-white">
                            Solutions IT <span className="text-primary">sur mesure</span> pour votre entreprise
                        </h2>
                        <p className="text-sm md:text-lg mx-auto w-full md:w-3/4 lg:w-3/5 text-tech-dark/80 dark:text-white/70">
                            Nous accompagnons les entreprises dans leur transformation digitale avec des solutions
                            technologiques complètes, fiables et innovantes.
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-66 h-66 bg-accent/10 rounded-full blur-3xl z-0"></div>

                            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-tech-dark dark:text-white relative z-10">
                                Des solutions <span className="text-accent">complètes</span> pour votre transformation digitale
                            </h3>

                            <p className="text-tech-dark/80 text-sm md:text-lg dark:text-white/70 mb-8 relative z-10">
                                Que vous ayez besoin d'un site web performant, d'une application mobile,
                                d'un meilleur référencement ou d'une infrastructure sécurisée, nous avons
                                la solution adaptée à vos besoins.
                            </p>

                            <div className="flex items-center gap-2 mt-6 text-tech-dark/80 dark:text-white/60 text-sm md:text-lg">
                                <Shield size={20} className="text-primary" />
                                <span>Solutions certifiées • Support technique </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -top-8 -right-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl z-0"></div>
                            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-accent/20 rounded-full blur-3xl z-0"></div>

                            <div className="relative z-10">
                                <img
                                    src="/team/teams.jpeg"
                                    alt="Solutions informatiques professionnelles"
                                    className="w-full h-auto rounded-2xl professional-shadow relative z-[9]"
                                />


                            </div>

                            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary/30 rounded-2xl z-0"></div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { icon: Shield, title: "Sécurité", desc: "Données et infrastructures protégées" },
                        { icon: Server, title: "Performance", desc: "Hébergement haute disponibilité" },
                        { icon: Search, title: "Visibilité", desc: "Référencement optimisé" }
                    ].map((item, index) => (
                        <div key={index} className="text-center p-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <item.icon className="text-primary" size={24} />
                            </div>
                            <h4 className="text-tech-dark text-lg md:text-xl dark:text-white font-semibold mb-0.5">{item.title}</h4>
                            <p className="text-tech-dark/60 dark:text-white/50 text-sm md:text-md">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsProfessionnelles;