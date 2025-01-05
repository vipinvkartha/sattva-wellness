'use client';

import { useState } from 'react';

export default function CampaignBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white py-3 px-4 mt-[64px]">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center relative">
        <div className="animate-bounce-gentle">
          <span className="font-semibold">🎉 Hurray! </span>
          <span className="hidden sm:inline">Get 20% off if you join before March 1</span>
          <span className="sm:hidden">20% off until March 1</span>
          <a 
            href="https://forms.zohopublic.eu/sattva/form/SattvaWellnessRegistrationForm/formperma/uESkDIJRLWFDFCpd6VWeBhSa5TEBQEBLsUVnG1JVayI"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 sm:ml-4 inline-block bg-white text-[#14b8a6] px-4 py-1 rounded-full text-sm font-semibold 
            hover:bg-opacity-90 transition-all duration-300"
          >
            Join Now →
          </a>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:opacity-75"
          aria-label="Close banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
} 