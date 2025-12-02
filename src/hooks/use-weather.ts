import { useState, useCallback } from 'react';

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  icon: string;
  windSpeed: number;
}

interface WeatherHookResult {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
}

export function useWeather(): WeatherHookResult {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (city: string) => {
    if (!city) return;

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const response = await fetch(`/api/weather?city=${city}`);

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Произошла ошибка при получении данных.');
        return;
      }

      setWeather(data as WeatherData);
    } catch (err) {
      console.error('Ошибка сети:', err);
      setError('Ошибка подключения к серверу.');
    } finally {
      setLoading(false);
    }
  }, []);

  return { weather, loading, error, fetchWeather };
}
