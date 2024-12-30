"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Leaf, Sun, Wind, ArrowRight, ShoppingBag } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-center p-6 text-center transition-all hover:shadow-lg">
      <div className="rounded-full bg-primary/10 p-3">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-card-foreground">
        {title}
      </h3>
      <p className="mt-2 text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Transform Your Life with Mindful Wellness
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Discover a holistic approach to health and wellness. Our program combines mindfulness, 
            nutrition, and movement to help you achieve lasting balance and vitality.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('https://sattvawellness.store.link/', '_blank')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Visit Store
            </Button>
          </div>
        </div>
      </section>

      {/* Add a Store Banner Section */}
      <section className="bg-primary/5 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border bg-card p-8 shadow-sm">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Explore Our Wellness Store
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Discover our curated collection of wellness products, including Rudraksha bracelets, 
                  healing crystals, and meditation accessories.
                </p>
              </div>
              <Button 
                size="lg"
                onClick={() => window.open('https://sattvawellness.store.link/', '_blank')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Holistic Health"
              description="Comprehensive approach to physical, mental, and emotional well-being"
            />
            <FeatureCard
              icon={<Leaf className="h-10 w-10 text-primary" />}
              title="Mindful Living"
              description="Learn techniques for stress reduction and present-moment awareness"
            />
            <FeatureCard
              icon={<Sun className="h-10 w-10 text-primary" />}
              title="Natural Balance"
              description="Align your lifestyle with natural rhythms and sustainable practices"
            />
            <FeatureCard
              icon={<Wind className="h-10 w-10 text-primary" />}
              title="Inner Peace"
              description="Develop lasting tools for emotional resilience and clarity"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-card p-8 shadow-lg sm:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
                Begin Your Wellness Journey Today
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Join our community of mindful individuals committed to living their best lives. 
                Start your transformation with a free consultation.
              </p>
              <Button size="lg" className="mt-8">
                Schedule Your Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}