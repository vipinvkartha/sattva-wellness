import { quotes } from './data/quotes';
import { useState, useEffect } from 'react';

const QuoteDisplay = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getRandomQuote = (currentQuote: any) => {
    let randomQuote;
    do {
      randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (randomQuote === currentQuote);
    return randomQuote;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentQuote(getRandomQuote(currentQuote));
        setIsTransitioning(false);
      }, 500);

    }, 5000);

    return () => clearInterval(interval);
  }, [currentQuote]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg 
        max-w-2xl mx-auto border border-teal-100/50 dark:border-teal-500/20
        overflow-hidden">
        <div className={`transition-all duration-1000 ease-in-out transform
          ${isTransitioning ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
          <blockquote className="text-lg md:text-xl font-serif leading-relaxed">
            <span className="font-serif italic text-teal-800 dark:text-teal-200" 
              style={{ fontStyle: 'italic' }}>
              {currentQuote.text}
            </span>
          </blockquote>
          <p className="text-right text-base text-teal-600 dark:text-teal-400 font-medium mt-6">
            — {currentQuote.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteDisplay;
