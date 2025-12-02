import { NextResponse } from 'next/server';

const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');

    if (!city) {
      return NextResponse.json({ error: 'Wpisz miasto w któtym chcesz zobaczyć pogodę' }, { status: 400 });
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERMAP_API_KEY}&units=metric&lang=pl`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Nie udało się dostać dane o pogodzie' },
        { status: response.status },
      );
    }

    const weatherData = await response.json();

    const filteredData = {
      city: weatherData.name,
      temperature: Math.round(weatherData.main.temp),
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
      windSpeed: weatherData.wind.speed,
    };

    return NextResponse.json(filteredData);
  } catch (error) {
    console.error('Błąd API: ', error);
    return NextResponse.json({ error: 'Błąd servera.' }, { status: 500 });
  }
}
