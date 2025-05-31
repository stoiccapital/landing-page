'use client';

import React from 'react';
import Link from 'next/link';

const tools = [
  {
    title: 'Gehaltsrechner',
    description: 'Berechnen Sie Ihr Gehalt basierend auf Umsatz, Zuschlägen und anderen Faktoren.',
    path: '/free-tools/gehaltsrechner'
  },
  {
    title: 'Fahrzeugkosten-Rechner',
    description: 'Kalkulieren Sie die monatlichen Kosten Ihres Fahrzeugs inklusive Kraftstoff, Wartung und Versicherung.',
    path: '/free-tools/fahrzeugkosten-rechner'
  },
  {
    title: 'CO₂-Rechner',
    description: 'Berechnen Sie den CO₂-Ausstoß Ihres Fahrzeugs basierend auf Fahrzeugtyp und Kraftstoffart.',
    path: '/free-tools/co2-rechner'
  },
  {
    title: 'Break-Even-Rechner',
    description: 'Ermitteln Sie die benötigte Kilometerleistung für die Gewinnschwelle.',
    path: '/free-tools/break-even-rechner'
  },
  {
    title: 'Touren-Kalkulator',
    description: 'Berechnen Sie die Kosten und Gewinnmarge für einzelne Touren.',
    path: '/free-tools/touren-kalkulator'
  },
  {
    title: 'Lohnnebenkosten-Rechner',
    description: 'Kalkulieren Sie die Gesamtkosten pro Fahrer inklusive Arbeitgeberanteile.',
    path: '/free-tools/lohnnebenkosten-rechner'
  },
  {
    title: 'Tacho-Zeit-Rechner',
    description: 'Überprüfen Sie die Einhaltung der EU-Fahrzeitregelungen.',
    path: '/free-tools/tacho-zeit-rechner'
  },
  {
    title: 'E-Mobilitäts-Vergleich',
    description: 'Vergleichen Sie die Kosten von konventionellen und elektrischen Fahrzeugen.',
    path: '/free-tools/e-mobilitaets-vergleich'
  },
  {
    title: 'Maut-Kalkulator',
    description: 'Berechnen Sie die Mautkosten basierend auf Strecke und Fahrzeugdaten.',
    path: '/free-tools/maut-kalkulator'
  },
  {
    title: 'Fahrerbewertung',
    description: 'Bewerten Sie die Leistung Ihrer Fahrer anhand verschiedener Kriterien.',
    path: '/free-tools/fahrerbewertung'
  }
];

export default function FreeToolsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link 
            href={tool.path} 
            key={tool.path}
            className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
          >
            <h2 className="text-xl font-semibold text-black mb-2">{tool.title}</h2>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 