import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Firewise Reporting',
  description:
    'Submit your annual Firewise USA volunteer hours for Old Creek Ranch, San Elijo Hills North, or San Elijo Hills South + Venzano. Required to maintain community insurance discount eligibility.',
};

const zones = [
  {
    id: 'ocr',
    name: 'Old Creek Ranch (OCR)',
    description: 'Homes in the Old Creek Ranch community.',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe5KJxXIHm7oubNfK2Xkut3Zpdssi19um09TtAWlv6CLPMbVQ/viewform',
    certFile: '/firewise_ocr_.pdf',
    certLabel: 'Old Creek Ranch Certificate',
  },
  {
    id: 'south',
    name: 'San Elijo Hills South + Venzano',
    description: 'Homes south of San Elijo Hills Road, including Venzano.',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScDl-3P-nvatUcKsSEZCWJyTMbr5ys-wlIh4VXOWq_HBuEUyg/viewform',
    certFile: '/firewise_sehsouth_.pdf',
    certLabel: 'SEH South Certificate',
  },
  {
    id: 'north',
    name: 'San Elijo Hills North',
    description: 'Homes north of San Elijo Hills Road.',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSckxA9951nkipQqiQZFTuVqVKfF642MSVn_q30jnrh1ojEs_g/viewform',
    certFile: '/firewise_sehnorth_.pdf',
    certLabel: 'SEH North Certificate',
  },
];

function DownloadIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function FirewisePage() {
  return (
    <>
      <div data-component="FirewiseHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">Annual Requirement</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Firewise Reporting</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Submit your household&apos;s volunteer hours to maintain our community&apos;s Firewise USA
            certification and your eligibility for insurance discounts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-10">

        {/* Insurance Callout -- ICP motivator */}
        <div data-component="FirewiseInsurance.tsx" className="bg-[#b8770a] text-white rounded-sm p-5">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="font-serif font-bold text-lg mb-1">
                California law requires your insurer to offer you a discount.
              </p>
              <p className="font-sans text-sm text-white/90 leading-relaxed">
                Under the Safer from Wildfires program, insurance companies are required to offer
                premium discounts to homeowners in certified Firewise USA communities. All three San
                Elijo Hills zones are certified. To maintain that certification — and your discount
                eligibility — each zone needs households to log hours annually.
              </p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/20 flex flex-wrap gap-4">
            <a
              href="/Safer_from_Wildfires.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-bold text-sm text-white hover:underline"
            >
              <DownloadIcon /> Safer from Wildfires Program Details
            </a>
            <a
              href="/FAQs_Safer_from_Wildfire.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-bold text-sm text-white hover:underline"
            >
              <DownloadIcon /> Download Insurance Discount FAQ — bring this to your agent
            </a>
          </div>
        </div>

        {/* Certification Timeline -- social proof */}
        <section data-component="CertificationTimeline.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Official Recognition</span>
          </div>
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">San Elijo Hills Firewise Certification Timeline</h2>
          <div className="space-y-3">
            {[
              {
                date: 'May 16, 2025',
                event: 'SEH North + Old Creek Ranch earn National Firewise USA Recognition',
                detail: 'Two of San Elijo Hills\' three zones receive official NFPA Firewise USA\u00ae designation — among the first communities in San Diego County to achieve multi-zone certification.',
                href: '/news/20250516_Press_Release_Firewise.pdf',
              },
              {
                date: 'May 22, 2025',
                event: 'SEH South + Venzano earn National Firewise USA Recognition',
                detail: 'All three zones of San Elijo Hills are now Firewise USA\u00ae certified — triggering the California state law that requires your insurer to offer you a premium discount.',
                href: '/news/20250522_Press_Release_Firewise.pdf',
              },
              {
                date: 'December 2025',
                event: 'Community Wildfire Protection Plan (CWPP) approved',
                detail: 'San Elijo Hills CWPP finalized and approved — a formal risk assessment and mitigation roadmap developed collaboratively with fire agencies, local government, and residents.',
                href: '/SEH2025_FireSafeCouncil_CWPP.pdf',
              },
            ].map((item) => (
              <div key={item.date} className="flex gap-4 p-4 bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm">
                <div className="flex-shrink-0 text-right w-24">
                  <span className="font-sans text-xs font-bold text-[#228B22] uppercase tracking-wide">{item.date}</span>
                </div>
                <div className="flex-1 border-l border-[#228B22]/30 pl-4">
                  <p className="font-sans font-bold text-sm text-gray-900 mb-1">{item.event}</p>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed mb-2">{item.detail}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs font-bold text-[#228B22] hover:underline"
                  >
                    View documentation &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Is Firewise */}
        <section data-component="FirewiseOverview.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">About the Program</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
            What Is Firewise USA&reg;?
          </h2>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
            Firewise USA&reg; is a program that encourages local communities to work together to reduce
            wildfire risk at the neighborhood level. San Elijo Hills holds recognized Firewise USA&reg;
            status across all three zones — one of the few communities in San Diego County to achieve
            full multi-zone certification.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Annual requirement', value: '1 hour per household', sub: 'Valued at approx. $25' },
              { label: 'Recertification', value: 'Every 3 years', sub: 'Board handles paperwork' },
              { label: 'Your commitment', value: 'Submit this form', sub: 'Once per year' },
            ].map((stat) => (
              <div key={stat.label} className="zone-card text-center">
                <p className="font-serif text-2xl font-bold text-[#228B22] mb-1">{stat.value}</p>
                <p className="font-sans text-xs font-bold uppercase tracking-wide text-gray-600">{stat.label}</p>
                <p className="font-sans text-xs text-gray-400 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Qualifying Activities */}
        <section data-component="FirewiseActivities.tsx" className="section-card">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">What Counts as Volunteer Hours?</h2>
          <div className="grid sm:grid-cols-2 gap-2 mb-4">
            {[
              'Brush clearing and vegetation removal around your home',
              'Tree trimming and defensible space maintenance',
              'Attending a community wildfire preparedness event',
              'Community cleanup participation',
              'Watching a wildfire preparedness video or completing an online course',
              'Participating in an evacuation drill',
            ].map((activity) => (
              <div key={activity} className="flex items-start gap-2 p-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#228B22] flex-shrink-0 mt-1.5" aria-hidden="true" />
                <p className="font-sans text-sm text-gray-700">{activity}</p>
              </div>
            ))}
          </div>
          <a
            href="/Firewise_Examples.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#228B22] font-sans font-bold text-sm hover:underline"
          >
            <DownloadIcon /> Download Full Activity Examples &amp; Expense Guide
          </a>
        </section>

        {/* Zone Identifier */}
        <section data-component="ZoneIdentifier.tsx">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Step 1 — Identify Your Zone</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
            Which Zone Do You Live In?
          </h2>
          <div className="bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm p-5 mb-4">
            <div className="grid sm:grid-cols-3 gap-3 text-sm font-sans">
              <div className="zone-card">
                <p className="font-bold text-gray-900 mb-1">Old Creek Ranch</p>
                <p className="text-gray-600 text-xs">The OCR community — use the OCR form below</p>
              </div>
              <div className="zone-card">
                <p className="font-bold text-gray-900 mb-1">SEH South + Venzano</p>
                <p className="text-gray-600 text-xs">Homes south of San Elijo Hills Road</p>
              </div>
              <div className="zone-card">
                <p className="font-bold text-gray-900 mb-1">SEH North</p>
                <p className="text-gray-600 text-xs">Homes north of San Elijo Hills Road</p>
              </div>
            </div>
            <div className="mt-4 rounded-sm overflow-hidden border border-[#d4d0c4]">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1pcUUpbKJjzVhnL1RD1XiJLnGEjiLDgw&ehbc=2E312F"
                width="100%"
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="San Elijo Hills Firewise Zone Map — find your zone"
              />
            </div>
            <p className="font-sans text-xs text-gray-500 mt-3">
              Unsure of your zone? Check the{' '}
              <a href="/San Elijo Hills Zone Map.pdf" target="_blank" rel="noopener noreferrer" className="text-[#228B22] font-bold hover:underline">
                zone map (PDF)
              </a>{' '}
              or contact us at{' '}
              <a href="mailto:info@sehfsc.org" className="text-[#228B22] font-bold hover:underline">info@sehfsc.org</a>.
            </p>
          </div>
        </section>

        {/* Zone Forms */}
        <section data-component="ZoneForms.tsx">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Step 2 — Submit Your Hours</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">
            Reporting Forms — Select Your Zone
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {zones.map((zone) => (
              <div key={zone.id} className="section-card flex flex-col">
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">{zone.name}</h3>
                <p className="font-sans text-xs text-gray-500 mb-4 leading-relaxed">{zone.description}</p>
                <div className="mt-auto space-y-3">
                  <a
                    href={zone.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2 w-full text-center"
                  >
                    <ExternalLinkIcon /> Submit Hours via Google Form
                  </a>
                  <a
                    href={zone.certFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#228B22] font-sans font-bold text-xs hover:underline"
                  >
                    <DownloadIcon /> {zone.certLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-gray-500 mt-3">
            Questions about reporting? Contact{' '}
            <a href="mailto:info@sehfsc.org" className="text-[#228B22] font-bold hover:underline">info@sehfsc.org</a>.
          </p>
        </section>

        {/* Zone Map */}
        <section data-component="FirewiseZoneMap.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Community Map</span>
          </div>
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Firewise Zone Map</h2>
          <p className="font-sans text-sm text-gray-600 mb-4">
            Use this map to identify which Firewise zone your home falls within.
          </p>
          <div className="rounded-sm overflow-hidden border border-[#d4d0c4]">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1pcUUpbKJjzVhnL1RD1XiJLnGEjiLDgw&ehbc=2E312F"
              width="100%"
              height={600}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="San Elijo Hills Firewise Zone Map"
            />
          </div>
        </section>
      </div>
    </>
  );
}
