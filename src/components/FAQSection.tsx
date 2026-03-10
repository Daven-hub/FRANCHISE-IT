import { motion } from "framer-motion";
import { ChevronDown, HelpCircle, Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Quels types de développement web proposez-vous ?",
            answer: "Nous développons tous types de sites et applications web : sites vitrines, e-commerce, plateformes sur mesure, applications métier, API, etc. Nous utilisons les technologies modernes comme React, Next.js, Node.js, et bien d'autres."
        },
        {
            question: "Combien de temps faut-il pour développer une application mobile ?",
            answer: "Le délai varie selon la complexité du projet. Une application simple peut prendre 2-3 mois, tandis qu'une application plus complexe peut nécessiter 6 mois ou plus. Nous établissons un planning détaillé après analyse de vos besoins."
        },
        {
            question: "Comment mesurez-vous le référencement SEO ?",
            answer: "Nous utilisons des outils professionnels pour suivre vos positions sur les mots-clés ciblés, analyser le trafic organique, et mesurer l'amélioration de votre visibilité. Des rapports mensuels détaillés vous sont fournis."
        },
        {
            question: "Quels sont vos engagements en matière de sécurité ?",
            answer: "Nous mettons en place des mesures de sécurité robustes : certificats SSL, pare-feu, sauvegardes quotidiennes, monitoring 24/7, et audits de sécurité réguliers pour protéger vos données et celles de vos clients."
        },
        {
            question: "Proposez-vous un support après la livraison ?",
            answer: "Absolument ! Nous offrons différentes formules de maintenance et de support pour garantir le bon fonctionnement de vos solutions dans la durée. Notre équipe reste disponible pour toute assistance."
        },
        {
            question: "Comment se passe le processus de collaboration ?",
            answer: "Notre processus est simple : 1) Audit et analyse de vos besoins, 2) Proposition technique et devis, 3) Développement en méthodologie agile, 4) Tests et recette, 5) Déploiement et formation, 6) Suivi et maintenance."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding px-[5%] md:px-[6%] bg-black relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Data center - Infrastructure IT"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
            </div>

            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-40 z-0"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30 z-0"></div>

            <div className="w-full md:mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center flex items-center flex-col gap-4 w-full mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-white/10">
                        <HelpCircle size={16} />
                        <span>FAQ</span>
                    </div>
                    <h2 className="heading-lg font-title text-white">
                        Questions <span className="text-primary">fréquentes</span>
                    </h2>
                    <p className="text-[1rem] w-full md:w-3/4 lg:w-3/5 text-white/70 backdrop-blur-sm p-2 rounded-lg">
                        Retrouvez les réponses aux questions les plus courantes sur nos services
                        et notre accompagnement.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                                    >
                                        <span className="text-white font-medium text-base md:text-lg pr-8">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                                }`}
                                            size={20}
                                        />
                                    </button>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: openIndex === index ? 'auto' : 0,
                                            opacity: openIndex === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-4 text-white/70 border-t border-white/10 pt-3">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Vous ne trouvez pas votre réponse ?
                            </h3>
                            <p className="text-white/60 text-sm mb-6">
                                Notre équipe est disponible pour répondre à toutes vos questions
                                et vous accompagner dans vos projets.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
                                    <div className="bg-primary/20 p-2 rounded-lg">
                                        <Mail size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium">Email</p>
                                        <p className="text-white/50 text-xs">contact@votresite.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
                                    <div className="bg-primary/20 p-2 rounded-lg">
                                        <Phone size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium">Téléphone</p>
                                        <p className="text-white/50 text-xs">+225 00 00 00 00</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
                                    <div className="bg-primary/20 p-2 rounded-lg">
                                        <MessageCircle size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium">Chat en direct</p>
                                        <p className="text-white/50 text-xs">Réponse sous 5 min</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-6 bg-primary hover:bg-accent text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                                Contactez-nous
                            </button>

                            <p className="text-center text-white/40 text-xs mt-4">
                                Disponibles 24/7 pour vous répondre
                            </p>
                        </div>
                    </motion.div>
                </div>

               
            </div>
        </section>
    );
};

export default FAQSection;