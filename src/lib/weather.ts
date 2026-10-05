// Weather for the Home page hero, from Open-Meteo (no key, no account).
// The site fetches it while building, so the first paint already has it, and the
// browser refreshes it later. Both sides use the code in this file.
import { place } from '../data/now';

export type Weather = { temp: number; code: number; day: boolean };

export async function fetchWeather(signal?: AbortSignal): Promise<Weather> {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}` +
    `&current=temperature_2m,weather_code,is_day&temperature_unit=fahrenheit&timezone=${encodeURIComponent(place.timeZone)}`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(String(res.status));
  const { current } = await res.json();
  return { temp: current.temperature_2m, code: current.weather_code, day: current.is_day === 1 };
}

// Used while the site builds (and by the dev server). The answer is kept for 10 minutes, so
// reloading a page in dev does not wait on Open-Meteo every time. Returns null if it fails.
let kept: { at: number; data: Weather } | null = null;
export async function buildTimeWeather(): Promise<Weather | null> {
  if (kept && Date.now() - kept.at < 10 * 60_000) return kept.data;
  try {
    const data = await fetchWeather(AbortSignal.timeout(5000));
    kept = { at: Date.now(), data };
    return data;
  } catch {
    return null;
  }
}

// ---------- icons ----------
const stroke = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
const svg = (inner: string) => `<svg viewBox="0 0 24 24" ${stroke}>${inner}</svg>`;
const body = '<path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2"/>';
export const icons = {
  sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>'),
  moon: svg('<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>'),
  cloud: svg('<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9z"/>'),
  fog: svg(body + '<path d="M16 17H7M17 21H9"/>'),
  rain: svg(body + '<path d="M16 14v6M8 14v6M12 16v6"/>'),
  snow: svg(body + '<path d="M8 15h.01M8 19h.01M12 17h.01M12 21h.01M16 15h.01M16 19h.01" stroke-width="2.2"/>'),
  storm: svg('<path d="M6 16.3A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 .5 9"/><path d="m13 12-3 5h4l-3 5"/>'),
};

// the word for the sentence ("It's 74°F and overcast...") and the icon, from a WMO weather code
export function describe(code: number, day: boolean): { text: string; icon: string } {
  if (code === 0 || code === 1) return { text: 'clear', icon: day ? icons.sun : icons.moon };
  if (code === 2) return { text: 'partly cloudy', icon: icons.cloud };
  if (code === 3) return { text: 'overcast', icon: icons.cloud };
  if (code === 45 || code === 48) return { text: 'foggy', icon: icons.fog };
  if (code >= 51 && code <= 57) return { text: 'drizzling', icon: icons.rain };
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return { text: 'raining', icon: icons.rain };
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return { text: 'snowing', icon: icons.snow };
  if (code >= 95) return { text: 'stormy', icon: icons.storm };
  return { text: '', icon: icons.cloud };
}
