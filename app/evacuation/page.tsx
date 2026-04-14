import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Evacuation',
  description:
    'Six-step wildfire evacuation protocol for San Elijo Hills residents. Hi-Lo siren system, Alert San Diego, protective clothing, securing your home, and staying informed during an active evacuation.',
};

const steps = [
  {
    id: 1,
    title: 'Leave Immediately',
    urgency: 'critical',
    body: 'Do not delay. Evacuation orders mean your life is at risk. Wildfires move faster than you expect — wind-driven fires in San Diego County have traveled miles in minutes. Waiting costs lives. Leave when ordered — or before.',
    tip: 'Consider leaving voluntarily before an official order to reduce road congestion and give yourself more time.',
  },
  {
    id: 2,
    title: 'Grab Your Go-Bag',
    urgency: 'high',
    body: 'Your go-bag should already be packed and ready to carry in under two minutes. Do not pack in the moment — you will forget things and lose critical time. If your bag is not ready, leave without it.',
    tip: 'Store your go-bag near the front door or in your vehicle. Review and replenish it every six months.',
  },
  {
    id: 3,
    title: 'Wear Protective Clothing',
    urgency: 'high',
    body: 'Before you leave, put on: long pants, long sleeves, sturdy closed-toe shoes, and — if available — an N95 mask. Even brief smoke exposure during evacuation can cause respiratory harm. Do not wear shorts, sandals, or synthetic fabrics.',
    tip: null,
  },
  {
    id: 4,
    title: 'Secure Your Home (If Time Permits)',
    urgency: 'medium',
    body: 'Only attempt these steps if you have adequate time and can still leave safely:',
    checklist: [
      'Close all windows and doors — do not lock them so firefighters can enter if needed',
      'Leave exterior lights on so your home is visible through smoke',
      'Move flammable patio furniture away from windows and into the garage',
      'Shut off gas at the meter if instructed by authorities',
      'Close all interior doors — compartmentalization slows fire spread inside the home',
      'Close fireplace dampers and vents',
    ],
    tip: 'Do not delay your departure to complete these steps. Leaving is always the priority.',
  },
  {
    id: 5,
    title: 'Stay Informed',
    urgency: 'high',
    body: 'Use these tools while evacuating to monitor conditions, avoid blocked roads, and track fire movement:',
    resources: [
      { name: 'Waze / Google Maps', use: 'Real-time traffic and road closures along evacuation routes' },
      { name: 'Watch Duty', use: 'Active fire location, spread direction, and evacuation zone status' },
      { name: 'Windy.com', use: 'Wind direction and speed — understand where the fire is heading' },
      { name: 'Alert San Diego', use: 'Official evacuation orders and status updates for your zone' },
      { name: 'AM Radio 600 KOGO', use: 'Continuous local emergency coverage — no internet required' },
      { name: 'AirVisual / IQAir', use: 'Air quality index — know when it is safe to return' },
    ],
    tip: null,
  },
  {
    id: 6,
    title: 'Keep Emergency Contacts Informed',
    urgency: 'medium',
    body: 'As soon as you are safely away from the evacuation zone, notify your designated out-of-area family contact. Use a group text — calls may not connect on congested networks. Confirm where each household member is and where you are going.',
    tip: 'Establish your contact protocol in advance. Deciding who to call during an active evacuation adds stress and delays.',
  },
];

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <div
      className={`rounded-sm p-5 border ${
        step.urgency === 'critical'
          ? 'bg-red-50 border-red-300'
          : step.urgency === 'high'
          ? 'bg-[#b8770a]/10 border-[#b8770a]/30'
          : 'bg-white border-[#d4d0c4]'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="step-number flex-shrink-0">{step.id}</div>
        <div className="flex-1">
          <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">{step.body}</p>

          {step.checklist && (
            <ul className="space-y-1.5 mb-3">
              {step.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#228B22] flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <span className="font-sans text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {step.resources && (
            <div className="grid sm:grid-cols-2 gap-2 mb-3">
              {step.resources.map((r) => (
                <div key={r.name} className="bg-white border border-[#d4d0c4] rounded-sm px-3 py-2">
                  <p className="font-sans text-xs font-bold text-gray-900">{r.name}</p>
                  <p className="font-sans text-xs text-gray-500">{r.use}</p>
                </div>
              ))}
            </div>
          )}

          {step.tip && (
            <div className="bg-safe-light border border-safe/20 rounded-sm px-3 py-2">
              <p className="font-sans text-xs text-gray-700 leading-relaxed">
                <strong>Note:</strong> {step.tip}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EvacuationPage() {
  const step1 = steps[0];
  const step2 = steps[1];
  const step3 = steps[2];
  const step4 = steps[3];
  const step5 = steps[4];
  const step6 = steps[5];

  return (
    <>
      <div data-component="EvacuationHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8770a]">Emergency Protocol</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Evacuation</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            When an evacuation order is issued, every second counts. Know what to do before
            you need to do it.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-10">

        {/* Step 1 — LEAVE IMMEDIATELY — large urgent card */}
        <section data-component="EvacuationStep1.tsx" className="bg-red-600 text-white rounded-sm p-6 md:p-8 border-2 border-red-700">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-red-600 flex items-center justify-center font-serif font-bold text-xl">
              1
            </div>
            <div className="flex-1">
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-3">LEAVE IMMEDIATELY</h2>
              <p className="font-sans text-base md:text-lg text-white/90 leading-relaxed mb-4">
                {step1.body}
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="https://protect.genasys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-red-700 font-sans font-bold text-sm px-4 py-2.5 rounded-sm hover:bg-red-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Check Your Zone Status
                </a>
                <a
                  href="https://www.youtube.com/watch?v=J3bIOCih9iQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 text-white font-sans font-bold text-sm px-4 py-2.5 rounded-sm hover:bg-white/30 transition-colors border border-white/40"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hear the Hi-Lo Siren
                </a>
              </div>
              {step1.tip && (
                <div className="bg-white/15 border border-white/30 rounded-sm px-3 py-2">
                  <p className="font-sans text-xs text-white/90 leading-relaxed">
                    <strong>Note:</strong> {step1.tip}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Steps 2-3 — High urgency */}
        <section data-component="EvacuationSteps2-3.tsx" className="space-y-4">
          <StepCard step={step2} />
          <StepCard step={step3} />
        </section>

        {/* Step 4 — Secure Home — medium urgency */}
        <section data-component="EvacuationStep4.tsx">
          <StepCard step={step4} />
        </section>

        {/* Step 5 — Stay Informed with resources grid */}
        <section data-component="EvacuationStep5.tsx">
          <StepCard step={step5} />
        </section>

        {/* Step 6 — Notify Contacts */}
        <section data-component="EvacuationStep6.tsx">
          <StepCard step={step6} />
        </section>

        {/* AM Radio Callout */}
        <div data-component="AMRadioCallout.tsx" className="bg-[#0f2e0f] text-white rounded-sm p-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-[#b8770a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728M9.172 15.828a5 5 0 010-7.072m5.656 0a5 5 0 010 7.072M12 12h.01" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl mb-2">When the Internet Goes Down: AM 600 KOGO</h2>
              <p className="font-sans text-sm text-white/90 leading-relaxed">
                Cell towers and internet service often fail during large wildfires due to power outages
                and equipment damage. AM radio does not depend on internet or cellular infrastructure.
                Tune to <strong>AM 600 KOGO</strong> for continuous local emergency coverage. Keep a
                battery-powered or hand-crank AM radio in your go-bag.
              </p>
            </div>
          </div>
        </div>

        {/* Early Departure Note */}
        <div data-component="EarlyDeparture.tsx" className="bg-[#b8770a] text-white rounded-sm p-5">
          <h2 className="font-serif font-bold text-xl mb-2">You May Leave Before an Official Order</h2>
          <p className="font-sans text-sm text-white/90 leading-relaxed">
            If you see smoke, receive an Evacuation Watch or Warning, or simply feel unsafe —
            you are always allowed to leave voluntarily. Early departure reduces road congestion,
            gives you more time, and removes uncertainty. There is no penalty for leaving early
            and returning once the all-clear is issued.
          </p>
        </div>

        {/* Alert Methods — collapsible preparation content */}
        <details data-component="AlertMethods.tsx" className="section-card group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center justify-between">
              <div>
                <div className="section-divider mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Preparation Reference</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-gray-900">How Evacuation Alerts Are Issued</h2>
              </div>
              <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </summary>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm p-4">
              <h3 className="font-serif font-bold text-gray-900 mb-2">Hi-Lo Warning Siren</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
                The San Marcos Fire Department uses a distinctive <strong>Hi-Lo</strong> siren
                pattern — different from standard emergency sirens — broadcast from patrol vehicles
                moving through affected neighborhoods. If you hear this sound, leave immediately.
                Do not wait for additional confirmation.
              </p>
              <p className="font-sans text-xs text-gray-500">
                The Hi-Lo pattern is unique to wildfire evacuations in this area. Learn to recognize it.
              </p>
            </div>
            <div className="bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm p-4">
              <h3 className="font-serif font-bold text-gray-900 mb-2">Alert San Diego</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
                Register your address at AlertSanDiego.org to receive targeted notifications —
                SMS, voice call, and email — for your specific evacuation zone. Also available
                as the <strong>SD Emergency App</strong> (iOS and Android).
              </p>
              <a
                href="https://www.alertsandiego.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-bold text-sm text-[#228B22] hover:underline"
              >
                Register for Alert San Diego &rarr;
              </a>
            </div>
          </div>
        </details>

        {/* Bottom CTAs */}
        <div data-component="EvacuationLinks.tsx" className="flex flex-wrap gap-3">
          <Link href="/preparation" className="btn-primary">
            Build Your Preparation Plan
          </Link>
          <a
            href="/San Elijo Hills Evac Map.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Evacuation Map (PDF)
          </a>
          <Link href="/active-fires" className="btn-outline">
            Current Active Fires
          </Link>
        </div>
      </div>
    </>
  );
}
