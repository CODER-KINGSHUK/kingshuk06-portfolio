
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={ref}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md py-3" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`signature animate-fadeIn opacity-0 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Kingshuk
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-foreground p-2 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0 translate-y-2'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Skills', 'Achievements', 'Contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nav-link text-foreground hover:text-primary transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Home', 'About', 'Skills', 'Achievements', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link text-foreground hover:text-primary py-2 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
