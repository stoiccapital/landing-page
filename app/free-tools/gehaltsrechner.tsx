'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Gehaltsrechner() {
  const [umsatz, setUmsatz] = useState('');
  const [prozentsatz, setProzentsatz] = useState('');
  const [nachtzuschlag, setNachtzuschlag] = useState('');
  const [sonntagszuschlag, setSonntagszuschlag] = useState('');
  const [feiertagszuschlag, setFeiertagszuschlag] = useState('');
  const [verpflegungspauschale, setVerpflegungspauschale] = useState('');
  const [trinkgeld, setTrinkgeld] = useState('');
  const [gesamtgehalt, setGesamtgehalt] = useState(0);
  const [gehalt, setGehalt] = useState(0);
  const [error, setError] = useState('');

  const calculateGehalt = () => {
    const umsatzValue = parseFloat(umsatz) || 0;
    const prozentsatzValue = parseFloat(prozentsatz) || 0;

    if (prozentsatzValue > 100) {
      setError('Prozentsatz darf nicht höher als 100% sein.');
      return;
    }

    setError('');
    const nachtzuschlagValue = parseFloat(nachtzuschlag) || 0;
    const sonntagszuschlagValue = parseFloat(sonntagszuschlag) || 0;
    const feiertagszuschlagValue = parseFloat(feiertagszuschlag) || 0;
    const verpflegungspauschaleValue = parseFloat(verpflegungspauschale) || 0;
    const trinkgeldValue = parseFloat(trinkgeld) || 0;

    const gesamtGehalt = umsatzValue * (prozentsatzValue / 100);
    setGesamtgehalt(gesamtGehalt);

    const gehaltValue = gesamtGehalt - nachtzuschlagValue - sonntagszuschlagValue - feiertagszuschlagValue - verpflegungspauschaleValue - trinkgeldValue;
    setGehalt(gehaltValue);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="container mx-auto max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-black">Gehaltsrechner</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Umsatz (EUR)</label>
            <input
              type="number"
              value={umsatz}
              onChange={(e) => { setUmsatz(e.target.value); }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Prozentsatz (%)</label>
            <input
              type="number"
              value={prozentsatz}
              onChange={(e) => { setProzentsatz(e.target.value); }}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Nachtzuschlag (EUR)</label>
            <input
              type="number"
              value={nachtzuschlag}
              onChange={(e) => { setNachtzuschlag(e.target.value); }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Sonntagszuschlag (EUR)</label>
            <input
              type="number"
              value={sonntagszuschlag}
              onChange={(e) => { setSonntagszuschlag(e.target.value); }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Feiertagszuschlag (EUR)</label>
            <input
              type="number"
              value={feiertagszuschlag}
              onChange={(e) => { setFeiertagszuschlag(e.target.value); }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Verpflegungspauschale (EUR)</label>
            <input
              type="number"
              value={verpflegungspauschale}
              onChange={(e) => { setVerpflegungspauschale(e.target.value); }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Trinkgeld (EUR)</label>
            <input
              type="number"
              value={trinkgeld}
              onChange={(e) => { setTrinkgeld(e.target.value); }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-6">
            <button
              onClick={calculateGehalt}
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
            >
              Berechnen
            </button>
            <h2 className="text-2xl font-bold text-black mt-4">Gehalt: {gehalt.toFixed(2)} EUR</h2>
            <h2 className="text-2xl font-bold text-black mt-4">Gesamtgehalt: {gesamtgehalt.toFixed(2)} EUR</h2>
          </div>
        </div>
      </div>
    </div>
  );
} 