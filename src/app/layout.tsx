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
  title: 'Rafael Mejia',
  description: "Rafael Mejia's web development portfolio showcasing recent projects, coding skills, and contact details.",
  icons: {
    icon: '/favicon.svg',
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
