"use client";

import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Heart, Leaf, PersonStanding, Sun, TentTree, Wind } from "lucide-react";
import { ReactNode, useState, useEffect, useRef } from "react";
import { ImageModal } from './components/ImageModal';
import NavMenu from './components/NavMenu';
import QuoteDisplay from '@/app/components/QuoteDisplay';
import PricingSection from '@/app/components/PricingSection';
import StoreSection from '@/app/components/StoreSection';
import Image from 'next/image';
import Link from 'next/link';

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
    name: "Vipin Vijayan",
    designation: "Engineer",
    location: "Kochi, Kerala",
    image: "/testimonials/vipin.jpg",
    rating: 5
  },
  {
    text: "The yoga sessions have been truly transformative for my physical and mental well-being. The perfect blend of asanas, pranayama, and meditation has helped me find balance in my busy life. The instructors' guidance is exceptional.",
    name: "Arjun",
    designation: "Engineer",
    location: "Palakkad",
    image: "/testimonials/arjun.jpg",
    rating: 4.5
  },
  {
    text: "The meditation sessions have helped me manage stress and find inner peace. Instructor Midhun guide you with patience and understanding, making it perfect for beginners like me.",
    name: "Anamika",
    designation: "Lawyer",
    location: "Palakkad",
    image: "/testimonials/anamika.jpg",
    rating: 4.5
  },
  {
    text: "Joining Sattva Wellness has been a transformative experience. The holistic approach to wellness and the expert guidance has helped me maintain work-life balance and improve my overall well-being.",
    name: "Athira",
    designation: "Teacher",
    location: "Calicut",
    image: "/testimonials/athira.jpg",
    rating: 5
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

function TestimonialCarousel({ testimonials }: { testimonials: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
      {testimonials.map((testimonial, index) => (
        <div
          key={`testimonial-${index}`}
          className="flex flex-col items-center text-center group"
        >
          {/* Profile Image Circle */}
          <div className="relative w-32 h-32 mb-6 transform transition-transform duration-500 group-hover:scale-110">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 animate-spin-slow opacity-75 blur-md" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                sizes="(max-width: 768px) 100vw, 128px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              {testimonial.name}
            </h3>
            <div className="space-y-1">
              <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
                {testimonial.designation}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.location}
              </p>
            </div>
            {/* Rating (Om Icons) */}
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => {
                const ratingDiff = testimonial.rating - i;
                
                return (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    {ratingDiff >= 1 ? (
                      // Full Om
                      <path
                        className="text-teal-500"
                        fill="currentColor"
                        d="M12 2c-.5 0-1 .2-1.3.6-.3-.4-.8-.6-1.3-.6-1 0-1.7.8-1.7 1.7 0 .7.4 1.2 1 1.5-.6.3-1 .8-1 1.5 0 1 .8 1.7 1.7 1.7.5 0 1-.2 1.3-.6.3.4.8.6 1.3.6s1-.2 1.3-.6c.3.4.8.6 1.3.6 1 0 1.7-.8 1.7-1.7 0-.7-.4-1.2-1-1.5.6-.3 1-.8 1-1.5 0-1-.8-1.7-1.7-1.7-.5 0-1 .2-1.3.6-.3-.4-.8-.6-1.3-.6zm0 1.5c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm5.2 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm5.2 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zM12 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1.5c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5zm0 6c-4.4 0-8 3.6-8 8h2c0-3.3 2.7-6 6-6s6 2.7 6 6h2c0-4.4-3.6-8-8-8z"
                      />
                    ) : ratingDiff > 0 ? (
                      // Partial Om
                      <g>
                        <path
                          className="text-gray-300 dark:text-gray-600"
                          fill="currentColor"
                          d="M12 2c-.5 0-1 .2-1.3.6-.3-.4-.8-.6-1.3-.6-1 0-1.7.8-1.7 1.7 0 .7.4 1.2 1 1.5-.6.3-1 .8-1 1.5 0 1 .8 1.7 1.7 1.7.5 0 1-.2 1.3-.6.3.4.8.6 1.3.6s1-.2 1.3-.6c.3.4.8.6 1.3.6 1 0 1.7-.8 1.7-1.7 0-.7-.4-1.2-1-1.5.6-.3 1-.8 1-1.5 0-1-.8-1.7-1.7-1.7-.5 0-1 .2-1.3.6-.3-.4-.8-.6-1.3-.6zm0 1.5c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm5.2 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm5.2 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zM12 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1.5c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5zm0 6c-4.4 0-8 3.6-8 8h2c0-3.3 2.7-6 6-6s6 2.7 6 6h2c0-4.4-3.6-8-8-8z"
                        />
                        <defs>
                          <clipPath id={`clip-${i}-${testimonial.name}`}>
                            <rect x="0" y="0" width={`${ratingDiff * 100}%`} height="100%" />
                          </clipPath>
                        </defs>
                        <path
                          className="text-teal-500"
                          fill="currentColor"
                          d="M12 2c-.5 0-1 .2-1.3.6-.3-.4-.8-.6-1.3-.6-1 0-1.7.8-1.7 1.7 0 .7.4 1.2 1 1.5-.6.3-1 .8-1 1.5 0 1 .8 1.7 1.7 1.7.5 0 1-.2 1.3-.6.3.4.8.6 1.3.6s1-.2 1.3-.6c.3.4.8.6 1.3.6 1 0 1.7-.8 1.7-1.7 0-.7-.4-1.2-1-1.5.6-.3 1-.8 1-1.5 0-1-.8-1.7-1.7-1.7-.5 0-1 .2-1.3.6-.3-.4-.8-.6-1.3-.6zm0 1.5c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm5.2 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm5.2 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zM12 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1.5c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5zm0 6c-4.4 0-8 3.6-8 8h2c0-3.3 2.7-6 6-6s6 2.7 6 6h2c0-4.4-3.6-8-8-8z"
                          clipPath={`url(#clip-${i}-${testimonial.name})`}
                        />
                      </g>
                    ) : (
                      // Empty Om
                      <path
                        className="text-gray-300 dark:text-gray-600"
                        fill="currentColor"
                        d="M12 2c-.5 0-1 .2-1.3.6-.3-.4-.8-.6-1.3-.6-1 0-1.7.8-1.7 1.7 0 .7.4 1.2 1 1.5-.6.3-1 .8-1 1.5 0 1 .8 1.7 1.7 1.7.5 0 1-.2 1.3-.6.3.4.8.6 1.3.6s1-.2 1.3-.6c.3.4.8.6 1.3.6 1 0 1.7-.8 1.7-1.7 0-.7-.4-1.2-1-1.5.6-.3 1-.8 1-1.5 0-1-.8-1.7-1.7-1.7-.5 0-1 .2-1.3.6-.3-.4-.8-.6-1.3-.6zm0 1.5c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm5.2 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-2.6 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm5.2 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zM12 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1.5c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5zm0 6c-4.4 0-8 3.6-8 8h2c0-3.3 2.7-6 6-6s6 2.7 6 6h2c0-4.4-3.6-8-8-8z"
                      />
                    )}
                  </svg>
                );
              })}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic text-sm leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

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
      <section id="home" className="relative px-4 pt-36 pb-16 sm:px-6 lg:px-8 lg:pt-48 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-100/20 via-transparent to-transparent dark:from-teal-800/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-100/30 to-transparent 
          animate-[shine_3s_ease-in-out_infinite] dark:via-teal-800/10"></div>
        
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-700 
              dark:from-teal-300 dark:via-emerald-200 dark:to-teal-300 bg-clip-text text-transparent 
              animate-title-slide-up opacity-0">
              Sattva Wellness
            </span>
          </h1>
          <p className="mt-2 text-lg italic text-teal-600/80 dark:text-teal-400/80 
            animate-fade-in font-medium">
            Healthy Body, Happy Soul
          </p>
          <h2 className="mt-6 text-xl font-medium sm:text-2xl
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

      {/* Add QuoteDisplay here, after the hero section */}
      <div className="mb-16">
        <QuoteDisplay />
      </div>

      {/* Store Link - Add hover effect */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <a 
            href="https://vibha.store.link/" 
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

      {/* Why Yoga Section */}
      <section id="why-yoga" className="py-16 bg-gradient-to-br from-teal-50/50 via-white to-teal-50/50 
        dark:from-teal-950/50 dark:via-gray-900 dark:to-teal-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-teal-900 dark:text-teal-100 mb-12">
            Why Choose Yoga?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Physical Benefits */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg
              hover:shadow-xl transition-all duration-300 border border-teal-100 dark:border-teal-800
              hover:border-teal-200 dark:hover:border-teal-700 group">
              <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4
                group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">Physical Benefits</h3>
              <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Improves flexibility and posture
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Strengthens muscles and joints
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Enhances balance and coordination
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Boosts energy and vitality
                </li>
              </ul>
            </div>

            {/* Mental Benefits */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg
              hover:shadow-xl transition-all duration-300 border border-teal-100 dark:border-teal-800
              hover:border-teal-200 dark:hover:border-teal-700 group">
              <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4
                group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">Mental Benefits</h3>
              <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Reduces stress and anxiety
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Improves concentration
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Enhances emotional balance
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Promotes better sleep
                </li>
              </ul>
            </div>

            {/* Spiritual Benefits */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg
              hover:shadow-xl transition-all duration-300 border border-teal-100 dark:border-teal-800
              hover:border-teal-200 dark:hover:border-teal-700 group">
              <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4
                group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">Spiritual Benefits</h3>
              <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Deepens self-awareness
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Cultivates inner peace
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Connects mind and body
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Enhances mindfulness
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-lg text-teal-700 dark:text-teal-300 mb-6 max-w-2xl mx-auto">
              Experience these transformative benefits firsthand. Join our yoga community and begin your journey towards holistic well-being.
            </p>
            <a
              href="https://forms.zohopublic.eu/sattva/form/SattvaWellnessRegistrationForm/formperma/uESkDIJRLWFDFCpd6VWeBhSa5TEBQEBLsUVnG1JVayI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white 
                bg-gradient-to-r from-teal-500 to-emerald-500 
                hover:from-teal-400 hover:to-emerald-400
                rounded-full shadow-lg hover:shadow-xl
                transition-all duration-300 hover:scale-105
                border border-teal-400/20 hover:border-teal-300/30"
            >
              Start Your Yoga Journey
            </a>
          </div>
        </div>
      </section>

      <PricingSection />

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
      <section id="testimonials" className="py-16 bg-gradient-to-br from-white to-teal-50/30 
        dark:from-gray-900 dark:to-teal-950/30"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-teal-900 dark:text-teal-100 mb-12">
            What Our Community Says
          </h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <StoreSection />

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
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Call +919895798155</span>
            </a>

            {/* Quick Links */}

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
                Healthy Body, Happy Soul
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}