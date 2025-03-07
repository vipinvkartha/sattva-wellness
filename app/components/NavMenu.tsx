"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/', isSection: false },
  { label: 'What We Offer', href: '#features', isSection: true },
  { 
    label: (
      <div className="relative">
        <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs px-2 py-0.5 
          bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full text-white font-medium 
          whitespace-nowrap shadow-sm animate-pulse"
        >
          from ₹999
        </span>
        <span>Our Packages</span>
      </div>
    ), 
    href: '#pricing', 
    isSection: true 
  },
  { label: 'Gallery', href: '#gallery', isSection: true },
  { label: 'Testimonials', href: '#testimonials', isSection: true },
  { 
    label: (
      <span className="flex items-center gap-1">
        Store
        <span className="text-amber-400">✨</span>
      </span>
    ), 
    href: '#store', 
    isSection: true,
    isStore: true,
    className: `bg-gradient-to-r from-teal-950 to-emerald-950 text-amber-300 hover:text-amber-200 
      border border-amber-400/20 hover:border-amber-400/40 shadow-lg hover:shadow-amber-400/5
      px-4 -mx-1 rounded-lg transition-all duration-300`
  },
  { label: 'Contact', href: '#contact', isSection: true },
];

function NavMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (pathname === '/') {
        const sections = menuItems
          .filter(item => item.isSection)
          .map(item => item.href.substring(1));

        type Section = {
          id: string;
          top: number;
          bottom: number;
          height: number;
        };

        // Find all visible sections
        const visibleSections = sections
          .map(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return {
                id: section,
                top: rect.top,
                bottom: rect.bottom,
                height: rect.height
              };
            }
            return null;
          })
          .filter((section): section is Section => section !== null);

        // Find the most visible section
        const mostVisible = visibleSections.reduce<Section | null>((prev, current) => {
          const viewportHeight = window.innerHeight;
          const currentVisibleHeight = Math.min(current.bottom, viewportHeight) - 
            Math.max(current.top, 0);
          const prevVisibleHeight = prev ? 
            Math.min(prev.bottom, viewportHeight) - Math.max(prev.top, 0) : 0;

          return currentVisibleHeight > prevVisibleHeight ? current : prev;
        }, visibleSections[0] || null);

        if (mostVisible) {
          setActiveSection(mostVisible.id);
        } else if (window.scrollY < 100) {
          setActiveSection('home');
        }
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, pathname]);

  const handleNavigation = (item: typeof menuItems[0]) => {
    if (pathname !== '/' && !item.isSection) {
      router.push(item.href);
    } else if (pathname !== '/' && item.isSection) {
      router.push(`/${item.href}`);
    } else if (item.isSection) {
      const element = document.getElementById(item.href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(item.href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-[36px] md:top-[36px] left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-soft-lg' 
          : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link 
              href="/"
              className="hover:opacity-80 transition-opacity hover:scale-105 transition-transform duration-300"
            >
              <Logo />
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="lg:hidden">
                <a
                  href="https://forms.zohopublic.eu/sattva/form/SattvaWellnessRegistrationForm/formperma/uESkDIJRLWFDFCpd6VWeBhSa5TEBQEBLsUVnG1JVayI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white 
                    bg-teal-500 hover:bg-teal-600 rounded-full transition-colors duration-200"
                >
                  Register
                </a>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            <div className="hidden lg:flex items-center justify-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300
                    ${item.className || ''}
                    ${item.isStore ? `
                      bg-gradient-to-r from-teal-950 to-emerald-950 
                      text-amber-300 hover:text-amber-200
                      border border-amber-400/20 hover:border-amber-400/40
                      shadow-lg hover:shadow-amber-400/5
                      px-4 -mx-1 rounded-lg
                    ` : `
                      text-gray-800 hover:text-teal-600 dark:text-gray-100 dark:hover:text-teal-400
                      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full 
                      after:origin-center after:scale-x-0 after:bg-teal-600 
                      dark:after:bg-teal-400 after:transition-transform
                      after:duration-300 hover:after:scale-x-100
                      ${activeSection === item.href.substring(1) && item.isSection && pathname === '/' ? 'after:scale-x-100' : ''}
                    `}
                  `}
                >
                  {item.label}
                </button>
              ))}

              <a
                href="https://forms.zohopublic.eu/sattva/form/SattvaWellnessRegistrationForm/formperma/uESkDIJRLWFDFCpd6VWeBhSa5TEBQEBLsUVnG1JVayI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white 
                  bg-teal-500 hover:bg-teal-600 rounded-full transition-colors duration-200"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[99] bg-white dark:bg-gray-900 pt-16">
          <div className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item)}
                className={`block w-full px-4 py-3 text-left text-base font-medium rounded-md transition-all duration-300
                  ${item.isStore ? `
                    bg-gradient-to-r from-teal-500 to-emerald-500 
                    text-white shadow-[0_4px_0_0_#0d9488] 
                    hover:shadow-[0_2px_0_0_#0d9488] hover:translate-y-0.5
                    active:shadow-none active:translate-y-1
                  ` : `
                    ${activeSection === item.href.substring(1) && item.isSection && pathname === '/'
                      ? 'bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 font-semibold'
                      : 'text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }
                  `}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default NavMenu; 
