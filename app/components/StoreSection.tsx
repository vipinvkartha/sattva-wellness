import Image from 'next/image';

export default function StoreSection() {
  const categories = [
    {
      title: "Healing Bracelets",
      description: "Rudraksha & Crystal energy companions",
      image: "/store/healing-bracelets.jpg",
      alt: "Collection of healing bracelets",
      link: "https://vibha.store.link/category/hand-chain"
    },
    {
      title: "Sacred Chains",
      description: "Spiritual & healing necklaces",
      image: "/store/sacred-chains.jpg",
      alt: "Beautiful sacred chains collection",
      link: "https://vibha.store.link/category/chain"
    },
    {
      title: "Special Combos",
      description: "Enhanced spiritual practice sets",
      image: "/store/special-combos.jpg",
      alt: "Special wellness product combinations",
      link: "https://vibha.store.link/category/combos"
    }
  ];

  const handleCategoryClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="store" className="py-16 bg-gradient-to-br from-teal-50 to-white dark:from-teal-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="relative text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl
            group cursor-default flex flex-col items-center"
          >
            <a 
              href="https://vibha.store.link"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block hover:opacity-80 transition-opacity duration-300"
            >
              <span className="relative inline-block">
                Our Store - Vibha
                <span className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-teal-400/20 to-transparent
                  opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_ease-in-out_infinite]
                  -z-10"
                ></span>
              </span>
            </a>
            <span className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-2
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            ></span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 font-light">
            Sacred jewelry and spiritual accessories for your mindful journey
          </p>
          
          <div className="mt-8 relative overflow-hidden group/box">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 
              rounded-2xl opacity-30 group-hover/box:opacity-50 blur-sm
              animate-[spin_4s_linear_infinite] transition-opacity duration-500"
            ></div>

            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-10 
              animate-[pulse_3s_ease-in-out_infinite]"
            ></div>
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 
              bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-20 blur-2xl
              animate-[float_6s_ease-in-out_infinite]"
            ></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 
              bg-gradient-to-tr from-teal-400 to-emerald-500 rounded-full opacity-20 blur-2xl
              animate-[float_8s_ease-in-out_infinite_reverse]"
            ></div>
            
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 
              border border-teal-200 dark:border-teal-800 shadow-xl
              hover:shadow-2xl hover:border-teal-300 dark:hover:border-teal-700
              transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group/title">
                <span className="inline-block animate-[bounce_2s_ease-in-out_infinite]">🌟</span>
                <span className="relative">
                  Exclusive Collection
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500
                    scale-x-0 group-hover/title:scale-x-100 transition-transform duration-300"
                  ></span>
                </span>
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Transform your spiritual journey with our handpicked selection of sacred jewelry and wellness accessories
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <div 
                    key={category.title}
                    onClick={() => handleCategoryClick(category.link)}
                    className="group p-4 bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-md
                      transform hover:scale-105 hover:shadow-xl hover:-translate-y-2
                      transition-all duration-300 ease-out cursor-pointer"
                  >
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden
                      shadow-md group-hover:shadow-xl transition-shadow duration-300"
                    >
                      <Image
                        src={category.image}
                        alt={category.alt}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-all duration-500
                          group-hover:brightness-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        flex items-end justify-center pb-4"
                      >
                        <span className="text-white text-sm font-medium px-3 py-1 bg-black/30 rounded-full
                          transform translate-y-full group-hover:translate-y-0 transition-transform duration-300
                          backdrop-blur-sm"
                        >
                          View Collection →
                        </span>
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000
                          bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        ></div>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-teal-700 dark:text-teal-400 relative
                      transform group-hover:-translate-y-1 transition-transform duration-300"
                    >
                      {category.title}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500
                        scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      ></span>
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2
                      transform group-hover:-translate-y-1 transition-transform duration-300"
                    >
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center space-y-4">
                <button
                  onClick={() => window.open('https://vibha.store.link/', '_blank')}
                  className="relative mt-4 px-6 py-3 text-base font-medium text-white overflow-hidden
                    bg-gradient-to-r from-teal-600 to-emerald-600 
                    rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl 
                    transform hover:-translate-y-1 hover:scale-105 group/button"
                >
                  <span className="relative z-10">Visit Our Store →</span>
                  <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all
                    bg-white/30 group-hover/button:translate-x-[50%] duration-700"
                  ></div>
                </button>

                <a
                  href="https://www.instagram.com/sattva_wellness_?igsh=eXplaW01M3VxaXpn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 mt-6 text-gray-600 hover:text-gray-900 
                    dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-300"
                >
                  <svg
                    className="h-6 w-6 transition-transform group-hover:scale-110"
                    viewBox="0 0 24 24"
                    style={{
                      fill: "url(#instagram-gradient-store)"
                    }}
                  >
                    <defs>
                      <linearGradient id="instagram-gradient-store" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#ffdc80' }} />
                        <stop offset="25%" style={{ stopColor: '#fcaf45' }} />
                        <stop offset="50%" style={{ stopColor: '#f77737' }} />
                        <stop offset="75%" style={{ stopColor: '#f56040' }} />
                        <stop offset="100%" style={{ stopColor: '#fd1d1d' }} />
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-sm font-medium">Follow for more product updates</span>
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
