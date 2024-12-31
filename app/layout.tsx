import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sattva Wellness | Holistic Health & Mindful Living',
  description: 'Transform your life with Sattva Wellness. Expert-led yoga classes, meditation sessions, and wellness camps. Join our holistic approach to health and mindful living in Kerala.',
  keywords: 'Sattva Wellness, yoga classes, meditation, wellness camps, holistic health, mindfulness, Kerala wellness, mindful living, wellness program',
  authors: [{ name: 'Sattva Wellness' }],
  openGraph: {
    title: 'Sattva Wellness | Holistic Health & Mindful Living',
    description: 'Transform your life with Sattva Wellness. Expert-led yoga classes, meditation sessions, and wellness camps in Kerala.',
    url: 'https://sattvawellness.vercel.app',
    siteName: 'Sattva Wellness',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Sattva Wellness - Holistic Health & Mindful Living',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sattva Wellness | Holistic Health & Mindful Living',
    description: 'Transform your life with Sattva Wellness. Expert-led yoga classes, meditation sessions, and wellness camps.',
    images: ['/og-image.jpg'], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add this after setting up Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://sattvawellness.vercel.app" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}