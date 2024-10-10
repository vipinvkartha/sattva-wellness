import { useEffect } from 'react';

function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return null;
}

export default SmoothScroll;