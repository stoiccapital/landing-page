import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">Kostenlose Tools für Transportunternehmen: Schnell, sicher & anonym</h1>
          <p className="text-xl mb-8 text-black">Über 1.000 Transportunternehmen vertrauen unseren Tools für präzise Kalkulationen. Keine Anmeldung, keine Datenspeicherung, sofort einsatzbereit.</p>
          <a href="/free-tools" className="bg-black text-white px-6 py-3 rounded hover:bg-black/90">Jetzt kostenlos Tools nutzen</a>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-black">100% Anonym</h3>
              <p className="text-gray-600">Keine Anmeldung erforderlich. Ihre Daten bleiben bei Ihnen.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-black">DSGVO-konform</h3>
              <p className="text-gray-600">Alle Berechnungen erfolgen lokal in Ihrem Browser.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Sofort einsatzbereit</h3>
              <p className="text-gray-600">Keine Installation, keine Wartezeit - direkt loslegen.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 