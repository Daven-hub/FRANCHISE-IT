
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const sections = [
    {
      title: "Services",
      links: [
        { name: "Développement Web", href: "#" },
        { name: "Applications Mobiles", href: "#" },
        { name: "Référencement SEO", href: "#" },
        { name: "Hébergement Web", href: "#" },
        { name: "Caméras de Surveillance", href: "#" },
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#about" },
        { name: "Notre équipe", href: "#" },
        { name: "Carrières", href: "#" },
        { name: "Blog", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Contact", href: "#contact" },
        { name: "Politique de confidentialité", href: "#" },
        { name: "Conditions d'utilisation", href: "#" },
      ]
    }
  ];
  
  const socialMedia = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-6">
      <div className="w-full px-[6%] md:px-[7%]">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          <div className="w-full md:w-[32%]">
            <a href="#" className="text-2xl text-start font-bold font-montserrat mb-2 flex">
              <img src="/logo.png" className="w-[70%]" alt="" />
            </a>
            <p className="text-white/70 mb-6 w-full">
            Chez Franchise IT, notre équipe d’experts se consacre à fournir des solutions innovantes de haute qualité pour aider vos clients à atteindre leurs objectifs commerciaux dans l’espace numérique.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[67%] grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-3">
            {sections.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold font-title text-lg mb-4">{section.title}</h4>
                <ul className="">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="border-b last-of-type:border-b-0 py-2.5 border-primary/30 border-dashed">
                      <a 
                        href={link.href} 
                        className="text-white/70 w-full hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-xs md:text-sm">
              © {currentYear} Franchise IT. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-white/70 text-xs md:text-sm hover:text-white transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition-colors">
                    Conditions d'utilisation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
