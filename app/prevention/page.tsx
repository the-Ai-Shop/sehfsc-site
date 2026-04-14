import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prevention',
  description:
    'Defensible space zones, Zone 0 action checklist, home hardening, vent protection, and fencing guidance for San Elijo Hills homeowners. Zone 0 (0–5 feet) is the single highest-impact action.',
};

const zone0Actions = [
  {
    action: 'Remove all leaves, pine needles, and dead vegetation from your roof and gutters',
    detail: 'Embers collect in gutters and ignite homes from above. Clean gutters at the start of fire season and after any significant wind event.',
  },
  {
    action: 'Replace bark mulch and wood chips with gravel, concrete, or paver stones within 5 feet of structure',
    detail: 'Organic mulch is highly combustible. Non-combustible hardscaping eliminates the ember-to-fuel pathway entirely.',
  },
  {
    action: 'Move firewood and propane tanks to Zone 2 — at least 30 feet from any structure',
    detail: 'Both are common ignition sources during ember showers. They should never be stored against or under the home.',
  },
  {
    action: 'Remove or replace all plants within 5 feet of the house',
    detail: 'If keeping plants, use only low-growing, non-woody, well-irrigated species. No shrubs, no ornamental grasses, no woody groundcover.',
  },
  {
    action: 'Clear all debris and stored items from under decks and porches',
    detail: 'The space beneath decks is a major ignition point. Remove cushions, tools, boxes, and any accumulated debris.',
  },
  {
    action: 'Prune tree branches to at least 10 feet away from chimneys and stovepipes',
    detail: 'Sparks from chimneys can travel to overhanging branches. Maintain clear vertical separation.',
  },
  {
    action: 'Remove vines growing on walls and fences adjacent to the structure',
    detail: 'Vines create a direct fire ladder from the ground to your roof or siding.',
  },
  {
    action: 'Remove or replace flammable patio furniture on wooden decks',
    detail: 'Cushions and synthetic fabrics ignite readily. Use non-combustible furniture, or store cushions inside when leaving during fire weather.',
  },
];

const zone1Actions = [
  'Trim trees so branches have 10-foot horizontal spacing between canopies',
  'Remove dead vegetation — dead grass, shrubs, and branches throughout the zone',
  'Space plants to avoid fire laddering — no continuous pathway of vegetation from ground to tree canopy',
  'Maintain grass height at 4 inches or less through fire season',
];

const zone2Actions = [
  'Thin trees and shrubs to reduce overall fuel density',
  'Maintain clear vegetation breaks — driveways, pathways, mowed areas act as natural fuel breaks',
  'Remove dead branches and understory vegetation',
  'Create 18-inch vertical clearance between grass and lowest tree branches',
];

export default function PreventionPage() {
  return (
    <>
      <div data-component="PreventionHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">Take Action</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Prevention</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Most homes ignite from embers — not direct flames. The actions below create the layers
            of protection that stop embers before they become fires.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-10">

        {/* Intro */}
        <section data-component="PreventionIntro.tsx" className="section-card">
          <blockquote className="font-serif text-xl italic text-[#228B22] border-l-4 border-[#228B22] pl-4 mb-5">
            &ldquo;An ounce of prevention is worth a pound of cure.&rdquo;
          </blockquote>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
            In 2014, the Cocos Fire burned through San Marcos in hours. More than 30 homes were
            destroyed and 2,000+ acres consumed — including neighborhoods that look exactly like
            San Elijo Hills. Many of those homeowners had no defensible space, no ember-resistant
            vents, and wood chips against their foundations. Some were uninsured. Some never came
            back.
          </p>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
            Insurance companies have updated their models since 2014. Non-renewals and premium
            hikes in San Diego&apos;s High Fire Hazard Severity Zones have accelerated — and the
            single most effective response is documented, verifiable home mitigation work. The
            checklist below is what that looks like in practice.
          </p>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-5">
            Prevention has two components: what <strong>individual homeowners</strong> do around their
            property, and what the <strong>community</strong> does collectively through fuel management
            and Firewise participation. Both matter. The checklist below covers the individual side.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/SEH_Fire_History_Map.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#228B22] font-sans font-bold text-sm hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              SEH Fire History Map (PDF)
            </a>
            <a
              href="/SEH_FHSZ_Map.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#228B22] font-sans font-bold text-sm hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              SEH Fire Hazard Severity Zones Map (PDF)
            </a>
          </div>
        </section>

        {/* Zone 0 — Featured */}
        <section id="zone-0" data-component="Zone0.tsx" className="scroll-mt-20">
          <div className="border-l-4 border-[#C8401A] pl-4 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8401A]">Highest Priority</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
            Zone 0 — The First 5 Feet
          </h2>
          <div className="bg-[#C8401A]/8 border border-[#C8401A]/20 rounded-sm px-4 py-3 mb-6">
            <p className="font-sans text-sm text-gray-800 leading-relaxed">
              <strong>Zone 0 is where most homes ignite.</strong> Embers travel up to a mile ahead of a fire
              and land in gutters, on decks, and against foundations. If combustible materials are within
              5 feet of your home, those embers have fuel. Remove the fuel and the ember has nowhere to start.
            </p>
          </div>

          {/* Summary list — quick reference */}
          <div className="space-y-2 mb-5">
            {zone0Actions.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-[#d4d0c4] rounded-sm px-4 py-3">
                <div className="w-6 h-6 rounded-full bg-[#C8401A] text-white font-serif font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="font-sans font-bold text-sm text-gray-900">{item.action}</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-xs text-gray-500 mb-4">
            Source: CAL FIRE Defensible Space Guidelines. Regular maintenance of all Zone 0 items is required — not a one-time task.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/prevention/zone-0" className="btn-fire">
              Full Zone 0 Checklist with Photos
            </Link>
            <a
              href="https://survey123.arcgis.com/share/31e91d1ba02b4da0b6442d09f9a9824f?portalUrl=https://calfire-forestry.maps.arcgis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Self-Assessment Tool (CAL FIRE)
            </a>
            <Link href="/firewise" className="btn-outline">
              These hours count — log them
            </Link>
          </div>
        </section>

        {/* Zone 1 — collapsible */}
        <details data-component="Zone1.tsx" className="group section-card">
          <summary className="cursor-pointer list-none flex items-center justify-between select-none">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">Zone 1 — 5 to 30 Feet</h2>
              <p className="font-sans text-sm text-gray-500 mt-0.5">Reduce fuel density and eliminate fire laddering pathways</p>
            </div>
            <svg className="w-5 h-5 text-[#228B22] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="mt-4">
            <ul className="space-y-2">
              {zone1Actions.map((action) => (
                <li key={action} className="flex items-start gap-3 p-3 bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#228B22] flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <p className="font-sans text-sm text-gray-700">{action}</p>
                </li>
              ))}
            </ul>
          </div>
        </details>

        {/* Zone 2 — collapsible */}
        <details data-component="Zone2.tsx" className="group section-card">
          <summary className="cursor-pointer list-none flex items-center justify-between select-none">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">Zone 2 — 30 to 100 Feet</h2>
              <p className="font-sans text-sm text-gray-500 mt-0.5">Thin fuels and maintain natural and constructed fuel breaks</p>
            </div>
            <svg className="w-5 h-5 text-[#228B22] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="mt-4">
            <ul className="space-y-2 mb-4">
              {zone2Actions.map((action) => (
                <li key={action} className="flex items-start gap-3 p-3 bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#228B22] flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <p className="font-sans text-sm text-gray-700">{action}</p>
                </li>
              ))}
            </ul>
            <a
              href="/defensible_space_zones.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#228B22] font-sans font-bold text-sm hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download Defensible Space Zone Diagram
            </a>
          </div>
        </details>

        {/* Structural — collapsible */}
        <details data-component="Structural.tsx" className="group section-card">
          <summary className="cursor-pointer list-none flex items-center justify-between select-none">
            <div>
              <div className="section-divider mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Structural Hardening</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">Harden the Structure Itself</h2>
              <p className="font-sans text-sm text-gray-500 mt-0.5">Fencing, vents, and gutters — the home&apos;s last line of defense</p>
            </div>
            <svg className="w-5 h-5 text-[#228B22] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="mt-5 grid md:grid-cols-3 gap-5">
            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Fencing</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                Replace wood fences with metal, especially the section immediately adjacent to
                your home. If full replacement is not feasible, install at least 5 feet of metal
                fencing where wood fencing connects to the structure.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Vents</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                Install 1/8-inch mesh metal screens on all vents using ember-resistant designs.
                Eave vents, crawl space vents, and attic vents are common ember entry points.
                Use Class A fire-rated roofing materials when replacing or repairing your roof.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Gutters</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                Install non-combustible gutter covers to prevent debris accumulation. Clean
                gutters regularly, especially during high wildfire threat periods. A gutter
                full of dry leaves is one of the most common home ignition points.
              </p>
            </div>
          </div>
        </details>

        {/* Programs CTA */}
        <section data-component="PreventionPrograms.tsx" className="bg-safe-light border border-safe/20 rounded-sm p-6">
          <h2 className="font-serif text-lg font-bold text-gray-900 mb-2">Free Assessment Available</h2>
          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-4">
            The San Marcos Fire Department offers individual defensible space assessments for
            homeowners. A fire professional walks your property and identifies your highest-priority
            actions. This is a free service.
          </p>
          <Link href="/programs" className="btn-primary">
            Learn About Assessments
          </Link>
        </section>
      </div>
    </>
  );
}
