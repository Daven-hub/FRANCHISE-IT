import React from "react";
import "animate.css";
import image from "../../assets/business-person-using-laptop-multitasking-finish-daily-startup-tasks.jpg";

const FormulaireContact = () => {
  return (
    <section className="pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Formulaire + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Formulaire - côté gauche */}
          <div className="animate__animated animate__fadeInLeft animate__fast">
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-primary mb-6">
              Contactez-nous
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discutons de vos projets. Nous sommes prêts à vous accompagner vers
              le succès!
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate__animated animate__fadeInUp animate__fast">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom complet"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition duration-200"
                  />
                </div>
                <div className="animate__animated animate__fadeInUp animate__fast animate__delay-1s">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="exemple@mail.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition duration-200"
                  />
                </div>
              </div>

              <div className="animate__animated animate__fadeInUp animate__fast animate__delay-2s">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Sujet de votre message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition duration-200"
                />
              </div>

              <div className="animate__animated animate__fadeInUp animate__fast animate__delay-3s">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows="5"
                  required
                  placeholder="Décrivez votre projet en détail..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition duration-200"
                ></textarea>
              </div>

              <div className="animate__animated animate__fadeInUp animate__fast animate__delay-4s">
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 shadow-md hover:animate__animated hover:animate__pulse"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>

          {/* Image - côté droit */}
          <div className="hidden lg:flex items-center justify-center animate__animated animate__fadeInRight animate__fast">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl hover:animate__animated hover:animate__pulse">
              <img
                src={image}
                alt="Équipe disponible pour vos projets"
                className="w-full h-full object-cover min-h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/40"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white animate__animated animate__fadeInUp animate__slow animate__delay-1s">
                <h3 className="text-3xl font-bold mb-3">Prêts à collaborer</h3>
                <p className="text-lg opacity-90">
                  Notre équipe est disponible pour répondre à toutes vos questions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Localisation */}
        <div className="overflow-hidden">
          <div className="text-center py-5 animate__animated animate__fadeIn">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-transparent bg-clip-text bg-primary mb-4 md:mb-6">
              Notre Localisation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
              Venez nous rencontrer à notre siège social
            </p>
          </div>

          <div className="flex flex-col lg:flex-row animate__animated animate__fadeInUp animate__fast">
            {/* Carte Google Maps */}
            <div className="w-full lg:w-2/3 h-96 lg:h-auto animate__animated animate__fadeInLeft animate__fast">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127364.0119644699!2d9.7265052!3d3.9946335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d200f44d801%3A0x25997d06703d165c!2sFRANCHISE%20IT!5e0!3m2!1sfr!2scm!4v1744818226957!5m2!1sfr!2scm"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[400px]"
                title="Localisation FRANCHISE IT"
              ></iframe>
            </div>

            {/* Informations de contact */}
            <div className="w-full lg:w-1/3 bg-gray-50 p-8 flex flex-col justify-center animate__animated animate__fadeInRight animate__fast">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4 animate__animated animate__fadeIn animate__delay-1s">
                  FRANCHISE IT
                </h3>
                <div className="space-y-3">
                  <p className="flex items-start text-gray-600 animate__animated animate__fadeIn animate__delay-1s">
                    <svg className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Rue 1.234, Quartier des Affaires<br />
                    Yaoundé, Cameroun
                  </p>
                  <p className="flex items-center text-gray-600 animate__animated animate__fadeIn animate__delay-2s">
                    <svg className="h-5 w-5 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +237 6XX XXX XXX
                  </p>
                  <p className="flex items-center text-gray-600 animate__animated animate__fadeIn animate__delay-3s">
                    <svg className="h-5 w-5 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@franchiseit.cm
                  </p>
                </div>
              </div>

              <div className="animate__animated animate__fadeIn animate__delay-4s">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Heures d'ouverture</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between animate__animated animate__fadeIn animate__delay-4s">
                    <span>Lundi - Vendredi</span>
                    <span>08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between animate__animated animate__fadeIn animate__delay-5s">
                    <span>Samedi</span>
                    <span>09:00 - 13:00</span>
                  </li>
                  <li className="flex justify-between animate__animated animate__fadeIn animate__delay-6s">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormulaireContact;