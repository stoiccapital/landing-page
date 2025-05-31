'use client';

import React, { useState } from 'react';

export default function EMobilitaetsVergleich() {
  const [formData, setFormData] = useState({
    // Electric vehicle data
    stromverbrauch: '',
    strompreis: '',
    wartungElektro: '',
    // Diesel vehicle data
    dieselverbrauch: '',
    dieselpreis: '',
    wartungDiesel: '',
    // Common data
    kilometer: ''
  });

  const [results, setResults] = useState<{
    elektroKosten: number | null;
    dieselKosten: number | null;
    differenz: number | null;
  }>({
    elektroKosten: null,
    dieselKosten: null,
    differenz: null
  });

  const calculateCosts = () => {
    const {
      stromverbrauch,
      strompreis,
      wartungElektro,
      dieselverbrauch,
      dieselpreis,
      wartungDiesel,
      kilometer
    } = formData;
    
    // Convert inputs to numbers
    const stromverbrauchNum = parseFloat(stromverbrauch) || 0;
    const strompreisNum = parseFloat(strompreis) || 0;
    const wartungElektroNum = parseFloat(wartungElektro) || 0;
    const dieselverbrauchNum = parseFloat(dieselverbrauch) || 0;
    const dieselpreisNum = parseFloat(dieselpreis) || 0;
    const wartungDieselNum = parseFloat(wartungDiesel) || 0;
    const kilometerNum = parseFloat(kilometer) || 0;

    // Calculate electric vehicle costs
    const stromkosten = (kilometerNum / 100) * stromverbrauchNum * strompreisNum;
    const elektroKosten = stromkosten + wartungElektroNum;

    // Calculate diesel vehicle costs
    const kraftstoffkosten = (kilometerNum / 100) * dieselverbrauchNum * dieselpreisNum;
    const dieselKosten = kraftstoffkosten + wartungDieselNum;

    // Calculate difference
    const differenz = dieselKosten - elektroKosten;

    setResults({
      elektroKosten,
      dieselKosten,
      differenz
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
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-black">E-Mobilitäts-Vergleich</h1>
        
        <div className="space-y-8">
          {/* Electric Vehicle Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-black flex items-center gap-2">
              <span>🔋</span> Für das Elektrofahrzeug
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stromverbrauch (kWh/100 km)
                </label>
                <input
                  type="number"
                  name="stromverbrauch"
                  value={formData.stromverbrauch}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="z.B. 25"
                  min="0"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Strompreis (€/kWh)
                </label>
                <input
                  type="number"
                  name="strompreis"
                  value={formData.strompreis}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="z.B. 0.35"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wartungskosten pro Monat (€)
                </label>
                <input
                  type="number"
                  name="wartungElektro"
                  value={formData.wartungElektro}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="z.B. 50"
                  min="0"
                  step="10"
                />
              </div>
            </div>
          </div>

          {/* Diesel Vehicle Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-black flex items-center gap-2">
              <span>🛢</span> Für das Dieselfahrzeug
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Verbrauch (Liter/100 km)
                </label>
                <input
                  type="number"
                  name="dieselverbrauch"
                  value={formData.dieselverbrauch}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="z.B. 7.5"
                  min="0"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dieselpreis (€/Liter)
                </label>
                <input
                  type="number"
                  name="dieselpreis"
                  value={formData.dieselpreis}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="z.B. 1.85"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wartungskosten pro Monat (€)
                </label>
                <input
                  type="number"
                  name="wartungDiesel"
                  value={formData.wartungDiesel}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="z.B. 100"
                  min="0"
                  step="10"
                />
              </div>
            </div>
          </div>

          {/* Common Data */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gefahrene Kilometer pro Monat
              </label>
              <input
                type="number"
                name="kilometer"
                value={formData.kilometer}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 5000"
                min="0"
                step="100"
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
            <h2 className="text-xl font-semibold mb-4 text-black">Ergebnis</h2>
            <div className="space-y-4">
              {results.elektroKosten !== null && results.dieselKosten !== null && results.differenz !== null ? (
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Elektro: Gesamtkosten pro Monat = <span className="font-semibold text-black">{results.elektroKosten.toFixed(2)} €</span>
                  </p>
                  <p className="text-gray-700">
                    Diesel: Gesamtkosten pro Monat = <span className="font-semibold text-black">{results.dieselKosten.toFixed(2)} €</span>
                  </p>
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <p className="text-gray-700">
                      Differenz: <span className="font-semibold text-black">{Math.abs(results.differenz).toFixed(2)} €</span> {results.differenz > 0 ? 'gespart' : 'mehr'} pro Monat
                    </p>
                  </div>
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