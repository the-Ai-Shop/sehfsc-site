import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Current Active Fires',
  description:
    'View current active wildfire incidents near San Elijo Hills and San Marcos, CA. Links to CAL FIRE incident map, Watch Duty, and regional fire monitoring resources.',
};

export default function ActiveFiresPage() {
  return (
    <>
      <div data-component="ActiveFiresHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8770a]">Live Information</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Current Active Fires</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Real-time wildfire incident tracking for San Diego County and the state of California.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-8">

        {/* Primary Source */}
        <section data-component="CALFIREIncidents.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Primary Source</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
            CAL FIRE Incident Map
          </h2>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-5">
            The California Department of Forestry and Fire Protection (CAL FIRE) maintains an
            official statewide active incident map. This is the authoritative source for current
            wildfire locations, acreage, containment status, and incident updates across California —
            including San Diego County and the San Elijo Hills area.
          </p>
          <div className="bg-[#0f2e0f] text-white rounded-sm p-5 mb-5">
            <p className="font-sans text-base font-bold mb-3">
              Click below to view the CAL FIRE Incident Map or check your evacuation zone status.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.fire.ca.gov/incidents/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#b8770a] text-white font-sans font-bold text-sm px-6 py-3 rounded-sm hover:bg-[#a06808] transition-colors"
              >
                View CAL FIRE Incident Map
              </a>
              <a
                href="https://protect.genasys.com/search"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#0f2e0f] font-sans font-bold text-sm px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors"
              >
                Check Your Zone Status
              </a>
            </div>
          </div>
          <div className="bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm p-5 mb-5">
            <p className="font-sans text-sm text-gray-600">
              The CAL FIRE map is updated continuously as incidents develop. Each incident entry
              includes location, acres burned, percent contained, structures threatened, and
              evacuation order status.
            </p>
          </div>
          <p className="font-sans text-xs text-gray-500">
            Source: California Department of Forestry and Fire Protection (CAL FIRE). Data is
            maintained and updated directly by CAL FIRE. This page links to the official source —
            the SEHFSC does not host or modify incident data.
          </p>
        </section>

        {/* Additional Tracking Resources */}
        <section data-component="FireTrackingResources.tsx" className="section-card">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Additional Fire Tracking</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Watch Duty',
                desc: 'Real-time fire tracking monitored by volunteers and fire professionals 24/7 during active incidents. Includes evacuation zone overlays and push notifications.',
                href: 'https://app.watchduty.org',
                cta: 'Open Watch Duty',
                note: 'App + web',
              },
              {
                name: 'Alert San Diego',
                desc: 'San Diego County official emergency notification system. Register your address to receive alerts for active incidents, evacuations, and fire watches in your specific area.',
                href: 'https://www.alertsandiego.org',
                cta: 'Register for Alerts',
                note: 'Registration required',
              },
              {
                name: 'Windy.com',
                desc: 'Live wind and weather visualization. Useful for understanding fire behavior and spread direction during active Santa Ana wind events near San Elijo Hills.',
                href: 'https://www.windy.com',
                cta: 'View Wind Map',
                note: 'No registration needed',
              },
              {
                name: 'AirVisual / IQAir',
                desc: 'Real-time air quality index for San Marcos and surrounding zip codes. Monitor smoke conditions when nearby fires are active.',
                href: 'https://www.iqair.com/us/california/san-marcos',
                cta: 'Check Air Quality',
                note: 'San Marcos, CA',
              },
            ].map((resource) => (
              <div key={resource.name} className="bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-serif font-bold text-gray-900">{resource.name}</h3>
                  <span className="font-sans text-xs text-gray-400 flex-shrink-0">{resource.note}</span>
                </div>
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

        {/* Emergency Protocol */}
        <section data-component="ActiveFireEmergency.tsx" className="bg-[#b8770a]/10 border border-[#b8770a]/30 rounded-sm p-5">
          <h2 className="font-serif text-lg font-bold text-gray-900 mb-2">If a Fire Is Active Near San Elijo Hills</h2>
          <div className="space-y-2 mb-3">
            {[
              'Call 911 immediately if you see fire or smoke — do not assume others have reported it.',
              'Check your evacuation zone status at Genasys Protect (EVAC.ORG). San Elijo Hills zones: 0850, 0852, 0854, 0920, 0921.',
              'Monitor Watch Duty and Alert San Diego for real-time evacuation order updates.',
              'Be ready to leave before an evacuation order is issued. Voluntary early departure reduces road congestion.',
              'If ordered to evacuate: leave immediately. Do not delay.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-sans text-xs font-bold text-[#b8770a] flex-shrink-0 mt-0.5">{i + 1}.</span>
                <p className="font-sans text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
          <a
            href="/evacuation"
            className="font-sans font-bold text-sm text-[#228B22] hover:underline"
          >
            Full Evacuation Protocol &rarr;
          </a>
        </section>

        {/* AM Radio */}
        <div data-component="EmergencyRadio.tsx" className="bg-safe-light border border-safe/20 rounded-sm p-4">
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            <strong>No internet during an emergency?</strong> Tune to{' '}
            <strong>AM Newsradio 600 KOGO</strong> for continuous local emergency updates.
            Keep a battery-powered or hand-crank radio in your go-bag.
          </p>
        </div>
      </div>
    </>
  );
}
