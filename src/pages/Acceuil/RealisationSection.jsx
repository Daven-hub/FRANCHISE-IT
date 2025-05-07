import React, { useState, useRef } from "react";
import { projets } from "../../data/RealisationData";
import { motion, AnimatePresence } from "framer-motion";
import "animate.css";

const ITEMS_PER_PAGE = 3;

const RealisationsSection = () => {
  const sectionRef = useRef(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projets.length / ITEMS_PER_PAGE);
  const paginatedProjets = projets.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gray-50"
      id="realisations"
    >
      <div className="relative z-10">
        {/* Titre */}
        <motion.div
          className="text-center mb-16 animate__animated animate__fadeIn"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="inline-block mb-3 text-sm font-semibold text-blue-600 tracking-widest uppercase animate__animated animate__fadeIn animate__delay-1s">
            Notre Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-primary mb-6 animate__animated animate__fadeInUp animate__fast">
            Créations <span className="text-primary">Mémorables</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-primary rounded-full animate__animated animate__zoomIn animate__delay-1s" />
        </motion.div>

        {/* Projets */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-14"
          >
            {paginatedProjets.map((projet, index) => {
              const direction = index % 2 === 0 ? 1 : -1;

              return (
                <motion.div
                  key={projet.id}
                  className="relative group animate__animated animate__fadeIn"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 50,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div
                    className={`absolute -z-10 w-full h-full rounded-xl blur-sm ${
                      projet.type === "Entreprise"
                        ? "bg-blue-100/40"
                        : "bg-green-100/40"
                    } animate__animated animate__pulse animate__infinite animate__slower`}
                    animate={{ rotate: direction * 3 }}
                    transition={{ duration: 1 }}
                  />

                  <div
                    className={`flex flex-col md:flex-row ${
                      index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    } gap-6 items-center`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-[40%] max-w-sm overflow-hidden rounded-xl shadow-md border border-gray-200 relative group-hover:animate__animated group-hover:animate__pulse">
                      <div className="aspect-[3/2]">
                        <img
                          src={projet.image}
                          alt={projet.titre}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="absolute top-3 left-3 bg-black/60 text-white px-2 py-0.5 rounded-full text-xs font-medium animate__animated animate__bounceIn animate__delay-1s">
                        {projet.type}
                      </div>
                    </div>

                    {/* Texte */}
                    <div className="w-full md:w-1/2 animate__animated animate__fadeInRight animate__fast">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {projet.titre}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {projet.description}
                      </p>
                      <a
                        href={projet.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center px-4 py-2 text-sm bg-primary text-white rounded-full transition hover:animate__animated hover:animate__rubberBand"
                      >
                        Voir le projet
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-2 animate__animated animate__fadeInUp animate__delay-1s">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 rounded-full bg-gray-200 text-sm font-medium disabled:opacity-40 hover:bg-gray-300 transition hover:animate__animated hover:animate__shakeX"
            >
              Précédent
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-9 h-9 rounded-full text-sm font-medium ${
                  i + 1 === page
                    ? "bg-blue-600 text-white shadow-md scale-110 animate__animated animate__bounce"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:animate__animated hover:animate__pulse"
                }`}
              >
                {i + 1}
              </motion.button>
            ))}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-full bg-gray-200 text-sm font-medium disabled:opacity-40 hover:bg-gray-300 transition hover:animate__animated hover:animate__shakeX"
            >
              Suivant
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RealisationsSection;