'use client';

import React, { useState } from 'react';

const vehicleTypes = [
  { id: 'small', name: 'Kleinwagen' },
  { id: 'medium', name: 'Mittelklasse' },
  { id: 'large', name: 'Oberklasse' },
  { id: 'suv', name: 'SUV' },
  { id: 'van', name: 'Transporter' },
  { id: 'truck', name: 'LKW' }
];

const fuelTypes = [
  { id: 'petrol', name: 'Benzin' },
  { id: 'diesel', name: 'Diesel' },
  { id: 'lpg', name: 'LPG' },
  { id: 'cng', name: 'CNG' },
  { id: 'electric', name: 'Elektro' }
];

// CO₂ emission factors in g/km
const emissionFactors = {
  small: { petrol: 120, diesel: 110, lpg: 100, cng: 90, electric: 0 },
  medium: { petrol: 140, diesel: 130, lpg: 120, cng: 110, electric: 0 },
  large: { petrol: 180, diesel: 170, lpg: 160, cng: 150, electric: 0 },
  suv: { petrol: 200, diesel: 190, lpg: 180, cng: 170, electric: 0 },
  van: { petrol: 220, diesel: 210, lpg: 200, cng: 190, electric: 0 },
  truck: { petrol: 300, diesel: 290, lpg: 280, cng: 270, electric: 0 }
};

export default function CO2Rechner() {
  const [kmDriven, setKmDriven] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');

  const calculateCO2 = () => {
    const km = parseFloat(kmDriven) || 0;
    const vehicle = selectedVehicle;
    const fuel = selectedFuel;

    if (!vehicle || !fuel) return 0;

    const emissionFactor = emissionFactors[vehicle][fuel];
    const monthlyCO2 = (km * emissionFactor) / 1000; // Convert to kg

    return monthlyCO2.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="container mx-auto max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-black">CO₂-Rechner</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Gefahrene Kilometer pro Monat</label>
            <input
              type="number"
              value={kmDriven}
              onChange={(e) => setKmDriven(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="z.B. 2000"
            />
          </div>
          <div>
            <label className="block text-gray-700">Fahrzeugtyp</label>
            <select
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Bitte wählen</option>
              {vehicleTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Kraftstoffart</label>
            <select
              value={selectedFuel}
              onChange={(e) => setSelectedFuel(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Bitte wählen</option>
              {fuelTypes.map((fuel) => (
                <option key={fuel.id} value={fuel.id}>
                  {fuel.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-8 space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h2 className="text-xl font-semibold text-black mb-2">Ergebnis</h2>
              <p className="text-gray-700">
                Geschätzter CO₂-Ausstoß: {calculateCO2()} kg/Monat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 