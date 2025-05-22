
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Lookbook', path: '/lookbook' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];
  
  const navbarClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}
  `;
  
  return (
    <header className={navbarClasses}>
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="z-50">
          <h1 className="text-xl md:text-2xl font-bold tracking-widest">
            <span className="text-gold">FG</span>
            <span>-CLOTHINGS</span>
          </h1>
        </NavLink>
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={toggleMenu} 
            className="z-50 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        )}
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        )}
        
        {/* Mobile Navigation Menu */}
        {/* {isMobile && (
          <div 
            className={`
              fixed inset-0 bg-black/95 flex flex-col items-center justify-center space-y-8
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  isActive ? "nav-item active text-lg" : "nav-item text-lg"
                }
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        )} */}

        {isMobile && (
  <div
    className={`
      fixed top-0 left-0 w-full bg-black/95 z-50
      flex flex-col items-start space-y-4 px-6 py-6
      transform transition-all duration-500 ease-in-out
      ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
    `}
    style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
  >
    {/* Close Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="self-end text-white text-2xl mb-2"
      aria-label="Close menu"
    >
      &times;
    </button>

    {/* Navigation Links */}
    <nav className="flex flex-col w-full space-y-4">
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive ? "nav-item active text-lg text-white" : "nav-item text-lg text-white"
          }
          onClick={() => setIsOpen(false)}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  </div>
)}

      </div>
    </header>
  );
};

export default Navbar;
