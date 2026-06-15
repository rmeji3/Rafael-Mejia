import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Loader from '../components/Loader/Loader';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rafaelmejia.com'),
  title: {
    default: 'Rafael Mejia | Full Stack Developer',
    template: '%s | Rafael Mejia',
  },
  description: "Rafael Mejia's web development portfolio showcasing recent projects, coding skills, and contact details. Specialized in creating dynamic, responsive web applications.",
  keywords: ['Rafael Mejia', 'Full Stack Developer', 'Web Development', 'Portfolio', 'React', 'Next.js', 'Frontend', 'Backend', 'Software Engineer', 'TypeScript'],
  authors: [{ name: 'Rafael Mejia' }],
  creator: 'Rafael Mejia',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Rafael Mejia | Full Stack Developer',
    description: "Rafael Mejia's web development portfolio showcasing recent projects, coding skills, and contact details.",
    siteName: 'Rafael Mejia Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rafael Mejia Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafael Mejia | Full Stack Developer',
    description: "Rafael Mejia's web development portfolio showcasing recent projects, coding skills, and contact details.",
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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="pre-anim">
        {/* Loading overlay */}
        <Loader />

        {/* Ambient depth background */}
        <div className="ambient" aria-hidden="true">
          <div className="glow a"></div>
          <div className="glow b"></div>
        </div>

        {children}
      </body>
    </html>
  );
}
