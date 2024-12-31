"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Leaf, PersonStanding, Sun, TentTree, Wind } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group relative flex flex-col items-center p-6 text-center transition-all duration-500 
      hover:shadow-[0_0_40px_8px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.1)]
      hover:scale-105 hover:bg-white/80 dark:hover:bg-slate-800/80 backdrop-blur-sm
      before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-transparent 
      before:via-white/5 before:to-transparent before:opacity-0 before:transition-opacity
      hover:before:opacity-100">
      <div className="relative rounded-full bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 
        p-4 shadow-inner transition-all duration-500 group-hover:shadow-lg group-hover:scale-110 
        group-hover:rotate-[360deg]">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-800 dark:text-slate-200 transition-colors
        group-hover:text-slate-900 dark:group-hover:text-white">
        {title}
      </h3>
      <p className="mt-2 text-slate-600 dark:text-slate-400 transition-colors
        group-hover:text-slate-700 dark:group-hover:text-slate-300">
        {description}
      </p>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section - Add a subtle pattern and glow */}
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] 
          dark:bg-grid-slate-700/25 animate-[grid_20s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
          animate-[shine_3s_ease-in-out_infinite] dark:via-slate-100/10"></div>
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 
              dark:from-slate-200 dark:via-slate-400 dark:to-slate-200 bg-clip-text text-transparent 
              animate-title-slide-up opacity-0"
            >
              Sattva
              <span className="block mt-1">Wellness</span>
            </span>
          </h1>
          <h2 className="mt-4 text-2xl font-medium text-slate-600 dark:text-slate-300 sm:text-3xl">
            Transform Your Life with Mindful Wellness
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
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
            className="group inline-flex items-center text-lg font-medium relative
              bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent
              hover:from-purple-500 hover:to-pink-500
              transition-all duration-300 hover:scale-105 
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 
              after:bg-gradient-to-r after:from-purple-600 after:to-pink-600
              after:transition-all after:duration-300 hover:after:w-full"
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
              className="ml-2 h-4 w-4 text-pink-600 transition-transform group-hover:translate-x-1"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Features Section - Add card hover effects */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 mb-12">
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

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black py-16">
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
                className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-lg font-medium text-slate-900 transition-colors hover:bg-slate-100 mt-8"
              >
                Schedule Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links & Contact */}
      <footer className="bg-slate-900 text-white py-8 mt-auto">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            {/* WhatsApp Contact */}
            <a 
              href="https://wa.me/919895798155" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-base sm:text-lg font-medium text-green-400 hover:text-green-300 transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Contact us on WhatsApp</span>
            </a>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a 
                href="https://www.instagram.com/sattva_wellness_?igsh=eXplaW01M3VxaXpn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/vEnxRxPhTQU3pXzx/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm text-center px-4">
              Follow us on social media for wellness tips and updates
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}