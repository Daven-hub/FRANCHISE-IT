import { motion } from 'framer-motion';
import logo from '../../assets/franchise_it.png';

export default function Footer() {
  const socialLinks = [
    { icon: 'fab fa-facebook-f', label: 'Facebook', url: '#' },
    { icon: 'fab fa-twitter', label: 'Twitter', url: '#' },
    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', url: '#' },
    { icon: 'fab fa-instagram', label: 'Instagram', url: '#' },
    { icon: 'fab fa-youtube', label: 'YouTube', url: '#' }
  ];

  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "Développement Web", url: "#" },
        { name: "Applications Mobiles", url: "#" },
        { name: "UI/UX Design", url: "#" },
        { name: "Stratégie Digitale", url: "#" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", url: "#" },
        { name: "Équipe", url: "#" },
        { name: "Carrières", url: "#" },
        { name: "Blog", url: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact", url: "#" },
        { name: "FAQ", url: "#" },
        { name: "Mentions légales", url: "#" },
        { name: "Politique de confidentialité", url: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo et description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img 
              src={logo} 
              alt="Franchise IT" 
              className="w-40 h-auto filter brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Franchise IT transforme vos idées en solutions digitales innovantes. 
              Nous accompagnons entreprises et particuliers dans leur transformation numérique.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-indigo-400 text-lg transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={social.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Liens du footer */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.url}
                      className="text-gray-400 hover:text-indigo-400 text-sm transition-colors flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">•</span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white tracking-wider">Contactez-nous</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-indigo-400" />
                <span>123 Avenue des Technologies<br />Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-indigo-400" />
                <span>+237 6 90 00 00 00</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-indigo-400" />
                <span>contact@franchiseit.com</span>
              </li>
            </ul>

            {/* <div className="pt-4">
              <h4 className="text-sm font-medium text-white mb-3">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="px-4 py-2 text-sm text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                />
                <motion.button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  OK
                </motion.button>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Franchise IT. Tous droits réservés.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}