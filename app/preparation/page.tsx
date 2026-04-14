import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preparation',
  description:
    'Wildfire preparation guide for San Elijo Hills residents. Evacuation zones 0850, 0852, 0854, 0920, 0921 — how to look up your zone, build an evacuation plan, and assemble an emergency supply kit.',
};

const evacuationZones = ['0850', '0852', '0854', '0920', '0921'];

const monitoringResources = [
  {
    name: 'Alert San Diego',
    when: 'Before, during, and after disasters',
    desc: 'Register your address to receive targeted emergency alerts — evacuation orders, fire watches, road closures — for your specific neighborhood.',
    href: 'https://www.alertsandiego.org',
    app: 'SD Emergency App (iOS + Android)',
    cta: 'Register for Alerts',
  },
  {
    name: 'SDG&E Outage Map',
    when: 'During PSPS and fire events',
    desc: 'Monitor power shutoff status in real time. SDG&E may proactively shut off power in high fire-risk areas during extreme weather. Know before it happens.',
    href: 'https://www.sdge.com/outage-center/check-outage-status',
    app: 'SDG&E App (iOS + Android)',
    cta: 'View Outage Map',
  },
  {
    name: 'CAL FIRE Incident Map',
    when: 'When fires are active',
    desc: 'Official statewide active fire map. Shows location, acreage, containment percentage, and evacuation orders for all current CAL FIRE incidents.',
    href: 'https://www.fire.ca.gov/incidents/',
    app: null,
    cta: 'View Active Fires',
  },
];

const goKitItems = [
  'Prescription medications (minimum 7-day supply)',
  'Change of clothes for each household member',
  'Vision correction devices (glasses, contacts + solution)',
  'Non-perishable food and water (2-day minimum)',
  'Hygiene supplies and hand sanitizer',
  'Important documents in waterproof container (ID, insurance, medical records)',
  'Charged cell phones with portable battery backup',
  'Cash (ATMs may be offline after a disaster)',
  'N95 masks for each household member',
  'Pet food, leash, carrier, and vaccination records if applicable',
];

const evacuationPlanComponents = [
  {
    title: 'Two or More Evacuation Routes',
    detail: 'Map at least two different routes out of San Elijo Hills — roads can close due to fire or congestion. Know which roads connect to Highway 78 and Twin Oaks Valley Road. Download the evacuation map PDF.',
  },
  {
    title: 'Emergency Go-Bag',
    detail: 'Pre-packed and ready to grab in under two minutes. Review and replenish every six months. The checklist below is the minimum — tailor it to your household.',
  },
  {
    title: 'Communications Plan',
    detail: 'Designate an out-of-area family contact. Establish a household reunion meeting location outside your evacuation zone. Create a group text with immediate family and one trusted neighbor. Do not rely on phone calls during an emergency — texts deliver more reliably on congested networks.',
  },
  {
    title: 'Zone Awareness',
    detail: 'Know your evacuation zone number and the zones immediately adjacent. Understand the alert levels: Watch (be ready), Warning (prepare to leave immediately), Order (leave now). San Elijo Hills zones are listed at the top of this page.',
  },
  {
    title: 'Document Protection',
    detail: 'Create a home inventory with photos and videos. Store physical copies of insurance policy, mortgage/deed, vehicle titles, passports, and medical records in a waterproof, fireproof container. Back up digitally to a cloud service you can access from any device.',
  },
];

export default function PreparationPage() {
  return (
    <>
      <div data-component="PreparationHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">Take Action</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Preparation</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Being prepared before a fire occurs is the difference between a controlled evacuation
            and a chaotic one. Know your zone. Have your plan. Pack your bag.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-10">

        {/* Evacuation Zones */}
        <section data-component="EvacuationZones.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8770a]">Know Your Zone</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
            San Diego County Evacuation Zones
          </h2>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
            San Diego County uses a zone-based evacuation system with 2,669 unique zones.
            Your zone determines when and how you receive an evacuation order. The five zones
            that cover San Elijo Hills are:
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {evacuationZones.map((zone) => (
              <div
                key={zone}
                className="zone-card inline-flex items-center px-4 py-2"
              >
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-gray-500 mr-2">Zone</span>
                <span className="font-serif text-xl font-bold text-[#228B22]">{zone}</span>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-gray-600 mb-5 leading-relaxed">
            <strong>Document your zone and the adjacent zones.</strong> A fire moving toward your neighborhood
            may trigger evacuations in neighboring zones first — that is your signal to begin preparing
            to leave immediately.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://protect.genasys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Look Up Your Zone — Genasys Protect
            </a>
            <a
              href="/San Elijo Hills Evac Map.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Evacuation Map (PDF)
            </a>
          </div>
        </section>

        {/* Monitoring Resources */}
        <section data-component="MonitoringResources.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Stay Informed</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">
            Wildfire Monitoring Resources
          </h2>
          <div className="space-y-4">
            {monitoringResources.map((resource) => (
              <div key={resource.name} className="border border-[#d4d0c4] rounded-sm p-4">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif font-bold text-gray-900 text-lg">{resource.name}</h3>
                  <span className="font-sans text-xs text-[#b8770a] font-bold uppercase tracking-wide bg-[#b8770a]/10 px-2 py-0.5 rounded-sm">
                    {resource.when}
                  </span>
                </div>
                <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">{resource.desc}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-bold text-sm text-[#228B22] hover:underline"
                  >
                    {resource.cta} &rarr;
                  </a>
                  {resource.app && (
                    <span className="font-sans text-xs text-gray-400">{resource.app}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evacuation Plan */}
        <section data-component="EvacuationPlan.tsx">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Build Your Plan</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
            Evacuation Plan Components
          </h2>
          <p className="font-sans text-sm text-gray-600 mb-5">
            Keep copies of your completed plan in your vehicle and at home. Review it with every
            household member — including children — before fire season each year.
          </p>
          <div className="space-y-3">
            {evacuationPlanComponents.map((item, i) => (
              <div key={i} className="bg-white border border-[#d4d0c4] rounded-sm p-4">
                <div className="flex items-start gap-3">
                  <div className="step-number flex-shrink-0">{i + 1}</div>
                  <div>
                    <p className="font-sans font-bold text-sm text-gray-900 mb-1">{item.title}</p>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Go-Bag / Supply Kit — collapsible */}
        <details data-component="EmergencyKit.tsx" className="group section-card">
          <summary className="cursor-pointer list-none flex items-center justify-between select-none">
            <div>
              <div className="section-divider mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Emergency Supply Kit</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">Minimum Go-Bag Contents</h2>
              <p className="font-sans text-sm text-gray-500 mt-0.5">10 items — packed and ready in under 2 minutes</p>
            </div>
            <svg className="w-5 h-5 text-[#228B22] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="mt-4">
            <p className="font-sans text-sm text-gray-600 mb-4 leading-relaxed">
              Store near your door or in your vehicle. <strong>Top off your fuel tank</strong> at the start
              of every fire weather watch — gas stations can run out during mass evacuations.
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-4">
              {goKitItems.map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm">
                  <div className="w-4 h-4 rounded-sm border-2 border-[#228B22] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="font-sans text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-safe-light border border-safe/20 rounded-sm p-4">
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                <strong>Electric vehicles:</strong> Keep your EV charged to at least 80% at all times
                during elevated fire weather periods.
              </p>
            </div>
          </div>
        </details>

        {/* Alert Levels — collapsible */}
        <details data-component="AlertLevels.tsx" open className="group section-card">
          <summary className="cursor-pointer list-none flex items-center justify-between select-none">
            <div>
              <h2 className="font-serif text-xl font-bold text-gray-900">Understanding Alert Levels</h2>
              <p className="font-sans text-sm text-gray-500 mt-0.5">Watch → Warning → Order — know what each means</p>
            </div>
            <svg className="w-5 h-5 text-[#228B22] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="mt-4 space-y-3">
            {[
              {
                level: 'Evacuation Watch',
                color: 'bg-yellow-100 border-yellow-400 text-yellow-900',
                badge: 'bg-yellow-400 text-yellow-900',
                action: 'Be ready to leave at a moment\'s notice. Prepare your go-bag, verify your route, and stay tuned to alerts.',
              },
              {
                level: 'Evacuation Warning',
                color: 'bg-orange-100 border-orange-400 text-orange-900',
                badge: 'bg-orange-400 text-white',
                action: 'Prepare to leave immediately. Vulnerable populations — elderly, disabled, those with medical needs or large animals — should leave now.',
              },
              {
                level: 'Evacuation Order',
                color: 'bg-red-100 border-red-400 text-red-900',
                badge: 'bg-red-600 text-white',
                action: 'LEAVE NOW. Your life is at risk. Do not return until authorities confirm the area is safe.',
              },
            ].map((item) => (
              <div key={item.level} className={`border rounded-sm p-4 ${item.color}`}>
                <div className="flex items-start gap-3">
                  <span className={`font-sans text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-sm flex-shrink-0 ${item.badge}`}>
                    {item.level}
                  </span>
                  <p className="font-sans text-sm leading-relaxed">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </details>

        {/* CTA to Evacuation page */}
        <div data-component="PreparationCTA.tsx" className="flex flex-wrap gap-3">
          <Link href="/evacuation" className="btn-primary">
            View Evacuation Protocol
          </Link>
          <Link href="/prevention" className="btn-outline">
            Defensible Space Checklist
          </Link>
        </div>
      </div>
    </>
  );
}
