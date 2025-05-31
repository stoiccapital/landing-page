'use client';

import React, { useState } from 'react';

export default function LohnnebenkostenRechner() {
  const [formData, setFormData] = useState({
    bruttolohn: '',
    sozialabgaben: '',
    unfallversicherung: '',
    zusatzkosten: ''
  });

  const [results, setResults] = useState<{
    sozialkosten: number | null;
    gesamtkosten: number | null;
  }>({
    sozialkosten: null,
    gesamtkosten: null
  });

  const calculateCosts = () => {
    const { bruttolohn, sozialabgaben, unfallversicherung, zusatzkosten } = formData;
    
    // Convert inputs to numbers
    const bruttolohnNum = parseFloat(bruttolohn) || 0;
    const sozialabgabenNum = parseFloat(sozialabgaben) || 0;
    const unfallversicherungNum = parseFloat(unfallversicherung) || 0;
    const zusatzkostenNum = parseFloat(zusatzkosten) || 0;

    // Calculate social costs
    const sozialkosten = bruttolohnNum * (sozialabgabenNum / 100);

    // Calculate total costs
    const gesamtkosten = bruttolohnNum + sozialkosten + unfallversicherungNum + zusatzkostenNum;

    setResults({
      sozialkosten,
      gesamtkosten
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-black">Lohnnebenkosten-Rechner</h1>
        
        <div className="space-y-6">
          {/* Input Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bruttolohn pro Monat (€)
              </label>
              <input
                type="number"
                name="bruttolohn"
                value={formData.bruttolohn}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 3500"
                min="0"
                step="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sozialabgaben Arbeitgeber (%)
              </label>
              <input
                type="number"
                name="sozialabgaben"
                value={formData.sozialabgaben}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 20"
                min="0"
                max="100"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unfallversicherung (€)
              </label>
              <input
                type="number"
                name="unfallversicherung"
                value={formData.unfallversicherung}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 50"
                min="0"
                step="10"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zusatzkosten (optional, €)
              </label>
              <input
                type="number"
                name="zusatzkosten"
                value={formData.zusatzkosten}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 100"
                min="0"
                step="10"
              />
              <p className="mt-1 text-sm text-gray-500">z.B. Verwaltung, Weiterbildung</p>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={calculateCosts}
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Berechnen
            </button>
          </div>

          {/* Results */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-black">Ergebnis</h2>
            <div className="space-y-4">
              {results.sozialkosten !== null && results.gesamtkosten !== null ? (
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Sozialkosten: <span className="font-semibold text-black">{results.sozialkosten.toFixed(2)} €</span>
                  </p>
                  <p className="text-gray-700">
                    👉 Gesamtkosten Arbeitgeber: <span className="font-semibold text-black">{results.gesamtkosten.toFixed(2)} €</span>
                  </p>
                </div>
              ) : (
                <p className="text-gray-500">Bitte füllen Sie alle Felder aus und klicken Sie auf "Berechnen".</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 