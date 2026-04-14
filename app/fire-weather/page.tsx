import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Today's Fire Weather",
  description:
    "Current fire weather conditions for San Elijo Hills and San Marcos, CA. SDG&E Weather Awareness System data, wind alerts, and links to real-time monitoring resources.",
};

export default function FireWeatherPage() {
  return (
    <>
      <div data-component="FireWeatherHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8770a]">Live Information</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Today&apos;s Fire Weather</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Monitor current fire weather conditions for San Elijo Hills and the greater San Marcos area.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-8">

        {/* SDG&E */}
        <section data-component="SDGEWidget.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Primary Source</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
            SDG&amp;E Weather Awareness System
          </h2>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-5">
            San Diego Gas &amp; Electric operates one of the most extensive weather monitoring
            networks in the country, specifically designed to track wildfire-relevant conditions
            across San Diego County — including San Elijo Hills and San Marcos.
          </p>
          <div className="bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm p-5 mb-5">
            <p className="font-sans text-sm text-gray-600 mb-3">
              The SDG&amp;E Weather Awareness System provides real-time data on wind speed,
              humidity, and temperature at weather stations throughout the region.
              During high fire-risk periods, SDG&amp;E may implement Public Safety Power Shutoffs
              (PSPS) — monitor their outage map for your neighborhood.
            </p>
            <a
              href="https://www.sdge.com/weather-awareness"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View SDG&amp;E Weather Awareness
            </a>
          </div>

          {/* Mobile: link button instead of iframe */}
          <div className="block md:hidden mb-5">
            <a
              href="https://www.sdgeweather.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              View SDG&amp;E Weather
            </a>
            <p className="font-sans text-xs text-gray-500 mt-2">
              Opens sdgeweather.com in a new tab for the best mobile experience.
            </p>
          </div>

          {/* Desktop: embedded iframe */}
          <div className="hidden md:block border border-[#d4d0c4] rounded-sm overflow-hidden mb-5">
            <iframe
              src="https://www.sdgeweather.com/"
              title="SDG&amp;E Weather Awareness System"
              width="100%"
              height="800"
              className="block w-full"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
            <p className="font-sans text-xs text-gray-500 bg-[#f5f4f0] px-4 py-2 border-t border-[#d4d0c4]">
              Live data loaded from sdgeweather.com. If the widget does not appear,{' '}
              <a
                href="https://www.sdgeweather.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#228B22] font-bold hover:underline"
              >
                view it directly
              </a>.
            </p>
          </div>
          <a
            href="https://www.sdge.com/outage-center/check-outage-status"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#228B22] font-sans font-bold text-sm hover:underline"
          >
            SDG&amp;E Outage Map &rarr;
          </a>
        </section>

        {/* Additional Resources */}
        <section data-component="WeatherResources.tsx" className="section-card">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Additional Monitoring Resources</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Alert San Diego',
                desc: 'Register to receive emergency alerts for your location, including fire weather watches and evacuation orders.',
                href: 'https://www.alertsandiego.org',
                cta: 'Register for Alerts',
              },
              {
                name: 'Windy.com',
                desc: 'Live radar and wind data. Particularly useful for visualizing Santa Ana wind events as they approach.',
                href: 'https://www.windy.com',
                cta: 'View Wind Radar',
              },
              {
                name: 'Watch Duty',
                desc: 'Real-time fire tracking app. Monitored by volunteers and fire professionals 24/7 during active incidents.',
                href: 'https://app.watchduty.org',
                cta: 'Open Watch Duty',
              },
              {
                name: 'CAL FIRE Incidents',
                desc: 'Official CAL FIRE active incident map showing all wildfires statewide.',
                href: 'https://www.fire.ca.gov/incidents/',
                cta: 'View Active Fires',
              },
            ].map((resource) => (
              <div key={resource.name} className="bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm p-4">
                <h3 className="font-serif font-bold text-gray-900 mb-1">{resource.name}</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-3">{resource.desc}</p>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-sm text-[#228B22] hover:underline"
                >
                  {resource.cta} &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Red Flag Warning */}
        <section data-component="RedFlagInfo.tsx" className="bg-[#b8770a]/10 border border-[#b8770a]/30 rounded-sm p-5">
          <h2 className="font-serif text-lg font-bold text-gray-900 mb-2">What Is a Red Flag Warning?</h2>
          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
            A Red Flag Warning is issued by the National Weather Service when weather conditions are
            ideal for wildfire ignition and rapid spread: sustained winds above 25 mph, relative humidity
            below 15%, and dry fuel conditions. San Elijo Hills is particularly vulnerable during
            Santa Ana wind events, which typically occur October through April.
          </p>
          <p className="font-sans text-sm text-gray-700 leading-relaxed font-bold">
            During any Red Flag Warning: review your evacuation plan, charge devices, top off your
            vehicle with fuel, and have your go-bag ready.
          </p>
        </section>
      </div>
    </>
  );
}
