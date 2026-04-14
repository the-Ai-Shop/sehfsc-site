'use client';

import { useEffect, useState } from 'react';

interface EmergencyData {
  active: boolean;
  message: string;
  severity: string;
  link: string;
}

const DISMISS_KEY = 'sehfsc-emergency-dismissed';

export default function EmergencyBanner() {
  const [data, setData] = useState<EmergencyData | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(DISMISS_KEY) === 'true') {
      setDismissed(true);
      return;
    }

    fetch('/emergency.json', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((json: EmergencyData) => setData(json))
      .catch(() => {
        // Fetch failed — render nothing
      });
  }, []);

  if (dismissed || !data?.active || !data.message) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(DISMISS_KEY, 'true');
    }
  };

  return (
    <div
      role="alert"
      className="relative w-full text-white font-sans"
      style={{ backgroundColor: '#c0392b' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap min-w-0">
          {/* Warning icon */}
          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>

          <span className="text-sm font-bold tracking-wide uppercase">
            {data.message}
          </span>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="/evacuation"
            className="text-xs font-bold uppercase tracking-wide underline underline-offset-2 hover:text-white/80 transition-colors"
          >
            Evacuation Info
          </a>
          <span className="text-white/40">|</span>
          <a
            href="https://protect.genasys.com/search?loc=San+Elijo+Hills%2C+San+Marcos%2C+CA&latlon=33.1192%2C-117.1658&z=13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-wide underline underline-offset-2 hover:text-white/80 transition-colors"
          >
            Genasys Protect
          </a>

          <button
            onClick={handleDismiss}
            className="ml-2 p-1 text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss emergency banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
