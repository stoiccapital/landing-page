import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">Nutze unsere kostenlosen Tools – anonym, sicher und sofort einsetzbar</h1>
          <p className="text-xl mb-8 text-black">Alle Tools funktionieren direkt im Browser. Keine Anmeldung. Keine Datenspeicherung.</p>
          <a href="#tools" className="bg-black text-white px-6 py-3 rounded hover:bg-black/90">Jetzt starten</a>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Unsere Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tool Card 1 */}
            <div className="bg-white p-6 rounded border border-black">
              <h3 className="text-xl font-bold mb-2 text-black">CO₂-Rechner</h3>
              <p className="mb-4 text-black">Berechnen Sie Ihren CO₂-Fußabdruck.</p>
              <a href="#" className="text-black hover:underline">Jetzt öffnen</a>
            </div>
            {/* Tool Card 2 */}
            <div className="bg-white p-6 rounded border border-black">
              <h3 className="text-xl font-bold mb-2 text-black">Fahrzeugkosten-Kalkulator</h3>
              <p className="mb-4 text-black">Kalkulieren Sie die Kosten Ihres Fahrzeugs.</p>
              <a href="#" className="text-black hover:underline">Jetzt öffnen</a>
            </div>
            {/* Tool Card 3 */}
            <div className="bg-white p-6 rounded border border-black">
              <h3 className="text-xl font-bold mb-2 text-black">Tool 3</h3>
              <p className="mb-4 text-black">Beschreibung für Tool 3.</p>
              <a href="#" className="text-black hover:underline">Jetzt öffnen</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blog Preview 1 */}
            <div className="bg-white p-6 rounded border border-black">
              <h3 className="text-xl font-bold mb-2 text-black">Blog Titel 1</h3>
              <p className="mb-4 text-black">Kurze Zusammenfassung des Blog-Eintrags 1.</p>
              <a href="#" className="text-black hover:underline">Weiterlesen</a>
            </div>
            {/* Blog Preview 2 */}
            <div className="bg-white p-6 rounded border border-black">
              <h3 className="text-xl font-bold mb-2 text-black">Blog Titel 2</h3>
              <p className="mb-4 text-black">Kurze Zusammenfassung des Blog-Eintrags 2.</p>
              <a href="#" className="text-black hover:underline">Weiterlesen</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto text-center">
          <a href="#" className="mx-2 hover:text-white/90">Impressum</a>
          <a href="#" className="mx-2 hover:text-white/90">Datenschutz</a>
          <a href="#" className="mx-2 hover:text-white/90">Kontakt</a>
        </div>
      </footer>
    </div>
  );
} 