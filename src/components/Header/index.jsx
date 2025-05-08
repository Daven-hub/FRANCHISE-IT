"use client";

import {
  motion,
  AnimatePresence,
  useCycle,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/franchise_it.png";
import bannerDefault from "../../assets/ui-ux-representations-with-laptop.jpg";

import bannerHome from "../../assets/business-person-using-laptop-multitasking-finish-daily-startup-tasks.jpg";
import bannerService from "../../assets/web-design-technology-browsing-programming-concept.jpg";
import bannerProjects from "../../assets/ui-ux-representations-with-laptop.jpg";
import bannerTeam from "../../assets/web-design-technology-browsing-programming-concept.jpg";
import bannerContact from "../../assets/contact.jpg";

const mobileMenuVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const navItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, toggleMobileMenu] = useCycle(false, true);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const location = useLocation();

  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
    return () => unsub();
  }, [scrollY]);

  const navItems = [
    {
      id: "/",
      label: "Accueil",
      banner: bannerHome,
      title: "Franchise IT - Experts en Solutions Digitales sur Mesure",
      subtitle:
        "Des services numériques pour les entreprises et les particuliers",
    },
    {
      id: "/service",
      label: "Services",
      banner: bannerService,
      title: "Nos Services IT - Des Solutions Innovantes pour Tous",
      subtitle:
        "Entreprises ou particuliers, boostez votre digital avec nos offres sur mesure",
    },
    // {
    //   id: "/projects",
    //   label: "Projets",
    //   banner: bannerProjects,
    //   title: "Nos Réalisations - Portfolio de Projets IT Exceptionnels",
    //   subtitle: "Des solutions concrètes pour tous types de clients",
    // },
    // {
    //   id: "/team",
    //   label: "Équipe",
    //   banner: bannerTeam,
    //   title: "Notre Équipe - Des Experts Passionnés à Votre Service",
    //   subtitle:
    //     "Une équipe dédiée pour accompagner entreprises et particuliers",
    // },
    {
      id: "/contact",
      label: "Contact",
      banner: bannerContact,
      title: "Contactez-Nous - Parlons de Votre Projet Digital",
      subtitle:
        "Particuliers ou entreprises, nous sommes prêts à vous accompagner",
    },
  ];

  const activePage = navItems.find((item) => item.id === location.pathname) || {
    banner: bannerDefault,
    title: "Franchise IT - Votre Partenaire Technologique de Confiance",
    subtitle: "Des solutions innovantes pour propulser votre entreprise",
  };

  return (
    <header className="relative h-screen overflow-hidden">
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity, scale }}>
        <img
          src={activePage.banner}
          className="w-full h-full object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      </motion.div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-white/90 backdrop-blur-md py-3 shadow-sm"
            : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-3   flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link to="/">
            {
              scrolled ? <img
              src={logo}
              alt="Franchise IT"
              className="h-10 transition-all filter brightness-0"
            /> : <img
            src={logo}
            alt="Franchise IT"
            className="w-40 h-auto filter brightness-0 invert"
          />
            }
              {/* <img
                src={logo}
                alt="Franchise IT"
                className={`h-10 transition-all ${
                  scrolled ? "filter brightness-0" : ""
                }`}
              /> */}
              {/* <img
                src={logo}
                alt="Franchise IT"
                className="w-40 h-auto filter brightness-0 invert"
              /> */}
              {!scrolled && (
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 rounded-full blur-xl bg-indigo-400 opacity-50 -z-10"
                />
              )}
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.id}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${scrolled ? "text-gray-800" : "text-white"
                    } ${location.pathname === item.id
                      ? "text-indigo-500 font-semibold  "
                      : ""
                    }`}
                >
                  {item.label}
                  {location.pathname === item.id && (
                    <motion.span
                      layoutId="activeNavItem"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile button */}
          <motion.button
            className="md:hidden flex flex-col space-y-1.5 z-50 p-2"
            onClick={() => toggleMobileMenu()}
            whileTap={{ scale: 0.9 }}
            aria-label="Menu"
          >
            <motion.span
              animate={
                mobileMenuOpen
                  ? { rotate: 45, y: 7, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              className={`block h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"
                } origin-center`}
            />
            <motion.span
              animate={
                mobileMenuOpen
                  ? { opacity: 0, width: 0 }
                  : { opacity: 1, width: 24 }
              }
              className={`block h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"}`}
            />
            <motion.span
              animate={
                mobileMenuOpen
                  ? { rotate: -45, y: -7, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              className={`block h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"
                } origin-center`}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => toggleMobileMenu()}
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed top-0 right-0 h-full w-80 bg-primary z-40 shadow-2xl"
            >
              <div className="h-full flex flex-col justify-center px-8 py-16 overflow-y-auto">
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={navItemVariants}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-8 last:mb-0"
                  >
                    <Link
                      to={item.id}
                      onClick={() => toggleMobileMenu()}
                      className={`text-3xl font-bold flex items-center ${location.pathname === item.id
                          ? "text-indigo-300 underline underline-offset-4"
                          : "text-white"
                        }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {activePage.title.split(" - ")[0]}
          <br />
          <motion.span
            className="text-indigo-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {activePage.title.split(" - ")[1]}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {activePage.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-indigo-500/50 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200" />
          <Link
            to="/contact"
            className="relative px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium text-lg transition duration-200 group-hover:bg-indigo-700"
          >
            Discutons de votre projet
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white text-3xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
