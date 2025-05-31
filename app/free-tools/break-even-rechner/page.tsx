'use client';

import React, { useState } from 'react';

export default function BreakEvenRechner() {
  const [formData, setFormData] = useState({
    fixkosten: '',
    variableKosten: '',
    einnahmen: ''
  });

  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateBreakEven = () => {
    const { fixkosten, variableKosten, einnahmen } = formData;
    
    // Convert inputs to numbers
    const fixkostenNum = parseFloat(fixkosten) || 0;
    const variableKostenNum = parseFloat(variableKosten) || 0;
    const einnahmenNum = parseFloat(einnahmen) || 0;

    // Calculate profit per km
    const profitPerKm = einnahmenNum - variableKostenNum;

    // Check for invalid scenarios
    if (profitPerKm <= 0) {
      setError('Die Einnahmen pro Kilometer müssen höher sein als die variablen Kosten pro Kilometer.');
      setResult(null);
      return;
    }

    if (fixkostenNum < 0) {
      setError('Die Fixkosten können nicht negativ sein.');
      setResult(null);
      return;
    }

    // Calculate break-even point
    const breakEvenKm = Math.ceil(fixkostenNum / profitPerKm);
    setResult(breakEvenKm);
    setError(null);
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
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-black">Break-Even Rechner</h1>
        
        <div className="space-y-6">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fixkosten pro Monat (€)
              </label>
              <input
                type="number"
                name="fixkosten"
                value={formData.fixkosten}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 5000"
                min="0"
                step="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Variable Kosten pro Kilometer (€)
              </label>
              <input
                type="number"
                name="variableKosten"
                value={formData.variableKosten}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 0.35"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Einnahmen pro Kilometer (€)
              </label>
              <input
                type="number"
                name="einnahmen"
                value={formData.einnahmen}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 0.85"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={calculateBreakEven}
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Berechnen
            </button>
          </div>

          {/* Results */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-black">Ergebnis</h2>
            <div className="space-y-4">
              {error ? (
                <div className="text-red-600 bg-red-50 p-4 rounded-lg">
                  {error}
                </div>
              ) : result !== null ? (
                <div className="text-lg">
                  <p className="text-gray-700">
                    👉 Du musst mindestens <span className="font-semibold text-black">{result.toLocaleString('de-DE')}</span> Kilometer pro Monat fahren, um kostendeckend zu arbeiten.
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