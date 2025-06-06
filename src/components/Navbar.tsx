
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, NavLink } from 'react-router-dom';
import DevisModal from './Devis/DevisModal';
import Devis from '@/pages/Devis';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('accueil');
  const [showDevis, setShowDevis] = useState(false);

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
    { name: 'Projets', href: 'projects', id: 'projects' },
    { name: 'Equipe', href: 'equipes', id: 'team' },
    { name: 'Contact', href: 'contact', id: 'contact' }
  ];

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 left-0 right-0 z-[50] transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-white/100'
        )}
      >
        <div className="w-full">
          <div className="flex justify-between">
            <div className='flex pl-1 md:pl-[6%]  items-center gap-14'>
              <div className='flex items-center gap-1'>
                <div className="md:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                    className="text-white hover:bg-white/10"
                  >
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                  </Button>
                </div>

                <a href="#" className="text-xl md:text-2xl font-bold flex gap-1 font-montserrat text-white">
                  <img src="/logo.png" className='w-[160px] max-md:w-[120px]' alt="logo_franchise_it" />
                </a>
              </div>
              <div className='hidden md:flex items-center space-x-5'>
                {navItems.map((item) => (
                  item.href !== "equipes" && item.href !== "/" ?
                    <NavLink
                      key={item.name}
                      // onClick={() => document.getElementById(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                      to={"/#" + item.href}
                      className={cn(
                        "text-white/90 cursor-pointer font-normal hover:text-white/30 text-[15px] transition-all duration-300 Capitalize tracking-wider",
                        activeLink === item.id && "text-white active"
                      )}
                    >
                      {item.name}
                    </NavLink> :
                    <NavLink
                      key={item.name}
                      to={item.href}
                      // href={item.href}
                      className={cn(
                        "text-white/90 cursor-pointer font-normal hover:text-white/30 text-[15px] transition-all duration-300 Capitalize tracking-wider",
                        activeLink === item.id && "text-white active"
                      )}
                    >
                      {item.name}
                    </NavLink>
                ))}
              </div>
            </div>
            {/* Desktop menu */}
            <div className="flex items-center space-x-8">
              <NavLink
                to='#'
                className={cn(
                  "text-white/80 hidden font-medium hover:text-white text-[15px] Capitalize tracking-wider"
                )}
              >
                Se connecter
              </NavLink>
              <span onClick={() => setShowDevis(true)} className="bg-white font-title w-fit px-3 md:px-9 text-black py-[1.5rem] flex items-center justify-center max-md:py-5 h-full font-semibold hover:bg-white/90 !rounded-0 text-xs md:text-sm" style={{ borderRadius: 0 }}>
                Demander un devis
              </span>
            </div>
          </div>

          {/* Mobile menu panel */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-b border-white/10 py-4 px-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    // href={item.href}
                    className={cn(
                      "text-white cursor-pointer font-medium hover:text-white/70 transition-colors",
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
                ))}
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
