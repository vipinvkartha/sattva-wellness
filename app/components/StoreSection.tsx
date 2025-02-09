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
    <section id="store" className="py-24 relative overflow-hidden">
      {/* Unique background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-emerald-950 to-teal-950 opacity-95"></div>
      <div className="absolute inset-0 bg-[url('/pattern.png')] mix-blend-overlay opacity-5"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400/80 text-sm font-medium tracking-wider uppercase">Discover Our Collection</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 mt-2">
            Vibha Store
            <span className="block text-lg font-normal text-teal-200/90 mt-2">
              Sacred Treasures for Your Spiritual Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400/80 to-teal-400/80 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.title}
              onClick={() => handleCategoryClick(category.link)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer
                transform hover:scale-105 transition-all duration-500
                border border-amber-400/10 hover:border-amber-400/20"
            >
              {/* Card Background with Glassmorphism */}
              <div className="absolute inset-0 bg-teal-900/30 backdrop-blur-sm rounded-2xl"></div>
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-semibold text-amber-300 mb-2">
                  {category.title}
                </h3>
                <p className="text-teal-200/90 text-sm">
                  {category.description}
                </p>
                
                {/* Hover Effect Button */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 
                  transition-all duration-300">
                  <span className="inline-flex items-center text-sm font-medium text-amber-300">
                    Explore Collection
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="https://vibha.store.link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-teal-950
              bg-gradient-to-r from-amber-400 to-amber-300 
              hover:from-amber-300 hover:to-amber-200
              rounded-full shadow-lg hover:shadow-2xl
              transform hover:scale-105 transition-all duration-300
              border border-amber-300/30"
          >
            Visit Our Store
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
