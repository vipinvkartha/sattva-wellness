import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import CampaignBanner from '@/components/CampaignBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sattva-wellness.in/'),
  title: 'Sattva Wellness | Holistic Health & Mindful Living',
  description: 'Transform your life with Sattva Wellness. Expert-led yoga classes, meditation sessions, and wellness camps. Join our holistic approach to health and mindful living in Kerala.',
  keywords: 'Sattva Wellness, yoga classes, meditation, wellness camps, holistic health, mindfulness, Kerala wellness, mindful living, wellness program',
  authors: [{ name: 'Sattva Wellness' }],
  openGraph: {
    title: 'Sattva Wellness | Holistic Health & Mindful Living',
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
    title: 'Sattva Wellness | Holistic Health & Mindful Living',
    description: 'Transform your life with Sattva Wellness. Expert-led yoga classes, meditation sessions, and wellness camps.',
    images: ['/og-image.jpg'],
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
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#14b8a6',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#14b8a6'
  }
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
      </head>
      <body className={inter.className}>
        <CampaignBanner />
        {children}
        <Analytics />
      </body>
    </html>
  );
}