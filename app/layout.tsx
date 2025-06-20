import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Navigation from './components/Navigation';

export const metadata: Metadata = {
  title: 'Tools für Transportunternehmen | Kostenlose Kalkulationstools',
  description: 'Kostenlose Tools für Transportunternehmen: CO₂-Rechner, Fahrzeugkosten-Kalkulator & Gehaltsrechner. Anonym, sicher & sofort einsatzbereit. Keine Anmeldung erforderlich.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        {/* Google Analytics (GA4) script placeholder */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR-GA-ID');
        ` }} /> */}
      </head>
      <body className="bg-white text-black">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
} 