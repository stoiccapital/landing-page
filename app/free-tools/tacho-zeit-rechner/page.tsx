'use client';

import React, { useState } from 'react';

export default function TachoZeitRechner() {
  const [formData, setFormData] = useState({
    fahrzeitHeute: '',
    ruhezeitHeute: '',
    fahrzeitWoche: ''
  });

  const [results, setResults] = useState<{
    warnings: string[];
    isCompliant: boolean;
  }>({
    warnings: [],
    isCompliant: true
  });

  const calculateCompliance = () => {
    const { fahrzeitHeute, ruhezeitHeute, fahrzeitWoche } = formData;
    
    // Convert inputs to numbers
    const fahrzeitHeuteNum = parseFloat(fahrzeitHeute) || 0;
    const ruhezeitHeuteNum = parseFloat(ruhezeitHeute) || 0;
    const fahrzeitWocheNum = parseFloat(fahrzeitWoche) || 0;

    const warnings: string[] = [];

    // Check daily driving time
    if (fahrzeitHeuteNum > 9) {
      warnings.push('Max. 9 Stunden Fahrzeit pro Tag erlaubt');
    }

    // Check daily rest time
    if (ruhezeitHeuteNum < 11) {
      warnings.push('Mindestens 11 Stunden Ruhezeit erforderlich');
    }

    // Check weekly driving time
    if (fahrzeitWocheNum > 56) {
      warnings.push('Max. 56 Stunden Fahrzeit pro Woche erlaubt');
    }

    setResults({
      warnings,
      isCompliant: warnings.length === 0
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
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-black">Tacho-Zeit-Rechner</h1>
        
        <div className="space-y-6">
          {/* Input Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fahrzeit heute (in Stunden)
              </label>
              <input
                type="number"
                name="fahrzeitHeute"
                value={formData.fahrzeitHeute}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 8.5"
                min="0"
                step="0.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ruhezeit heute (in Stunden)
              </label>
              <input
                type="number"
                name="ruhezeitHeute"
                value={formData.ruhezeitHeute}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 11"
                min="0"
                step="0.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fahrzeit diese Woche (in Stunden)
              </label>
              <input
                type="number"
                name="fahrzeitWoche"
                value={formData.fahrzeitWoche}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 45"
                min="0"
                step="0.5"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={calculateCompliance}
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Berechnen
            </button>
          </div>

          {/* Results */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-black">Ergebnis</h2>
            <div className="space-y-4">
              {results.warnings.length > 0 ? (
                <div className="space-y-3">
                  {results.warnings.map((warning, index) => (
                    <div key={index} className="text-red-600 bg-red-50 p-4 rounded-lg">
                      {warning}
                    </div>
                  ))}
                </div>
              ) : results.isCompliant ? (
                <div className="text-green-600 bg-green-50 p-4 rounded-lg">
                  Alle Tacho-Zeiten sind regelkonform.
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