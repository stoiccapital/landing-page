'use client';

import React, { useState } from 'react';

export default function Fahrerbewertung() {
  const [formData, setFormData] = useState({
    umsatz: '',
    beschwerden: '',
    punktlichkeit: '',
    bewertung: ''
  });

  const [results, setResults] = useState<{
    gesamtpunkte: number | null;
    umsatzPunkte: number | null;
    punktlichkeitPunkte: number | null;
    bewertungPunkte: number | null;
    beschwerdenAbzug: number | null;
  }>({
    gesamtpunkte: null,
    umsatzPunkte: null,
    punktlichkeitPunkte: null,
    bewertungPunkte: null,
    beschwerdenAbzug: null
  });

  const calculateScore = () => {
    const { umsatz, beschwerden, punktlichkeit, bewertung } = formData;
    
    // Convert inputs to numbers
    const umsatzNum = parseFloat(umsatz) || 0;
    const beschwerdenNum = parseInt(beschwerden) || 0;
    const punktlichkeitNum = parseFloat(punktlichkeit) || 0;
    const bewertungNum = parseFloat(bewertung) || 0;

    // Calculate revenue points (max 40)
    let umsatzPunkte = 0;
    if (umsatzNum >= 10000) {
      umsatzPunkte = 40;
    } else if (umsatzNum >= 7500) {
      umsatzPunkte = 30;
    } else if (umsatzNum >= 5000) {
      umsatzPunkte = 20;
    } else if (umsatzNum >= 2500) {
      umsatzPunkte = 10;
    }

    // Calculate punctuality points (max 20)
    let punktlichkeitPunkte = 0;
    if (punktlichkeitNum >= 95) {
      punktlichkeitPunkte = 20;
    } else if (punktlichkeitNum >= 90) {
      punktlichkeitPunkte = 15;
    } else if (punktlichkeitNum >= 85) {
      punktlichkeitPunkte = 10;
    } else if (punktlichkeitNum >= 80) {
      punktlichkeitPunkte = 5;
    }

    // Calculate customer satisfaction points (max 20)
    let bewertungPunkte = 0;
    if (bewertungNum >= 4.5) {
      bewertungPunkte = 20;
    } else if (bewertungNum >= 4) {
      bewertungPunkte = 15;
    } else if (bewertungNum >= 3.5) {
      bewertungPunkte = 10;
    } else if (bewertungNum >= 3) {
      bewertungPunkte = 5;
    }

    // Calculate complaint deduction (max -20)
    let beschwerdenAbzug = 0;
    if (beschwerdenNum >= 3) {
      beschwerdenAbzug = -20;
    } else if (beschwerdenNum === 2) {
      beschwerdenAbzug = -15;
    } else if (beschwerdenNum === 1) {
      beschwerdenAbzug = -10;
    }

    // Calculate total score
    const gesamtpunkte = Math.max(0, Math.min(100, 
      umsatzPunkte + punktlichkeitPunkte + bewertungPunkte + beschwerdenAbzug
    ));

    setResults({
      gesamtpunkte,
      umsatzPunkte,
      punktlichkeitPunkte,
      bewertungPunkte,
      beschwerdenAbzug
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getRatingEmoji = (punkte: number) => {
    if (punkte >= 80) return '🟢';
    if (punkte >= 60) return '🟡';
    return '🔴';
  };

  const getRatingText = (punkte: number) => {
    if (punkte >= 80) return 'Sehr gut';
    if (punkte >= 60) return 'Gut';
    return 'Verbesserung notwendig';
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-black">Fahrerbewertung</h1>
        
        <div className="space-y-8">
          {/* Input Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Umsatz pro Monat (€)
              </label>
              <input
                type="number"
                name="umsatz"
                value={formData.umsatz}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 8500"
                min="0"
                step="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anzahl der Kundenbeschwerden
              </label>
              <input
                type="number"
                name="beschwerden"
                value={formData.beschwerden}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 1"
                min="0"
                step="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pünktlichkeitsrate (%)
              </label>
              <input
                type="number"
                name="punktlichkeit"
                value={formData.punktlichkeit}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 92"
                min="0"
                max="100"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Durchschnittliche Kundenbewertung (1-5 Sterne)
              </label>
              <input
                type="number"
                name="bewertung"
                value={formData.bewertung}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="z.B. 4.5"
                min="1"
                max="5"
                step="0.1"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={calculateScore}
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Berechnen
            </button>
          </div>

          {/* Results */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-black">Ergebnis</h2>
            <div className="space-y-4">
              {results.gesamtpunkte !== null ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">{getRatingEmoji(results.gesamtpunkte)}</span>
                    <p className="text-gray-700">
                      Fahrerbewertung: <span className="font-semibold text-black">{results.gesamtpunkte}</span> von 100 Punkten
                    </p>
                  </div>
                  <p className="text-gray-700 font-medium">{getRatingText(results.gesamtpunkte)}</p>
                  
                  <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                    <p className="text-gray-700">
                      Umsatz: <span className="font-semibold text-black">+{results.umsatzPunkte} Punkte</span>
                    </p>
                    <p className="text-gray-700">
                      Pünktlichkeit: <span className="font-semibold text-black">+{results.punktlichkeitPunkte} Punkte</span>
                    </p>
                    <p className="text-gray-700">
                      Kundenbewertung: <span className="font-semibold text-black">+{results.bewertungPunkte} Punkte</span>
                    </p>
                    {results.beschwerdenAbzug < 0 && (
                      <p className="text-gray-700">
                        Beschwerden: <span className="font-semibold text-red-600">{results.beschwerdenAbzug} Punkte</span>
                      </p>
                    )}
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