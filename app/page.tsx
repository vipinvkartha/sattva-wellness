"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Leaf, PersonStanding, Sun, TentTree, Wind } from "lucide-react";
import { ReactNode, useState } from "react";
import { ImageModal } from './components/ImageModal';
import NavMenu from './components/NavMenu';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group relative flex flex-col items-center p-6 text-center transition-all duration-500 
      hover:shadow-[0_0_40px_8px_rgba(20,184,166,0.1)] dark:hover:shadow-[0_0_40px_8px_rgba(20,184,166,0.05)]
      hover:scale-105 hover:bg-white/90 dark:hover:bg-teal-950/90 backdrop-blur-sm
      before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-transparent 
      before:via-teal-500/5 before:to-transparent before:opacity-0 before:transition-opacity
      hover:before:opacity-100">
      <div className="relative rounded-full bg-gradient-to-br from-teal-50 to-white dark:from-teal-900 dark:to-teal-800 
        p-4 shadow-inner transition-all duration-500 group-hover:shadow-lg group-hover:scale-110 
        group-hover:rotate-[360deg]">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-teal-900 dark:text-teal-100 transition-colors
        group-hover:text-teal-800 dark:group-hover:text-white">
        {title}
      </h3>
      <p className="mt-2 text-teal-700 dark:text-teal-300 transition-colors
        group-hover:text-teal-600 dark:group-hover:text-teal-200">
        {description}
      </p>
    </Card>
  );
}

const testimonials = [
  {
    text: "The yoga classes at Sattva Wellness have completely transformed my approach to mindfulness. The instructors are incredibly knowledgeable and create a welcoming environment for all skill levels.",
    name: "Priya Sharma",
    designation: "Software Engineer at TCS",
    location: "Kochi, Kerala",
    image: "/testimonials/priya.jpg"
  },
  {
    text: "I've attended several wellness camps, and each experience has been life-changing. The combination of meditation, yoga, and holistic health practices has helped me find balance in my busy life.",
    name: "Rahul Menon",
    designation: "Corporate Lawyer",
    location: "Trivandrum",
    image: "/testimonials/rahul.jpg"
  },
  {
    text: "The meditation sessions have helped me manage stress and find inner peace. The instructors guide you with patience and understanding, making it perfect for beginners like me.",
    name: "Anjali Nair",
    designation: "Healthcare Professional",
    location: "Calicut",
    image: "/testimonials/anjali.jpg"
  }
];

const galleryImages = [
  {
    url: "/gallery/camp1.jpg",
    title: "Morning Yoga Session",
    description: "Sunrise yoga at our beachside retreat"
  },
  {
    url: "/gallery/camp2.jpg",
    title: "Meditation Workshop",
    description: "Group meditation in our peaceful garden"
  },
  {
    url: "/gallery/camp3.jpg",
    title: "Wellness Activities",
    description: "Mindful movement and breathing exercises"
  },
  {
    url: "/gallery/camp4.jpg",
    title: "Nature Connection",
    description: "Forest meditation and nature walks"
  },
  {
    url: "/gallery/camp5.jpg",
    title: "Group Sessions",
    description: "Community healing and sharing circles"
  },
  {
    url: "/gallery/camp6.jpg",
    title: "Ayurvedic Cooking",
    description: "Learning traditional wellness recipes"
  }
];

export default function Home() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < galleryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-50 via-emerald-50/50 to-teal-50 dark:from-teal-950 dark:via-emerald-950/50 dark:to-teal-950">
      <NavMenu />
      
      {/* Hero Section */}
      <section id="home" className="relative px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-40 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-100/20 via-transparent to-transparent dark:from-teal-800/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-100/30 to-transparent 
          animate-[shine_3s_ease-in-out_infinite] dark:via-teal-800/10"></div>
        
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-700 
              dark:from-teal-300 dark:via-emerald-200 dark:to-teal-300 bg-clip-text text-transparent 
              animate-title-slide-up opacity-0">
              Sattva
              <span className="block mt-1">Wellness</span>
            </span>
          </h1>
          <h2 className="mt-4 text-2xl font-medium sm:text-3xl
            bg-clip-text text-transparent bg-gradient-to-r 
            from-teal-800 via-emerald-700 to-teal-800
            dark:from-teal-200 dark:via-emerald-100 dark:to-teal-200
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]
            dark:drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]
            animate-fade-in"
          >
            Transform Your Life with Mindful Wellness
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-teal-700/90 dark:text-teal-300/90
            drop-shadow-sm">
            Discover a holistic approach to health and wellness. Our program combines mindfulness, 
            nutrition, and movement to help you achieve lasting balance and vitality.
          </p>
        </div>
      </section>

      {/* Store Link - Add hover effect */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <a 
            href="https://sattvawellness.store.link/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center px-6 py-3 text-lg font-medium relative
              text-white bg-gradient-to-r from-teal-500 to-emerald-500
              hover:from-teal-400 hover:to-emerald-400
              rounded-full shadow-lg hover:shadow-xl
              transition-all duration-300 hover:scale-105
              border border-teal-400/20 hover:border-teal-300/30"
          >
            Visit our store
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Features Section - Add card hover effects */}
      <section id="features" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-teal-900 dark:text-teal-100 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Holistic Health"
              description="Comprehensive approach to physical, mental, and emotional well-being"
            />
            <FeatureCard
              icon={<PersonStanding className="h-10 w-10 text-primary" />}
              title="Yoga Classes"
              description="Expert-led sessions combining physical postures, breathing techniques, and relaxation"
            />
            <FeatureCard
              icon={<Sun className="h-10 w-10 text-primary" />}
              title="Meditation Sessions"
              description="Guided practices to cultivate mindfulness and inner calm in daily life"
            />
            <FeatureCard
              icon={<TentTree className="h-10 w-10 text-primary" />}
              title="Wellness Camps"
              description="Immersive retreats focused on rejuvenation and holistic transformation"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gradient-to-b from-transparent via-teal-50/50 to-transparent dark:via-teal-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-teal-900 dark:text-teal-100 mb-4">
            Moments from Our Wellness Camps
          </h2>
          <p className="text-center text-teal-600 dark:text-teal-400 mb-12 max-w-2xl mx-auto">
            Experience the transformative journey through our lens
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImageIndex !== null && (
            <ImageModal
              image={galleryImages[selectedImageIndex]}
              isOpen={selectedImageIndex !== null}
              onClose={() => setSelectedImageIndex(null)}
              onNext={handleNextImage}
              onPrevious={handlePreviousImage}
              hasNext={selectedImageIndex < galleryImages.length - 1}
              hasPrevious={selectedImageIndex > 0}
            />
          )}

          {/* View More Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => window.open('https://www.instagram.com/sattva_wellness_?igsh=eXplaW01M3VxaXpn', '_blank')}
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white 
                bg-gradient-to-r from-teal-500 to-emerald-500 
                hover:from-teal-400 hover:to-emerald-400
                rounded-full shadow-lg hover:shadow-xl
                transition-all duration-300 hover:scale-105
                border border-teal-400/20 hover:border-teal-300/30"
            >
              View More on Instagram
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gradient-to-b from-transparent via-teal-50/50 to-transparent dark:via-teal-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-teal-900 dark:text-teal-100 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-center text-teal-600 dark:text-teal-400 mb-12 max-w-2xl mx-auto">
            Real experiences from our community members who have transformed their lives through our wellness programs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative bg-white dark:bg-teal-950/30 rounded-2xl p-6 shadow-md hover:shadow-xl
                  transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6 text-teal-500/10 dark:text-teal-400/10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
                  </svg>
                </div>

                <div className="space-y-4">
                  {/* Testimonial Text */}
                  <p className="text-teal-700 dark:text-teal-300 relative z-10">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-teal-100 dark:border-teal-800">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                    </div>
                    <div>
                      <div className="text-base font-medium text-teal-900 dark:text-teal-100">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-teal-700 dark:text-teal-300 font-medium">
                        {testimonial.designation}
                      </div>
                      <div className="text-sm text-teal-600 dark:text-teal-400">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-br from-teal-900 to-slate-900 dark:from-slate-900 dark:to-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-lg sm:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Begin Your Wellness Journey Today
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                Join our community of mindful individuals committed to living their best lives. 
                Start your transformation with a free consultation.
              </p>
              <a
                href="https://forms.zohopublic.eu/sattva/form/SattvaWellnessRegistrationForm/formperma/uESkDIJRLWFDFCpd6VWeBhSa5TEBQEBLsUVnG1JVayI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md bg-teal-500 px-8 text-lg font-medium text-white transition-colors hover:bg-teal-600 mt-8"
              >
                Schedule Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Add before footer */}
      <section className="py-16 bg-gradient-to-b from-transparent via-teal-50/50 to-transparent dark:via-teal-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 dark:text-teal-100 mb-4">
            Explore Our Blog
          </h2>
          <p className="text-teal-600 dark:text-teal-400 mb-8 max-w-2xl mx-auto">
            Discover insights about yoga, meditation, and holistic wellness practices
          </p>
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white 
              bg-gradient-to-r from-teal-500 to-emerald-500 
              hover:from-teal-400 hover:to-emerald-400
              rounded-full shadow-lg hover:shadow-xl
              transition-all duration-300 hover:scale-105
              border border-teal-400/20 hover:border-teal-300/30"
          >
            Read Our Blog
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Social Links & Contact */}
      <footer className="bg-teal-900 text-white py-8 mt-auto">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            {/* WhatsApp Contact */}
            <a 
              href="https://wa.me/919895798155" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-base sm:text-lg font-medium text-green-400 hover:text-green-300 transition-colors"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Contact on WhatsApp</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.instagram.com/sattva_wellness_?igsh=eXplaW01M3VxaXpn" 
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="h-6 w-6 transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "url(#instagram-gradient)"
                  }}
                >
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#fdf497' }} />
                      <stop offset="5%" style={{ stopColor: '#fdf497' }} />
                      <stop offset="45%" style={{ stopColor: '#fd5949' }} />
                      <stop offset="60%" style={{ stopColor: '#d6249f' }} />
                      <stop offset="90%" style={{ stopColor: '#285AEB' }} />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/vEnxRxPhTQU3pXzx/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="h-6 w-6 transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="#1877f2"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-4 border-t border-teal-800 w-full text-center">
              <p className="text-sm text-teal-300">
                © {new Date().getFullYear()} Sattva Wellness. All rights reserved.
              </p>
              <p className="text-xs text-teal-400/60 mt-1">
                Nurturing mind, body, and soul through holistic wellness practices.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}