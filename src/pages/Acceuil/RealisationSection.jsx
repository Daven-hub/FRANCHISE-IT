import React, { useState } from "react";
import { projets } from "../../data/RealisationData";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS_PER_PAGE = 4;

const RealisationsSection = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projets.length / ITEMS_PER_PAGE);
  const paginatedProjets = projets.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <section className="pt-8  " id="realisations">
      <div className="container">
        {/* Titre */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* <span className="block mb-2 text-xs sm:text-sm md:text-base uppercase tracking-wider text-primary font-medium">
            Nos Projets
          </span> */}
          <h2 className="text-2xl sm:text-3xl text-center md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-primary mb-4 md:mb-6">
            Découvrez nos <span className="text-primary">réalisations</span>
          </h2>
        </motion.div>

        {/* Liste de projets */}
        <AnimatePresence mode="wait">
          {paginatedProjets.map((projet, index) => (
            <motion.div
              key={projet.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 sm:gap-6 items-center mb-6`}
            >
              {/* Carte image */}
              <div className="w-full md:w-2/5 max-w-md overflow-hidden rounded-lg bg-white/80 border border-white shadow-xs hover:shadow-sm transition-all">
                <div className="w-full h-auto">
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-auto max-h-48 sm:max-h-56 md:max-h-60 object-contain p-1"
                  />
                </div>
                <span className={`inline-block m-2 px-2 py-0.5 text-xs sm:text-sm font-medium rounded-full 
                  ${projet.type === "Entreprise" ? 'bg-indigo-100 text-indigo-800' : 'bg-emerald-100 text-emerald-800'}`}>
                  {projet.type}
                </span>
              </div>

              {/* Contenu texte */}
              <div className="w-full md:w-3/5 p-4 sm:p-5 rounded-lg bg-white/80 border border-white/80 shadow-xs">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">
                  {projet.titre}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed sm:leading-normal">
                  {projet.description}
                </p>
                <a
                  href={projet.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 sm:mt-4 inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  Voir le projet
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg border border-indigo-200 text-indigo-600 disabled:opacity-40 hover:bg-indigo-50 transition-colors"
              >
                Précédent
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-7 h-7 sm:w-9 sm:h-9 text-xs sm:text-sm rounded-lg ${i + 1 === page ? 'bg-primary text-white' : 'text-indigo-600 hover:bg-indigo-50'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg border border-indigo-200 text-indigo-600 disabled:opacity-40 hover:bg-indigo-50 transition-colors"
              >
                Suivant
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RealisationsSection;
