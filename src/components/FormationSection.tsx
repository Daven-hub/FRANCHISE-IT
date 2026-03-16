import { motion } from "framer-motion";
import { CheckCircle, GraduationCap, Clock, Users, Award } from "lucide-react";
import { Button } from "./ui/button";

const FormationSection = () => {
    const formations = [
        "Développement web & applications",
        "DevOps & Cloud Computing",
        "Cybersécurité & Ethical Hacking",
        "Marketing digital & Growth",
        "Bureautique avancée & Productivité"
    ];



    return (
        <section id="formation" className="section-padding px-[5%] md:px-[6%] bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="w-full md:mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center flex items-center flex-col gap-4 w-full mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-1 bg-black/5 dark:bg-white/5 text-primary rounded-full text-xs font-medium border border-white/10">
                        <span>Formation IT</span>
                    </div>

                    <div className="space-y-1.5">
                        <h2 className="md:heading-lg heading-md font-title text-text-dark dark:text-white">
                            Formation & Renforcement des Capacités IT
                        </h2>
                        <p className="text-md md:text-lg mx-auto w-full md:w-3/4 lg:w-3/5 text-tech-dark/70 dark:text-white/70">
                            Programmes de formation certifiants pour les entreprises et institutions
                            dans les domaines du numérique et des nouvelles technologies.
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -top-6 -right-6 w-66 h-66 bg-accent/10 rounded-full blur-3xl z-0"></div>
                            <img
                                src="/e.jpg"
                                alt="Formation IT professionnelle"
                                className="w-full h-auto rounded-2xl professional-shadow relative z-[9]"
                            />
                            <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-accent/50 rounded-2xl z-0"></div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="absolute -bottom-6 -right-6 bg-primary/90 backdrop-blur-sm cdtext-white px-4 py-3 rounded-xl shadow-xl z-10 border border-white/20"
                            >
                                <p className="font-bold text-sm">Certification incluse</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-tech-dark dark:text-white">
                            Développez les compétences de vos équipes
                        </h3>
                        <p className="text-md md:text-lg text-tech-dark dark:text-white/70 mb-6">
                            Nous concevons des parcours de formation sur mesure, adaptés aux besoins
                            spécifiques de votre organisation. Nos formateurs certifiés vous
                            accompagnent dans la montée en compétences de vos équipes.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {formations.map((formation, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-2"
                                >
                                    <CheckCircle className="flex-shrink-0 text-primary mt-1" size={18} />
                                    <span className="text-tech-dark/80 dark:text-white text-sm md:text-base">{formation}</span>
                                </motion.div>
                            ))}
                        </div>



                        <Button
                            variant="outline"
                            className="border-white/20 tracking-wider text-white hover:bg-white/10 px-8 py-6 md:py-6 text-sm md:text-[1rem] bg-primary group"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contactez-nous
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FormationSection;