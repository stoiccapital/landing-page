'use client';

import React, { useState } from 'react';

type Country = 'Deutschland' | 'Österreich' | 'Schweiz';
type EmissionsClass = 'EURO I' | 'EURO II' | 'EURO III' | 'EURO IV' | 'EURO V' | 'EURO VI';

export default function MautKalkulator() {
  const [formData, setFormData] = useState({
    land: 'Deutschland' as Country,
    strecke: '',
    gewicht: '',
    achsen: '',
    emissionsklasse: 'EURO VI' as EmissionsClass
  });

  const [result, setResult] = useState<number | null>(null);

  const calculateMaut = () => {
    const { land, strecke, gewicht, achsen, emissionsklasse } = formData;
    
    // Convert inputs to numbers
    const streckeNum = parseFloat(strecke) || 0;
    const gewichtNum = parseFloat(gewicht) || 0;
    const achsenNum = parseInt(achsen) || 0;

    let mautkosten = 0;

    switch (land) {
      case 'Deutschland':
        // Simplified calculation using average rate
        mautkosten = streckeNum * 0.19;
        break;

      case 'Österreich':
        // Flat rate per kilometer
        mautkosten = streckeNum * 0.37;
        break;

      case 'Schweiz':
        // Calculate in CHF and convert to EUR
        const mautCHF = streckeNum * gewichtNum * 0.03;
        mautkosten = mautCHF * 1.05; // Convert CHF to EUR
        break;
    }

    setResult(mautkosten);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-black">Maut-Kalkulator</h1>
        
        <div className="space-y-6">
          {/* Input Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Land auswählen
              </label>
              <select
                name="land"
                value={formData.land}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent bg-white"
              >
                <option value="Deutschland">Deutschland</option>
                <option value="Österreich">Österreich</option>
                <option value="Schweiz">Schweiz</option>
              </select>
            </div>

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
                min="0"
                step="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fahrzeuggewicht (in Tonnen)
              </label>
              <input
                type="number"
                name="gewicht"
                value={formData.gewicht}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 40"
                min="0"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anzahl der Achsen
              </label>
              <input
                type="number"
                name="achsen"
                value={formData.achsen}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 3"
                min="2"
                max="6"
                step="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Emissionsklasse
              </label>
              <select
                name="emissionsklasse"
                value={formData.emissionsklasse}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent bg-white"
              >
                <option value="EURO I">EURO I</option>
                <option value="EURO II">EURO II</option>
                <option value="EURO III">EURO III</option>
                <option value="EURO IV">EURO IV</option>
                <option value="EURO V">EURO V</option>
                <option value="EURO VI">EURO VI</option>
              </select>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={calculateMaut}
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Berechnen
            </button>
          </div>

          {/* Results */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-black">Ergebnis</h2>
            <div className="space-y-4">
              {result !== null ? (
                <div className="text-lg">
                  <p className="text-gray-700">
                    Die geschätzten Mautkosten betragen: <span className="font-semibold text-black">{result.toFixed(2)} €</span>
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