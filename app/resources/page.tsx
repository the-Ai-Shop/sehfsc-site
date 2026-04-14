import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Community Wildfire Protection Plans, Fire Safe Vendor List, CAL FIRE maps, and insurance discount information for San Elijo Hills residents.',
};

const vendors = {
  a: [
    { name: '2MCFire Inc.', desc: 'Wildfire prevention and mitigation via predictive modeling' },
    { name: 'All Risk Shield', desc: 'Risk assessments, retardant sprays, private firefighting, vegetation management' },
    { name: 'Fire & Rain LLC', desc: 'Home sprinkler and fire-hose spray systems' },
    { name: 'Frontline Wildfire Defense System', desc: 'Smart external sprinkler systems with alerts' },
    { name: 'INVICTA Ready LLC', desc: 'Family disaster preparedness solutions' },
  ],
  c: [
    { name: '2MCFire Inc.', desc: 'Wildfire prevention and mitigation predictive modeling' },
    { name: 'Green Shield Risk Solutions', desc: 'Risk assessment, loss reduction, insurability enhancement' },
  ],
  d: [
    { name: 'Able Sheet Metal, Inc.', desc: 'Roof flashings, edgings, vents' },
    { name: 'Alumission Inc.', desc: 'Powder-coated aluminum fencing and gates' },
    { name: 'Armor Pro Solutions', desc: 'Assessments, roofing, vents, gutter guards, eave boxing, landscaping, windows, siding, decks' },
    { name: 'Brandquard Vents', desc: 'Fire and ember resistant vents' },
    { name: 'Bushfire Battle Systems', desc: 'High-pressure fire pumps, exterior sprinklers, fire defense systems' },
    { name: 'California Fire Safe Solutions', desc: 'Fire behavior modeling, zone zero mitigation, vegetation management, home hardening' },
    { name: 'Clore', desc: 'Non-toxic long-term fire retardant' },
    { name: 'FireFoil', desc: 'Aluminum structure wraps' },
    { name: 'Firestorm Building Products', desc: 'Ember vents, ember mesh, gutter guards' },
    { name: 'Fortress Building Products', desc: 'Steel deck framing' },
    { name: 'Greenfield Fence Inc.', desc: 'Fire resistant fencing' },
    { name: 'Hewn Elements LLC', desc: 'Certified sustainable fire zone wood products' },
    { name: 'MWF Solutions', desc: 'Fire-rated steel fencing' },
    { name: 'Mulholland Brand', desc: 'Aluminum gates and fences' },
    { name: "O'Hagin MFG, Inc.", desc: 'Attic ventilation products and services' },
    { name: 'Primo Fire Pumps', desc: 'Home hardening materials — vents, retardants, pumps' },
    { name: 'SaferWood by Chemco, Inc.', desc: 'Ignition-resistant exterior fire retardant treated wood' },
    { name: 'Vulcan Vents', desc: 'One-hour rated flame and ember safe vents' },
    { name: 'Wildfire Defense Mesh', desc: 'Blocks 98%+ of dangerous embers' },
  ],
  e: [
    { name: 'All Risk Shield', desc: 'Education and resident protection solutions' },
    { name: 'Armor Pro Solutions', desc: 'See Category D for services' },
    { name: 'BrushPros Defensible Space', desc: 'Brush clearing and defensible space creation' },
    { name: 'Fire & Rain LLC', desc: 'Portable off-grid wildfire suppression systems' },
    { name: 'Fireline Defense, LLC', desc: 'Hazard identification, mitigation recommendations, insurance reinstatement assistance' },
    { name: 'Firescape Wildfire Mitigation Services', desc: 'Brush mastication, weed mowing, risk evaluation, vegetation planning' },
    { name: 'Frontline Wildfire Defense System', desc: 'See Category A for services' },
    { name: 'Green Shield Risk Solutions', desc: 'See Category C for services' },
    { name: 'LowPropTax', desc: 'Property tax assessment appeals for high fire risk zones' },
    { name: 'SaferWood by Chemco, Inc.', desc: 'See Category D for services' },
    { name: 'Wuuii, Inc.', desc: 'Software for wildfire adapted homes, businesses, and communities' },
  ],
};

const maps = [
  { label: 'Fire Zone Map', file: 'San Elijo Hills Zone Map.pdf', thumb: '/images/thumbnails/san-elijo-hills-zone-map.jpg' },
  { label: 'Area Communities Map', file: 'San Elijo Hills Area Communities Map.pdf', thumb: '/images/thumbnails/san-elijo-hills-area-communities-map.jpg' },
  { label: 'Evacuation Map', file: 'San Elijo Hills Evac Map.pdf', thumb: '/images/thumbnails/san-elijo-hills-evac-map.jpg' },
  { label: 'Fire Hazard Severity Zones Map', file: 'San Elijo Hills FHSZ Map.pdf', thumb: '/images/thumbnails/san-elijo-hills-fhsz-map.jpg' },
  { label: 'Fire History Map', file: 'San Elijo Hills Fire History Map.pdf', thumb: '/images/thumbnails/san-elijo-hills-fire-history-map.jpg' },
  { label: 'Strategic Project Areas', file: 'San Elijo Hills Strategic Project Areas.pdf', thumb: '/images/thumbnails/san-elijo-hills-strategic-project-areas.jpg' },
];

function DownloadIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <div data-component="ResourcesHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">Community Resources</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Resources</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Plans, maps, vendor lists, and insurance information to help you take action.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-10">

        {/* 1. CWPP */}
        <section id="wildfire-plans" data-component="CWPP.tsx" className="section-card scroll-mt-20">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Section 1</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
            Community Wildfire Protection Plans (CWPP)
          </h2>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-5">
            A Community Wildfire Protection Plan (CWPP) is a plan developed at the community level
            in areas at risk of wildfire. Created collaboratively with community members, fire
            agencies, local government, and stakeholders, CWPPs identify and prioritize fuel
            reduction treatments and recommend measures to reduce structural ignitability.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: 'San Elijo Hills CWPP', sub: 'Approved December 2025', file: 'SEH2025_FireSafeCouncil_CWPP.pdf' },
              { label: 'San Marcos CWPP', sub: '2024', file: '2024_San_Marcos_CWPP.pdf' },
              { label: 'San Diego County WPP', sub: '2019', file: 'SanDiego_WFPP_2019.pdf' },
            ].map((plan) => (
              <a
                key={plan.file}
                href={`/${plan.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm p-4 hover:bg-safe-light hover:border-safe/30 transition-colors group"
              >
                <DownloadIcon />
                <div>
                  <p className="font-sans font-bold text-sm text-[#228B22] group-hover:underline">{plan.label}</p>
                  <p className="font-sans text-xs text-gray-500 mt-0.5">{plan.sub} — PDF</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 2. Vendor List */}
        <section data-component="VendorList.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Section 2</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <h2 className="font-serif text-2xl font-bold text-gray-900">Fire Safe Vendor List</h2>
            <a
              href="/2025_Fire_Safe_Vendor_List.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <DownloadIcon /> Download Full List
            </a>
          </div>
          <p className="font-sans text-sm text-gray-600 mb-4">
            Issued by the California Fire Safe Council. Vendors organized by service category.
          </p>

          <div className="space-y-2">
            {[
              { cat: 'A', label: 'Emergency Response Services & Equipment', items: vendors.a },
              { cat: 'C', label: 'Fire Detection Software, Equipment & Services', items: vendors.c },
              { cat: 'D', label: 'Fire Resistant Building & Materials', items: vendors.d },
              { cat: 'E', label: 'Wildfire Mitigation Platforms & Services', items: vendors.e },
            ].map(({ cat, label, items }) => (
              <details key={cat} className="group border border-[#d4d0c4] rounded-sm">
                <summary className="vendor-category cursor-pointer list-none flex items-center justify-between select-none">
                  <span>Category {cat} — {label} <span className="font-normal text-gray-500">({items.length} vendors)</span></span>
                  <svg className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-3">
                  {items.map((v) => (
                    <div key={v.name} className="vendor-item">
                      <span className="font-bold">{v.name}</span>
                      {v.desc !== 'See Category A for services' && v.desc !== 'See Category C for services' && v.desc !== 'See Category D for services' && (
                        <span className="text-gray-500"> — {v.desc}</span>
                      )}
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 3. CAL FIRE Maps */}
        <section data-component="Maps.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Section 3</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
            CAL FIRE San Elijo Hills Map Set
          </h2>
          <p className="font-sans text-sm text-gray-600 mb-5">
            Six community maps provided by CAL FIRE. Download any map as a PDF.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {maps.map((m) => (
              <a
                key={m.file}
                href={`/${m.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm overflow-hidden hover:border-safe/30 hover:shadow-md transition-all group"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={m.thumb}
                    alt={m.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <p className="font-sans font-bold text-sm text-[#228B22] group-hover:underline px-3 py-2.5 text-center">
                  {m.label}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* 4. Insurance */}
        <section data-component="Insurance.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Section 4</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
            Homeowners Insurance Discounts
          </h2>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
            The California Insurance Commissioner&apos;s <strong>Safer from Wildfires</strong> program
            requires insurance companies to offer discounts to homeowners who take specific wildfire
            mitigation steps. If your home is in a recognized Firewise USA&reg; community — which all
            three zones of San Elijo Hills are — you may qualify for mandatory discounts.
          </p>
          <a
            href="/FAQs_Safer_from_Wildfire.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <DownloadIcon /> Download Insurance Discount FAQs
          </a>
        </section>
      </div>
    </>
  );
}
