'use client';

import React, { useState } from 'react';

export default function FahrzeugkostenRechner() {
  const [kmPerMonth, setKmPerMonth] = useState('');
  const [consumption, setConsumption] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [maintenance, setMaintenance] = useState('');
  const [insurance, setInsurance] = useState('');
  const [leasing, setLeasing] = useState('');
  const [otherCosts, setOtherCosts] = useState('');
  const [results, setResults] = useState<{
    fuelCost: string;
    totalMonthlyCost: string;
    costPerKm: string;
  } | null>(null);

  const calculateCosts = () => {
    const km = parseFloat(kmPerMonth) || 0;
    const lPer100km = parseFloat(consumption) || 0;
    const pricePerLiter = parseFloat(fuelPrice) || 0;
    const maintenanceCost = parseFloat(maintenance) || 0;
    const insuranceCost = parseFloat(insurance) || 0;
    const leasingCost = parseFloat(leasing) || 0;
    const additionalCosts = parseFloat(otherCosts) || 0;

    // Calculate fuel cost
    const fuelCost = (km / 100) * lPer100km * pricePerLiter;
    
    // Calculate total monthly cost
    const totalMonthlyCost = fuelCost + maintenanceCost + insuranceCost + leasingCost + additionalCosts;
    
    // Calculate cost per km
    const costPerKm = km > 0 ? totalMonthlyCost / km : 0;

    return {
      fuelCost: fuelCost.toFixed(2),
      totalMonthlyCost: totalMonthlyCost.toFixed(2),
      costPerKm: costPerKm.toFixed(2)
    };
  };

  const handleCalculate = () => {
    setResults(calculateCosts());
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-black">Fahrzeugkosten-Rechner</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Kilometer pro Monat</label>
          <input
            type="number"
            value={kmPerMonth}
            onChange={(e) => setKmPerMonth(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="z.B. 2000"
          />
        </div>
        <div>
          <label className="block text-gray-700">Verbrauch (l/100km)</label>
          <input
            type="number"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="z.B. 7.5"
          />
        </div>
        <div>
          <label className="block text-gray-700">Kraftstoffpreis (€/l)</label>
          <input
            type="number"
            value={fuelPrice}
            onChange={(e) => setFuelPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="z.B. 1.85"
          />
        </div>
        <div>
          <label className="block text-gray-700">Wartungskosten (€/Monat)</label>
          <input
            type="number"
            value={maintenance}
            onChange={(e) => setMaintenance(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="z.B. 100"
          />
        </div>
        <div>
          <label className="block text-gray-700">Versicherung (€/Monat)</label>
          <input
            type="number"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="z.B. 150"
          />
        </div>
        <div>
          <label className="block text-gray-700">Leasing (€/Monat)</label>
          <input
            type="number"
            value={leasing}
            onChange={(e) => setLeasing(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="z.B. 300"
          />
        </div>
        <div>
          <label className="block text-gray-700">Sonstige Kosten (€/Monat)</label>
          <input
            type="number"
            value={otherCosts}
            onChange={(e) => setOtherCosts(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="z.B. 50"
          />
        </div>

        <div className="mt-6">
          <button
            onClick={handleCalculate}
            className="w-full bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Berechnen
          </button>
        </div>

        {results && (
          <div className="mt-8 space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h2 className="text-xl font-semibold text-black mb-2">Ergebnisse</h2>
              <p className="text-gray-700">Kraftstoffkosten: {results.fuelCost} €/Monat</p>
              <p className="text-gray-700">Gesamtkosten: {results.totalMonthlyCost} €/Monat</p>
              <p className="text-gray-700">Kosten pro Kilometer: {results.costPerKm} €/km</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 