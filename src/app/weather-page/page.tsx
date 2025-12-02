'use client';

import { useState } from 'react';
import { useWeather } from '@/hooks/use-weather';

export default function WeatherPage() {
  const [cityInput, setCityInput] = useState('');
  const { weather, loading, error, fetchWeather } = useWeather();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather(cityInput);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Prognoza pogody</h1>
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            placeholder="Wprowadz miasto"
            className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            {loading ? '...' : 'Wyszukiwanie'}
          </button>
        </form>
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r">
            <p className="font-medium">Błąd!</p>
            <p className="text-sm">{error}</p>
          </div>
        )}
        {weather && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{weather.city}</h2>

              <div className="flex justify-center items-center my-4">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                  alt={weather.description}
                  className="w-24 h-24 drop-shadow-sm"
                />
              </div>

              <div className="mb-6">
                <span className="text-6xl font-black text-gray-900 tracking-tighter">{weather.temperature}°</span>
                <p className="text-lg text-gray-500 capitalize mt-2 font-medium">{weather.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4 border-t border-blue-200">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Wiatr</span>
                  <span className="text-xl font-semibold text-gray-700">{weather.windSpeed} m/s</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
