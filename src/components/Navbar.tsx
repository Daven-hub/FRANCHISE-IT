
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import DevisModal from './Devis/DevisModal';
import Devis from '@/pages/Devis';
import { useTheme } from '@/context/ThemeContext';
import Marquee from 'react-fast-marquee';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('accueil');
  const [showDevis, setShowDevis] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/', id: 'hero' },
    { name: 'A propos', href: 'a-propos', id: 'a-propos' },
    { name: 'Services', href: 'services', id: 'services' },
    { name: 'Projets', href: '/projects', id: 'projects' },
    { name: 'Formations', href: '/formations', id: 'formations' },
    { name: 'Equipe', href: '/equipes', id: 'team' },
    { name: 'Stages', href: 'stages', id: 'stages' },
    { name: 'Contact', href: 'contact', id: 'contact' }
  ];

  const linked = [
    '/', '/equipes', '/projects', '/formations'
  ]

  const annonceData = [
    {
      title: "Annonces",
      description: "Franchise IT lance les formations professionnelles à partir de 6 Mai"
    },
    {
      title: "Exclusivité",
      description: "Une reduction de 30% est offerte aux 10 premiers inscrits pour l'une de nos formations"
    }
  ]

  return (
    <>
      <div className='py-0 border-b border-black bg-white dark:border-white'>
        <Marquee direction="left" speed={15} pauseOnHover autoFill gradientWidth={0} gradient={false}>
          <div className="flex items-center gap-5">
            {annonceData.map((x, index) =>
              <div key={index} className="flex gap-2 text-sm last-of-type:mr-5 text-tech-dark justify-center items-center">
                <mark className='bg-accent font-semibold text-white px-4 py-1'>{x.title}</mark> {x.description}
              </div>
            )}
          </div>
        </Marquee>
      </div>
      <nav
        className={cn(
          'sticky w-full top-0 left-0 right-0 z-[50] bg-background transition-all duration-300 backdrop-blur-md border-b border-black dark:border-white'
        )}
      >
        <div className="w-full">
          <div className="flex justify-between">
            <div className='flex pl-4 md:pl-[5%] items-center gap-20'>
              <div className='flex items-center gap-2'>
                <div className="md:hidden">
                  <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                    className="text-tech-dark dark:text-white hover:bg-white/10"
                  >
                    {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
                  </div>
                </div>

                <a href="/" className="text-xl md:text-2xl font-bold flex gap-1 font-montserrat text-white">
                  <img src={theme === 'dark' ? "/logo.png" : "/dark_logo.png"} className='w-[160px] max-md:w-[130px]' alt="logo_franchise_it" />
                </a>
              </div>
              <div className='hidden md:flex items-center space-x-2'>
                {navItems.map((item) => (
                  !linked?.includes(item.href) ?
                    <NavLink
                      key={item.name}
                      onClick={() => document.getElementById(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                      to={"/#" + item.href}
                      className={cn(
                        "text-black/90 dark:text-white/90 cursor-pointer py-5 md:px-2.5 font-normal hover:text-black/50 dark:hover:text-white/30 text-[15px] transition-all duration-300 Capitalize tracking-wider",
                        activeLink === item.id && "text-black dark:text-white active"
                      )}
                    >
                      {item.name}
                    </NavLink> :
                    <NavLink
                      key={item.name}
                      to={item.href}
                      // href={item.href}
                      className={cn(
                        "text-black/90 dark:text-white/90 cursor-pointer py-5 md:px-2.5 font-normal hover:text-black/50 dark:hover:text-white/30 text-[15px] transition-all duration-300 Capitalize tracking-wider",
                        activeLink === item.id && "text-black dark:text-white active"
                      )}
                    >
                      {item.name}
                    </NavLink>
                ))}
              </div>
            </div>
            {/* Desktop menu */}
            <div className="flex items-center space-x-8">
              <button onClick={() => setShowDevis(true)} className="bg-tech-dark dark:bg-white font-title w-fit px-3 md:px-8 text-white dark:text-black py-5 flex items-center justify-center max-md:py-5 h-full font-semibold transition-all duration-300 hover:bg-black/60 dark:hover:bg-white/90 !rounded-0 text-[.65rem] md:text-sm" style={{ borderRadius: 0 }}>
                Demander un devis
              </button>
            </div>
          </div>

          {/* Mobile menu panel */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full h-[calc(100vh-55.61px)] left-0 right-0 bg-background border-t border-b border-black dark:border-white pb-4 px-4 animate-fade-in">
              <div className="flex flex-col">
                {navItems.map((item) =>
                  linked?.includes(item.href.toLowerCase()) ? <NavLink
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "text-black dark:text-white py-4 border-b border-dashed border-black/30 dark:border-white/30 cursor-pointer font-medium hover:text-black/70 dark:hover:text-white/70 transition-colors",
                      activeLink === item.id && "text-accent"
                    )}
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </NavLink> :
                    <div
                      key={item.name}
                      // href={item.href}
                      className={cn(
                        "text-black dark:text-white py-4 border-dashed border-b border-black/30 dark:border-white/30 cursor-pointer font-medium hover:text-black/70 dark:hover:text-white/70 transition-colors",
                        activeLink === item.id && "text-accent"
                      )}
                      onClick={() => {
                        const element = document.getElementById(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </div>

                )}
                {/* <Button className="bg-white text-black hover:bg-white/90 w-full">
                Demander un devis
              </Button> */}
              </div>
            </div>
          )}
        </div>
      </nav>
      <DevisModal isOpen={showDevis} onClose={() => setShowDevis(false)}>
        <Devis onClose={() => setShowDevis(false)} />
      </DevisModal>
    </>
  );
};

export default Navbar;
