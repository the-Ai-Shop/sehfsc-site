import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PrintButton from '@/components/PrintButton';

export const metadata: Metadata = {
  title: 'Zone 0 — The Noncombustible Zone',
  description:
    'The 0-5 foot noncombustible zone around your home acts as a moat against wildfire embers. Science-based checklist from IBHS and CAL FIRE for San Elijo Hills homeowners. Vegetation, groundcover, fencing, combustible items, and building features.',
};

/* ── Section data ────────────────────────────────────────────────── */

const sections = [
  {
    id: 'vegetation',
    num: 1,
    title: 'Vegetation',
    summary: 'Remove ALL vegetation within 5 feet to bare mineral soil.',
    details: [
      'Remove all grass, artificial turf, weeds, flowers, succulents, cacti, plants, shrubs, bushes, vines, and vegetative debris.',
      'No exceptions — even if irrigated or classified as fire-resistant.',
    ],
    image: '/images/zone0/groundcover-hardscape.webp',
    imageAlt: 'Noncombustible gravel and brick hardscape replacing vegetation around a home foundation',
  },
  {
    id: 'trees',
    num: 2,
    title: 'Trees, Limbs, and Branches',
    summary: 'Remove all trees and overhanging branches within or above Zone 0.',
    details: [
      'Remove all trees, limbs, and branches within the 0-5 foot zone.',
      'This extends vertically to the sky — any branch overhanging Zone 0 (looking straight up) must be removed.',
    ],
    image: '/images/zone0/roof-gutter-view.webp',
    imageAlt: 'View from roofline showing clear space around home with no overhanging branches',
  },
  {
    id: 'groundcover',
    num: 3,
    title: 'Groundcover',
    summary: 'Replace all combustible groundcover with noncombustible hardscape.',
    details: [
      'Remove wood mulch, rubber mulch, pine needles, and exposed weed cloth down to bare mineral soil.',
    ],
    permitted: ['Gravel', 'Pavers', 'River rocks', 'Decomposed granite (DG)', 'Steppingstones', 'Concrete'],
    image: '/images/zone0/noncombustible-base-siding.webp',
    imageAlt: 'Noncombustible 6-inch base siding on stucco home with hardscape groundcover',
  },
  {
    id: 'fencing',
    num: 4,
    title: 'Fences and Retaining Walls',
    summary: 'Remove all combustible fencing materials within 5 feet of the home.',
    details: [
      'Remove all wood, vinyl, and composite fencing — including posts, gates, and retaining walls.',
      'Fire-resistant materials (vinyl, composite, or fire-rated paint) are NOT permitted. Only true noncombustible materials qualify.',
    ],
    permitted: ['Metal — aluminum, chain link, steel, iron', 'Concrete or masonry'],
    image: '/images/zone0/metal-gate-fence.webp',
    imageAlt: 'Metal chain-link gate properly connected to stucco wall as noncombustible fencing',
  },
  {
    id: 'parked-items',
    num: 5,
    title: 'Parked Items',
    summary: 'No vehicles or large motorized equipment within 5 feet of the home.',
    details: [
      'Do not store vehicles, motorcycles, trailers, boats, campers, RVs, ATVs, golf carts, or similar items within 5 feet.',
      'During Red Flag Warnings or extended absences, relocate them at least 30 feet away or store in a closed garage.',
    ],
    image: '/images/zone0/propane-tank-clearance.webp',
    imageAlt: 'Propane tank placed on noncombustible gravel pad with proper clearance from structure',
  },
  {
    id: 'combustible-items',
    num: 6,
    title: 'Combustible Items',
    summary: 'Remove all combustible items from within 5 feet of the home.',
    details: [
      'Remove: firewood, furniture, hanging lamps, window-mounted AC units, large area rugs, combustible privacy dividers, plastic rain barrels, wine barrels, wood planters, sheds, saunas, storage containers, shade screens, and retractable shade screens without noncombustible housing.',
      'Replacement option: Combustible furniture (wood, wicker, plastic) may be replaced with noncombustible-framed alternatives — cast iron, aluminum, or metal.',
    ],
    exceptions: [
      'Movable items (trash/recycle bins, door mats, garden hoses, propane BBQ grills, bird feeders, pet beds, kids\' toys) are permitted but MUST be relocated indoors or 30+ feet away during Red Flag Warnings or extended absences.',
      'Permanent permitted items: TVs, speakers, pet doors, HVAC units, pool pumps, plastic downspout extensions, string lights, retractable shade screens with metal housing, solar panel battery enclosures, irrigation valves.',
    ],
    image: '/images/zone0/under-deck-screening.webp',
    imageAlt: 'Under-deck area with mesh screening installed to prevent ember intrusion and debris accumulation',
  },
];

const buildingFeatures = [
  {
    title: 'Roof',
    desc: 'Class A fire-rated covering required — asphalt shingles, concrete/clay tile, slate, or metal. Wood roofs and plastic corrugated panels are not permitted. Keep roof clear of all vegetative debris.',
    image: '/images/zone0/clean-roof-gutter.webp',
    imageAlt: 'Clean asphalt shingle roof with metal gutters',
  },
  {
    title: 'Gutters',
    desc: 'Must be noncombustible (metal). Clear all vegetative debris regularly. Plus level: add noncombustible gutter guards to prevent debris accumulation.',
    image: '/images/zone0/metal-gutter-guard.webp',
    imageAlt: 'Metal gutter guard installed on roof edge to prevent debris accumulation',
  },
  {
    title: 'Vents',
    desc: 'All vents (roof, attic gable, eave/soffit, under-home) must have flame- and ember-resistant screens or 1/8-inch corrosion-resistant metal mesh. Exception: do not mesh dryer vents — ensure they have functional louvers or flaps instead.',
    image: '/images/zone0/vent-mesh-screen.webp',
    imageAlt: '1/8-inch metal mesh screen installed over foundation vent in stone wall',
  },
  {
    title: '6-Inch Noncombustible Base',
    desc: 'Exterior walls must have at least 6 vertical inches of noncombustible siding at ground level and above any attached horizontal surface (deck, patio). Acceptable: exposed concrete foundation, fiber-cement, brick, stone, stucco, or metal flashing.',
    image: '/images/zone0/fiber-cement-siding.webp',
    imageAlt: 'Fiber-cement siding on exterior wall showing noncombustible material',
  },
  {
    title: 'Eaves and Soffits',
    desc: 'Plus level: enclose exposed eave undersides with noncombustible soffit — fiber-cement, stucco, or 2-inch nominal lumber. Soffit vents must be flame- and ember-resistant or covered with 1/8-inch metal mesh.',
    image: '/images/zone0/enclosed-eave-soffit.webp',
    imageAlt: 'Enclosed eave soffit with recessed lighting and noncombustible materials',
  },
  {
    title: 'Decks and Structures',
    desc: 'Attached patios, decks, stairs, and overhead structures are part of the building footprint. Each needs its own 0-5 foot noncombustible zone measured from outermost posts. Keep surfaces clear of debris, remove combustible furniture, and enclose under-deck areas.',
    image: '/images/zone0/noncombustible-deck.webp',
    imageAlt: 'Noncombustible tile deck with metal cable railing on hillside home',
  },
];

/* ── Page ─────────────────────────────────────────────────────────── */

export default function Zone0Page() {
  return (
    <>
      {/* Hero */}
      <section
        data-component="Zone0Hero.tsx"
        className="relative bg-ash text-sand overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/zone0/wildfire-hillside.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        {/* Diagonal line pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              120deg,
              transparent,
              transparent 60px,
              rgba(200,64,26,0.5) 60px,
              rgba(200,64,26,0.5) 61px
            )`,
          }}
          aria-hidden="true"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-ash/70" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-4 py-12 lg:py-16 text-center">
          <div className="inline-block bg-fire text-white font-sans font-bold text-xs tracking-[0.18em] uppercase px-3 py-1.5 rounded-sm mb-5">
            Wildfire Prepared Home Standard
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-3">
            Zone 0 — The{' '}
            <span className="text-ember">Noncombustible</span>{' '}
            Zone
          </h1>

          <p className="font-sans text-base md:text-lg text-stone max-w-2xl mx-auto leading-relaxed mb-8">
            The first five feet around your home is a{' '}
            <strong className="text-sand">noncombustible moat</strong> that
            prevents wind-driven embers from igniting materials next to your
            structure. This is the single highest-impact action you can take.
          </p>

          {/* Stats row */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 md:gap-12 flex-wrap">
            {[
              { num: '0-5 ft', label: 'Noncombustible zone' },
              { num: '90%', label: 'Homes lost to embers' },
              { num: '6', label: 'Action categories below' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-serif text-3xl md:text-4xl font-bold text-ember">
                  {stat.num}
                </span>
                <span className="block font-sans text-xs tracking-[0.1em] uppercase text-stone mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key concept band */}
      <div
        data-component="Zone0IntroBand.tsx"
        className="bg-fire text-white py-3.5 px-4"
      >
        <p className="max-w-3xl mx-auto text-center font-sans text-sm md:text-base font-semibold leading-relaxed">
          During a wildfire, embers travel miles ahead of the flame front.{' '}
          <em className="not-italic text-[#FFD4B8]">
            What&apos;s within 5 feet of your home determines whether it
            survives.
          </em>
        </p>
      </div>

      {/* How to measure — with annotated photo */}
      <div data-component="Zone0Measurement.tsx" className="bg-white border-b border-site-border">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="font-serif text-xl font-bold text-ash mb-3">
                How to Measure Zone 0
              </h2>
              <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
                The 0-5 Foot Noncombustible Zone is measured{' '}
                <strong>horizontally</strong> from the edge of your home&apos;s
                exterior walls and, if present, from the{' '}
                <strong>outermost posts</strong> of any attached deck, porch, or
                overhead structure — extending outward to five feet.
              </p>
              <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
                This zone also extends <strong>vertically to the sky</strong> — any tree
                branches overhanging Zone 0 must be removed, even if the trunk
                is outside the 5-foot perimeter.
              </p>
              <p className="font-sans text-sm text-stone leading-relaxed">
                If you don&apos;t have a 5-foot setback between your house and
                the property line, you may need to coordinate with your neighbor
                or HOA to achieve this requirement.
              </p>
            </div>
            {/* Annotated 5-foot measurement photo */}
            <div className="rounded-sm overflow-hidden border border-site-border shadow-sm">
              <Image
                src="/images/zone0/zone0-5ft-measurement.webp"
                alt="Annotated photos showing the 5-foot noncombustible zone measured from home exterior walls, with labels indicating the 5-foot perimeter"
                width={800}
                height={640}
                className="w-full h-auto"
              />
              <div className="bg-fire/5 px-4 py-2 border-t border-site-border">
                <p className="font-sans text-xs text-stone">
                  The 5-foot zone is measured horizontally from exterior walls and deck posts. Source: Wildfire Prepared Home
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aerial overview — full width visual break */}
      <div data-component="Zone0Aerial.tsx" className="relative">
        <Image
          src="/images/zone0/aerial-overview.webp"
          alt="Aerial view of a home showing the noncombustible zone perimeter from above"
          width={800}
          height={640}
          className="w-full h-48 md:h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ash/60 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
          <p className="max-w-4xl mx-auto font-sans text-xs text-white/80">
            Aerial perspective: the noncombustible zone surrounds the entire structure, creating a defensible perimeter.
          </p>
        </div>
      </div>

      {/* Action Sections */}
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-12">
        {/* Print + back nav */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <Link
            href="/prevention"
            className="font-sans text-sm text-stone hover:text-ash transition-colors inline-flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Prevention
          </Link>
          <PrintButton />
        </div>

        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-site-border" />
          <span className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-stone whitespace-nowrap">
            Zone 0 Checklist
          </span>
          <div className="flex-1 h-px bg-site-border" />
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              data-component={`Zone0-${section.id}.tsx`}
              className="bg-white border border-site-border rounded-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-site-border">
                <div className="w-8 h-8 rounded-full bg-fire text-white font-serif font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {section.num}
                </div>
                <h2 className="font-serif text-lg font-bold text-ash">
                  {section.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_280px]">
                {/* Content column */}
                <div className="px-5 py-4">
                  {/* Summary callout */}
                  <div className="bg-fire/5 border border-fire/15 rounded-sm px-4 py-3 mb-4">
                    <p className="font-sans text-sm font-semibold text-gray-900">
                      {section.summary}
                    </p>
                  </div>

                  {/* Details */}
                  <ul className="space-y-2 mb-4">
                    {section.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-fire flex-shrink-0 mt-2" aria-hidden="true" />
                        <span className="font-sans text-sm text-gray-700 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Permitted materials */}
                  {section.permitted && (
                    <div className="mb-4">
                      <p className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-safe mb-2">
                        Permitted Noncombustible Materials
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {section.permitted.map((item) => (
                          <span
                            key={item}
                            className="inline-block font-sans text-xs bg-safe-light text-safe border border-safe/20 px-2.5 py-1 rounded-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Exceptions */}
                  {section.exceptions && (
                    <div>
                      <p className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-amber mb-2">
                        Exceptions
                      </p>
                      <ul className="space-y-1.5">
                        {section.exceptions.map((exc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-2" aria-hidden="true" />
                            <span className="font-sans text-xs text-gray-600 leading-relaxed">{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Image column */}
                <div className="px-5 py-4 md:border-l border-t md:border-t-0 border-site-border bg-[#FAFAF8] flex items-center">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    width={280}
                    height={210}
                    className="w-full h-auto rounded-sm"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Building Features ──────────────────────────────────── */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-site-border" />
            <span className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-stone whitespace-nowrap">
              Building Feature Requirements
            </span>
            <div className="flex-1 h-px bg-site-border" />
          </div>

          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-6 max-w-3xl">
            Clearing vegetation and combustibles is half the equation. The
            structure itself must resist ember intrusion at every opening and
            surface. These are required for the Wildfire Prepared Home Base
            designation.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {buildingFeatures.map((feat) => (
              <div
                key={feat.title}
                className="bg-white border border-site-border rounded-sm overflow-hidden hover:shadow-sm transition-shadow"
              >
                <Image
                  src={feat.image}
                  alt={feat.imageAlt}
                  width={400}
                  height={260}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-serif text-base font-bold text-ash mb-2">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/prevention#structural"
            className="inline-flex items-center gap-1.5 font-sans text-sm font-bold text-fire hover:text-fire-dark transition-colors mt-4"
          >
            Full structural hardening details
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ── Designation Levels ─────────────────────────────────── */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-site-border" />
            <span className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-stone whitespace-nowrap">
              Wildfire Prepared Home Designation
            </span>
            <div className="flex-1 h-px bg-site-border" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Base */}
            <div className="bg-white border-2 border-fire/30 rounded-sm overflow-hidden">
              <div className="bg-fire/5 px-5 py-3 border-b border-fire/15">
                <h3 className="font-serif text-lg font-bold text-fire">Base Designation</h3>
                <p className="font-sans text-xs text-stone mt-0.5">Ember defense — the essential level</p>
              </div>
              <div className="px-5 py-4">
                <ul className="space-y-2">
                  {[
                    'Create the 0-5 foot noncombustible zone',
                    'Maintain 30 feet of defensible space',
                    'Upgrade vulnerable building features (roof, gutters, vents, siding)',
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-fire flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-sans text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Plus */}
            <div className="bg-white border-2 border-primary/30 rounded-sm overflow-hidden">
              <div className="bg-safe-light px-5 py-3 border-b border-safe/15">
                <h3 className="font-serif text-lg font-bold text-primary">Plus Designation</h3>
                <p className="font-sans text-xs text-stone mt-0.5">Enhanced protection — radiant heat + direct flame</p>
              </div>
              <div className="px-5 py-4">
                <ul className="space-y-2">
                  {[
                    'All Base requirements plus:',
                    'Enclosed eaves with noncombustible soffit',
                    'Tempered glass skylights and dual-pane windows',
                    'Noncombustible exterior wall covering (all siding)',
                    'Noncombustible decks and gutter guards',
                    'No detached structures within 30 feet',
                  ].map((req, i) => (
                    <li key={req} className="flex items-start gap-2">
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${i === 0 ? 'text-stone' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`font-sans text-sm ${i === 0 ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="font-sans text-xs text-stone mt-4 leading-relaxed">
            Based on the latest science from the Insurance Institute for Business &amp; Home Safety (IBHS).
            Learn more and apply at{' '}
            <a
              href="https://wildfireprepared.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fire font-semibold hover:underline"
            >
              wildfireprepared.org
            </a>
          </p>
        </div>

        {/* ── Red Flag Warning Protocol ─────────────────────────── */}
        <div className="mt-10 bg-amber/5 border border-amber/20 rounded-sm p-5 md:p-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h3 className="font-serif text-base font-bold text-ash mb-2">
                Red Flag Warning / Extended Absence Protocol
              </h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
                When a Red Flag Warning is issued or you&apos;ll be away from home
                for an extended period, take these additional steps:
              </p>
              <ul className="space-y-1.5">
                {[
                  'Clear all vegetative debris from the 0-5 foot zone',
                  'Relocate trash/recycle bins, door mats, BBQ grills, and other movable combustible items indoors or 30+ feet away',
                  'Move vehicles, trailers, boats, and RVs at least 30 feet from the home or into a closed garage',
                  'Remove all vegetative debris from roof and gutters',
                  'Move patio furniture cushions, potted plants, and kids\' toys indoors',
                ].map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-2" aria-hidden="true" />
                    <span className="font-sans text-sm text-gray-700 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Sources ────────────────────────────────────────────── */}
        <div className="mt-8 bg-white border border-site-border rounded-sm px-5 py-4">
          <p className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-ash mb-1.5">
            Sources
          </p>
          <p className="font-sans text-sm text-stone leading-relaxed">
            Wildfire Prepared Home 2025 Technical Standard &middot;{' '}
            Insurance Institute for Business &amp; Home Safety (IBHS) &middot;{' '}
            <a
              href="https://wildfireprepared.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fire hover:underline"
            >
              wildfireprepared.org
            </a>{' '}
            &middot;{' '}
            <a
              href="https://www.readyforwildfire.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fire hover:underline"
            >
              CAL FIRE — Ready for Wildfire
            </a>{' '}
            &middot; Board of Forestry &amp; Fire Protection — Zone 0
            Rulemaking (AB 3074)
          </p>
        </div>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <div className="mt-8 bg-ash rounded-sm p-6 md:p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-sand mb-2">
            Completed Your Zone 0 Work?
          </h2>
          <p className="font-sans text-sm text-stone max-w-xl mx-auto leading-relaxed mb-5">
            Every hour of defensible space work counts toward your annual
            Firewise requirement. Log your hours now to maintain our
            community&apos;s certification — and your insurance discount
            eligibility.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/firewise" className="btn-fire">
              Log Your Firewise Hours
            </Link>
            <a
              href="https://wildfireprepared.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fire-outline border-white/30 text-sand hover:bg-white/10 hover:text-white"
            >
              Apply for Designation
            </a>
            <a
              href="https://survey123.arcgis.com/share/31e91d1ba02b4da0b6442d09f9a9824f?portalUrl=https://calfire-forestry.maps.arcgis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fire-outline border-white/30 text-sand hover:bg-white/10 hover:text-white"
            >
              CAL FIRE Self-Assessment
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
