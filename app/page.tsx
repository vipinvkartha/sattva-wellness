"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Leaf, Sun, Wind } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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
              animate-gradient-x">
              Sattva Wellness
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
            Visit our wellness store
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
              icon={<Leaf className="h-10 w-10 text-primary" />}
              title="Yoga Classes"
              description="Expert-led sessions combining physical postures, breathing techniques, and relaxation"
            />
            <FeatureCard
              icon={<Sun className="h-10 w-10 text-primary" />}
              title="Meditation Sessions"
              description="Guided practices to cultivate mindfulness and inner calm in daily life"
            />
            <FeatureCard
              icon={<Wind className="h-10 w-10 text-primary" />}
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
              <Button size="lg" className="mt-8 bg-white text-slate-900 hover:bg-slate-100">
                Schedule Your Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}