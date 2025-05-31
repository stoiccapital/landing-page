'use client';

import React, { useState } from 'react';

export default function TourenKalkulator() {
  const [formData, setFormData] = useState({
    strecke: '',
    verbrauch: '',
    kraftstoffpreis: '',
    fahrzeit: '',
    lohnkostenProStunde: '',
    fixkosten: ''
  });

  const [results, setResults] = useState({
    kraftstoffkosten: 0,
    lohnkostenGesamt: 0,
    gesamtkosten: 0
  });

  const calculateCosts = () => {
    const {
      strecke,
      verbrauch,
      kraftstoffpreis,
      fahrzeit,
      lohnkostenProStunde,
      fixkosten
    } = formData;

    // Convert all inputs to numbers, defaulting to 0 if empty
    const streckeNum = parseFloat(strecke) || 0;
    const verbrauchNum = parseFloat(verbrauch) || 0;
    const kraftstoffpreisNum = parseFloat(kraftstoffpreis) || 0;
    const fahrzeitNum = parseFloat(fahrzeit) || 0;
    const lohnkostenProStundeNum = parseFloat(lohnkostenProStunde) || 0;
    const fixkostenNum = parseFloat(fixkosten) || 0;

    // Calculate costs
    const kraftstoffkosten = (streckeNum / 100) * verbrauchNum * kraftstoffpreisNum;
    const lohnkostenGesamt = fahrzeitNum * lohnkostenProStundeNum;
    const gesamtkosten = kraftstoffkosten + lohnkostenGesamt + fixkostenNum;

    setResults({
      kraftstoffkosten,
      lohnkostenGesamt,
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
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-black">Touren-Kalkulator</h1>
        
        <div className="space-y-6">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Strecke (km)
              </label>
              <input
                type="number"
                name="strecke"
                value={formData.strecke}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 150"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fahrzeugverbrauch (Liter/100km)
              </label>
              <input
                type="number"
                name="verbrauch"
                value={formData.verbrauch}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 7.5"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kraftstoffpreis (€/Liter)
              </label>
              <input
                type="number"
                name="kraftstoffpreis"
                value={formData.kraftstoffpreis}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 1.85"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fahrzeit (Stunden)
              </label>
              <input
                type="number"
                name="fahrzeit"
                value={formData.fahrzeit}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 2.5"
                step="0.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lohnkosten pro Stunde (€/h)
              </label>
              <input
                type="number"
                name="lohnkostenProStunde"
                value={formData.lohnkostenProStunde}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 25"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fixkostenpauschale (€)
              </label>
              <input
                type="number"
                name="fixkosten"
                value={formData.fixkosten}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 50"
              />
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
            <h2 className="text-xl font-semibold mb-4 text-black">Kostenaufstellung</h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                Kraftstoffkosten: {results.kraftstoffkosten.toFixed(2)} €
              </p>
              <p className="text-gray-700">
                Lohnkosten: {results.lohnkostenGesamt.toFixed(2)} €
              </p>
              <div className="pt-4 mt-4 border-t border-gray-200">
                <p className="text-lg font-semibold text-black">
                  Die geschätzten Gesamtkosten für diese Tour betragen: {results.gesamtkosten.toFixed(2)} €
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 