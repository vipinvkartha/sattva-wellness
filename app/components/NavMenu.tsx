"use client";
import { useState, useEffect } from 'react';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'What We Offer', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function NavMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = menuItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
        : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors
                ${activeSection === item.href.substring(1)
                  ? 'text-teal-600 dark:text-teal-400 font-semibold'
                  : 'text-gray-800 hover:text-teal-600 dark:text-gray-100 dark:hover:text-teal-400'
                }
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center
                after:scale-x-0 after:bg-teal-600 dark:after:bg-teal-400 after:transition-transform
                after:duration-300 hover:after:scale-x-100
                ${activeSection === item.href.substring(1) ? 'after:scale-x-100' : ''}
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
} 