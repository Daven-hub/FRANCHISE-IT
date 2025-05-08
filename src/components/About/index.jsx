import React from 'react';
import { motion } from 'framer-motion';
import {
    FaLaptopCode, FaMobileAlt, FaChartLine, FaShieldAlt,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="" >

            {/* Contenu principal */}
            <div className="relative z-10  py-8">
                {/* En-tête animé */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="text-sm font-mono text-primary mb-4 tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        ▸ FRANCHISE IT ▸ SOLUTIONS DIGITALES
                    </motion.div>
                    <h1 className="text-2xl sm:text-3xl text-center md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-primary mb-4 md:mb-6">
                        <motion.span>
                            {"Solutions Digitales".split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.03 }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>
                        <br />
                        {/* <motion.span
              className="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Sur Mesure
            </motion.span> */}
                    </h1>
                    <motion.p
                        className="text-base md:text-lg text-primary max-w-3xl mx-auto mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        Nous concevons des solutions digitales personnalisées qui s'adaptent parfaitement aux besoins de votre entreprise.
                    </motion.p>
                </motion.div>

                {/* Section Expertise */}
                <div className="relative">
                    <div className="absolute -left-48 top-1/2 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl"></div>
                    <div className="absolute -right-48 bottom-1/2 w-96 h-96 bg-indigo-400/10 rounded-full filter blur-3xl"></div>

                    <motion.div
                        className="relative "
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Texte */}
                            <div className="lg:w-1/2">
                                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                                    <span className="text-blue-600">//</span> Notre Expertise
                                </h2>
                                <p className="text-primary mb-6 text-base md:text-lg">
                                    Franchise IT combine innovation technologique et compréhension métier pour créer des solutions qui donnent un avantage concurrentiel.
                                </p>
                                <div className="space-y-6">
                                    {[{
                                        icon: <FaLaptopCode className="text-xl" />,
                                        title: "Développement Sur-Mesure",
                                        text: "Applications web et mobiles adaptées à vos processus uniques",
                                    }, {
                                        icon: <FaChartLine className="text-xl" />,
                                        title: "Transformation Digitale",
                                        text: "Accompagnement complet dans votre transition numérique",
                                    }, {
                                        icon: <FaShieldAlt className="text-xl" />,
                                        title: "Sécurité Informatique",
                                        text: "Protection de vos données et infrastructure",
                                    }].map(({ icon, title, text }, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="text-blue-600 mt-1">{icon}</div>
                                            <div>
                                                <h4 className="text-primary font-semibold text-base md:text-lg">{title}</h4>
                                                <p className="text-primary text-sm md:text-base">{text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Illustration centrale animée */}
                            <div className="lg:w-1/2 flex items-center justify-center">
                                <motion.div
                                    className="relative w-full max-w-md aspect-square"
                                    animate={{
                                        rotate: [0, 5, -5, 0],
                                        transition: {
                                            duration: 10,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }
                                    }}
                                >
                                    <div className="absolute inset-0 rounded-full bg-black/30"></div>
                                    <div className="absolute inset-8 rounded-full border-2 border-dashed border-black/30"></div>
                                    <div className="absolute inset-16 rounded-full bg-bg-end flex items-center justify-center shadow-inner">
                                        <div className="text-center p-8">
                                            <div className="text-2xl md:text-4xl font-bold text-primary mb-4">Franchise IT</div>
                                            <div className="text-primary font-medium text-sm md:text-base">
                                                Experts en Solutions<br />Digitales sur Mesure
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Appel à l'action */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl md:text-3xl font-bold text-primary mb-8">
                        Prêt à <span className="text-blue-600">digitaliser</span> votre entreprise ?
                    </h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-base md:text-lg shadow-md"
                    >
                        <Link
                            to="/contact">
                            <span className="flex items-center gap-2">
                                DISCUTONS DE VOTRE PROJET
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity
                                    }}
                                >
                                    →
                                </motion.span>

                            </span>
                        </Link>

                    </motion.button>
                    <p className="text-primary mt-4 text-sm">
                        {/* Une question ? Contactez-nous au <span className="font-semibold">+XX X XX XX XX XX</span> */}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
