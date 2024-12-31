"use client";
import { useEffect } from 'react';

interface ImageModalProps {
  image: {
    url: string;
    title: string;
    description: string;
  };
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export function ImageModal({ 
  image, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious, 
  hasNext, 
  hasPrevious 
}: ImageModalProps) {
  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight' && hasNext) {
        onNext();
      } else if (event.key === 'ArrowLeft' && hasPrevious) {
        onPrevious();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyboard);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrevious, hasNext, hasPrevious]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/9] group">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-contain"
          />
          
          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            {hasPrevious && (
              <button
                onClick={onPrevious}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {hasNext && (
              <button
                onClick={onNext}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {image.title}
          </h3>
          <p className="mt-1 text-gray-600 dark:text-gray-300">
            {image.description}
          </p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
} 