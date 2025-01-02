'use client';

export default function FloatingConsultButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <a 
        href="https://forms.zohopublic.eu/sattva/form/SattvaWellnessRegistrationForm/formperma/uESkDIJRLWFDFCpd6VWeBhSa5TEBQEBLsUVnG1JVayI"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white font-semibold px-8 py-4 rounded-full 
        shadow-[0_4px_20px_rgba(20,184,166,0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(20,184,166,0.5)] 
        hover:translate-y-[-2px] flex items-center gap-2 border border-teal-200/20"
      >
        <span className="text-sm md:text-base">Schedule Free Consultation</span>
        <svg 
          className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
} 