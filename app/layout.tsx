import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import CampaignBanner from '@/app/components/CampaignBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sattva-wellness.in/'),
  title: 'Best Yoga & Meditation Center in Kerala | Sattva Wellness',
  description: 'Join Kerala\'s premier yoga and meditation center. Expert-led classes, personalized wellness programs, and authentic spiritual practices. Transform your life with our holistic approach to health, mindfulness, and Ayurvedic wellness in Kerala.',
  keywords: [
    'best yoga classes Kerala',
    'yoga center Kochi',
    'meditation classes Kerala',
    'wellness retreat Kerala',
    'Ayurvedic wellness center',
    'holistic health Kerala',
    'yoga therapy Kerala',
    'mindfulness training India',
    'spiritual wellness center',
    'wellness camps Kerala',
    'yoga meditation center Kerala',
    'stress management Kerala',
    'yoga for beginners Kerala',
    'wellness community Kerala',
    'health transformation program',
    'Ayurvedic wellness retreat',
    'mind body wellness Kerala',
    'traditional yoga classes',
    'meditation techniques Kerala',
    'wellness coaching India',
    'yoga certification Kerala',
    'spiritual retreat center',
    'wellness workshops Kerala',
    'yoga teacher training Kerala',
    'holistic healing center'
  ].join(', '),
  authors: [{ name: 'Sattva Wellness', url: 'https://sattva-wellness.in' }],
  creator: 'Sattva Wellness',
  publisher: 'Sattva Wellness',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Best Yoga & Meditation Center in Kerala | Sattva Wellness',
    description: 'Transform your life with Kerala\'s leading yoga and meditation center. Expert-led classes, personalized wellness programs, and authentic spiritual practices.',
    url: 'https://sattva-wellness.in/',
    siteName: 'Sattva Wellness',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sattva Wellness - Kerala\'s Premier Yoga & Meditation Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Yoga & Meditation Center in Kerala | Sattva Wellness',
    description: 'Join Kerala\'s premier yoga center for expert-led classes, meditation sessions, and transformative wellness programs.',
    images: ['/og-image.jpg'],
    creator: '@sattvawellness',
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
};

// Enhanced JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Sattva Wellness',
  image: 'https://sattva-wellness.in/logo.jpg',
  '@id': 'https://sattva-wellness.in',
  url: 'https://sattva-wellness.in',
  telephone: '+919895798155',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sattva Wellness Center',
    addressLocality: 'Kochi',
    addressRegion: 'Kerala',
    postalCode: '682001',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.9312,   // Replace with your exact location's latitude
    longitude: 76.2673  // Replace with your exact location's longitude
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '06:00',
    closes: '20:00'
  },
  availableService: [
    {
      '@type': 'Service',
      name: 'Yoga Classes',
      description: 'Expert-led traditional yoga sessions combining asanas, pranayama, and meditation techniques'
    },
    {
      '@type': 'Service',
      name: 'Meditation Sessions',
      description: 'Guided meditation practices for stress relief, mindfulness, and spiritual growth'
    },
    {
      '@type': 'Service',
      name: 'Wellness Camps',
      description: 'Transformative wellness retreats combining yoga, meditation, and Ayurvedic practices'
    },
    {
      '@type': 'Service',
      name: 'Personal Training',
      description: 'One-on-one yoga and wellness coaching for personalized growth'
    }
  ],
  sameAs: [
    'https://www.facebook.com/share/vEnxRxPhTQU3pXzx',
    'https://www.instagram.com/sattva_wellness_'
  ],
  priceRange: '₹₹',
  description: 'Kerala\'s premier yoga and meditation center offering expert-led classes, wellness programs, and spiritual practices for holistic transformation.'
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
