import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import CampaignBanner from '@/app/components/CampaignBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sattva-wellness.in/'),
  title: 'Sattva Wellness | Yoga, Meditation & Holistic Health in Kerala',
  description: 'Transform your life with Sattva Wellness. Expert-led yoga classes, meditation sessions, and wellness camps in Kerala. Join our holistic approach to health, mindfulness, and spiritual growth.',
  keywords: [
    'yoga classes Kerala',
    'meditation center Kerala',
    'wellness retreat',
    'holistic health',
    'mindfulness training',
    'yoga therapy',
    'spiritual wellness',
    'wellness camps Kerala',
    'yoga meditation center',
    'stress management',
    'mindful living',
    'wellness program',
    'yoga for beginners',
    'wellness community',
    'health transformation',
    'Ayurvedic wellness',
    'mind body wellness',
    'yoga benefits',
    'meditation techniques',
    'wellness coaching'
  ].join(', '),
  authors: [{ name: 'Sattva Wellness' }],
  creator: 'Sattva Wellness',
  publisher: 'Sattva Wellness',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Sattva Wellness | Yoga, Meditation & Holistic Health in Kerala',
    description: 'Transform your life with Sattva Wellness. Expert-led yoga classes, meditation sessions, and wellness camps in Kerala.',
    url: 'https://sattva-wellness.in/',
    siteName: 'Sattva Wellness',
    images: [
      {
        url: '/og-image.jpg',
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
    title: 'Sattva Wellness | Yoga, Meditation & Holistic Health in Kerala',
    description: 'Transform your life with expert-led yoga classes, meditation sessions, and wellness camps in Kerala.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sattva-wellness.in',
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
    google: 'your-google-verification-code',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Sattva Wellness',
  image: 'https://sattva-wellness.in/logo.jpg',
  '@id': 'https://sattva-wellness.in',
  url: 'https://sattva-wellness.in',
  telephone: '+919895798155',
  areaServed: {
    '@type': 'State',
    name: 'Kerala',
    addressCountry: 'IN'
  },
  availableService: [
    {
      '@type': 'Service',
      name: 'Yoga Classes',
      description: 'Expert-led yoga sessions combining physical postures, breathing techniques, and relaxation'
    },
    {
      '@type': 'Service',
      name: 'Meditation Sessions',
      description: 'Guided meditation practices to cultivate mindfulness and inner calm'
    },
    {
      '@type': 'Service',
      name: 'Wellness Camps',
      description: 'Immersive wellness retreats focused on holistic transformation'
    }
  ],
  sameAs: [
    'https://www.facebook.com/share/vEnxRxPhTQU3pXzx',
    'https://www.instagram.com/sattva_wellness_'
  ],
  priceRange: '₹₹',
  description: 'Transform your life with Sattva Wellness. Expert-led yoga classes, meditation sessions, and wellness camps in Kerala.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://sattva-wellness.in/" />
        <link rel="canonical" href="https://sattva-wellness.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* WhatsForm Widget */}
        <Script
          id="wf-widget"
          src="https://whatsform.com/launcher.js"
          data-id="wPZ4nX"
          data-message=""
          strategy="lazyOnload"
        />

        <Script
          id="collect-chat"
          strategy="afterInteractive"
        >
          {`
            (function(w, d) { 
              w.CollectId = "67753861d3925dd2f895c2da"; 
              w.CollectWidgetId = "";
              w.CollectChatConfig = {
                buttonStyle: {
                  icon: 'chat',
                  backgroundColor: '#14b8a6',
                  color: '#ffffff',
                },
                showFeedly: false,
                position: 'right',
                bottomDistance: '20px',
              };
              var h = d.head || d.getElementsByTagName("head")[0]; 
              var s = d.createElement("script"); 
              s.setAttribute("type", "text/javascript"); 
              s.async=true; 
              s.setAttribute("src", "https://collectcdn.com/launcher.js"); 
              h.appendChild(s); 
            })(window, document);
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <CampaignBanner />
        {children}
        <Analytics />
      </body>
    </html>
  );
}