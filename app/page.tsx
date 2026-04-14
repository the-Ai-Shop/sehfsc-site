import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'San Elijo Hills Fire Safe Council — Wildfire Preparedness',
  description:
    'The San Elijo Hills Fire Safe Council educates and prepares our community for wildfire emergencies. Know your zone. Complete your Firewise hours. Protect your home.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero — warm atmospheric gradient, not just a dark box */}
      <section
        data-component="Hero.tsx"
        className="relative overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/fire-safety.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        {/* Warm gradient overlay — ember-to-forest transition */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(165deg, rgba(61,55,48,0.92) 0%, rgba(15,46,15,0.88) 50%, rgba(15,46,15,0.94) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Subtle warm vignette at edges */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(61,55,48,0.3) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-16 text-center">
          <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 mb-6">
            San Elijo Hills — San Marcos, CA
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white mb-5 leading-[1.1] max-w-4xl mx-auto">
            Protecting Our Community<br className="hidden md:block" /> from Wildfire
          </h1>
          <p className="font-sans text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Your neighborhood. Your board. Your Firewise certification. The San Elijo Hills Fire
            Safe Council is run by homeowners who live in these five evacuation zones — and we know
            the difference between Zone 0850 and 0921.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/prevention/zone-0" className="inline-block bg-[#C8401A] text-white font-bold px-6 py-3 rounded-sm hover:bg-[#A33316] transition-colors duration-200 text-sm tracking-wide uppercase shadow-lg shadow-[#C8401A]/20">
              Start with Zone 0
            </Link>
            <Link href="/firewise" className="inline-block border-2 border-white/40 text-white font-bold px-6 py-3 rounded-sm hover:bg-white hover:text-[#0f2e0f] transition-colors duration-200 text-sm tracking-wide uppercase">
              Complete Firewise Hours
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Pain Banner — ICP motivator #1 */}
      <div data-component="InsuranceBanner.tsx" className="bg-[#b8770a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-x-3 gap-y-1 text-sm font-sans">
            <span className="font-bold uppercase tracking-wide text-xs flex-shrink-0">California Law:</span>
            <span>Insurance company raised your premium or dropped you? As a Firewise USA certified community, your insurer is <strong>required by state law</strong> to offer you a discount.</span>
            <Link href="/firewise" className="font-bold underline underline-offset-2 hover:no-underline whitespace-nowrap flex-shrink-0">
              Claim it &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Social Proof Strip — with warm background gradient for depth */}
      <div data-component="ProofStrip.tsx" className="border-b border-[#d4d0c4]" style={{ background: 'linear-gradient(180deg, #f0efe9 0%, #f5f4f0 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '3', label: 'Firewise USA Zones Certified', sub: 'OCR + SEH North + SEH South' },
              { stat: 'May 2025', label: 'National Recognition Earned', sub: 'One of few 3-zone communities in SD County' },
              { stat: 'Dec 2025', label: 'Community Wildfire Plan Approved', sub: 'SEH CWPP — published + publicly available' },
              { stat: '501(c)3', label: 'Independent Nonprofit', sub: 'Formed March 2025 by local homeowners' },
            ].map((item) => (
              <div key={item.stat} className="py-1">
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#228B22]">{item.stat}</div>
                <div className="font-sans text-[11px] font-bold text-gray-900 uppercase tracking-wide mt-1">{item.label}</div>
                <div className="font-sans text-[11px] text-gray-500 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zone 0 — The Noncombustible Moat */}
      <section data-component="Zone0Action.tsx" className="bg-white border-b border-[#d4d0c4] py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="border-l-4 border-[#C8401A] pl-4 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8401A]">The Single Highest-Impact Action</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Zone 0: Your Home&apos;s Noncombustible Moat
              </h2>
              <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
                The first five feet around your home must be entirely noncombustible — a
                &ldquo;moat&rdquo; that prevents wind-driven embers from igniting materials
                next to your structure. Most homes are lost not to direct flame, but to embers
                landing on combustible materials within this zone.
              </p>
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-4">
                Based on the{' '}
                <a href="https://wildfireprepared.org" target="_blank" rel="noopener noreferrer" className="text-[#C8401A] font-semibold hover:underline">
                  Wildfire Prepared Home
                </a>{' '}
                Technical Standard from IBHS. Zone 0 work also counts toward your annual Firewise hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/prevention/zone-0" className="inline-block bg-[#C8401A] text-white font-bold px-5 py-2.5 rounded-sm hover:bg-[#A33316] transition-colors duration-200 text-sm tracking-wide uppercase">
                  Full Zone 0 Checklist
                </Link>
                <Link href="/firewise" className="btn-outline">
                  Log Firewise Hours
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { num: 1, text: 'Remove ALL vegetation within 5 feet to bare mineral soil' },
                { num: 2, text: 'Remove trees and branches within or overhanging Zone 0' },
                { num: 3, text: 'Replace combustible groundcover with gravel, pavers, or concrete' },
                { num: 4, text: 'Replace wood/vinyl fencing with metal or concrete within 5 feet' },
                { num: 5, text: 'Remove vehicles and parked items from within 5 feet' },
                { num: 6, text: 'Remove all combustible items — firewood, furniture, planters, storage' },
              ].map((action) => (
                <div key={action.num} className="flex items-start gap-3 bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-[#C8401A] text-white font-serif font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {action.num}
                  </div>
                  <p className="font-sans text-sm text-gray-800 leading-relaxed">{action.text}</p>
                </div>
              ))}
              <p className="font-sans text-xs text-gray-500 pt-1 pl-1">Source: Wildfire Prepared Home Technical Standard (IBHS)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Paths: Prevention, Preparation, Evacuation — with better card treatment */}
      <section data-component="ThreePaths.tsx" className="py-10 md:py-12" style={{ background: 'linear-gradient(180deg, #f5f4f0 0%, #eae8e2 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Your Wildfire Action Plan</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Three Areas Every Resident Must Address</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                label: 'Prevention',
                href: '/prevention',
                desc: 'Defensible space zones, home hardening, vent protection, and fencing recommendations. Zone 0 is the starting point.',
                action: 'Start with Zone 0',
                bg: '/images/prevention.jpg',
              },
              {
                label: 'Preparation',
                href: '/preparation',
                desc: 'Know your evacuation zone (0850, 0852, 0854, 0920, or 0921), build your go-bag, and have a communications plan ready.',
                action: 'Find Your Zone',
                bg: '/images/preparation.jpg',
              },
              {
                label: 'Evacuation',
                href: '/evacuation',
                desc: 'Understand the Hi-Lo siren, Alert San Diego notifications, and your six-step action plan when an order comes.',
                action: 'Know Your Routes',
                bg: '/images/evacuation.jpg',
              },
            ].map((box) => (
              <Link
                key={box.href}
                href={box.href}
                className="group relative block rounded-sm overflow-hidden min-h-[280px] shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${box.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  aria-hidden="true"
                />
                {/* Gradient overlay — bottom-heavy for text readability */}
                <div
                  className="absolute inset-0 group-hover:opacity-95 transition-opacity"
                  style={{
                    background: 'linear-gradient(180deg, rgba(15,46,15,0.55) 0%, rgba(15,46,15,0.88) 60%, rgba(15,46,15,0.95) 100%)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative p-6 flex flex-col justify-end h-full min-h-[280px]">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/50 mb-1 block">Wildfire</span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{box.label}</h3>
                  <p className="font-sans text-sm text-white/80 leading-relaxed mb-4">{box.desc}</p>
                  <span className="inline-block font-sans text-xs font-bold uppercase tracking-wide text-white border border-white/30 px-3 py-1.5 rounded-sm group-hover:bg-white group-hover:text-[#0f2e0f] transition-colors self-start">
                    {box.action} &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Map + Mission */}
      <section data-component="MapMission.tsx" className="bg-white border-b border-[#d4d0c4] py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="section-divider mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Who We Are</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              The Only Organization Doing This Work in San Elijo Hills
            </h2>
            <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
              The San Elijo Hills Fire Safe Council is not a government agency. We&apos;re your
              neighbors — homeowners who got Firewise-certified, negotiated with CAL FIRE and
              San Marcos Fire, wrote a Community Wildfire Protection Plan, and organized the
              workshops that other councils in San Diego County reference.
            </p>
            <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
              That work produced something concrete: all three zones of San Elijo Hills now hold
              official Firewise USA&reg; certification. That certification is the specific legal trigger
              for the California state law requiring your insurer to offer you a premium discount.
              No other council in this neighborhood did that for you — because there was no other council.
            </p>
            <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
              To keep that certification active, each zone needs residents to log one hour of
              preparedness activity per household annually. The board handles the paperwork — you
              submit your hours once a year.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/about" className="btn-primary">Meet the Board</Link>
              <Link href="/firewise" className="btn-outline">Submit Firewise Hours</Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/sanelijo_sanmarcos_ca.png"
              alt="Map of San Elijo Hills and San Marcos, CA showing the three Firewise zones"
              width={600}
              height={450}
              className="w-full rounded-sm border border-[#d4d0c4]"
              style={{
                boxShadow: '0 4px 20px rgba(61,55,48,0.08)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Quick Access Grid — denser, more compact */}
      <section data-component="QuickAccess.tsx" className="max-w-7xl mx-auto px-4 py-10 md:py-12">
        <div className="section-divider mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Quick Access</span>
        </div>
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Everything You Need</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { label: "Today's Fire Weather", href: '/fire-weather', sub: 'SDG&E weather awareness', urgent: true },
            { label: 'Current Active Fires', href: '/active-fires', sub: 'CAL FIRE incident map', urgent: true },
            { label: 'Watch Duty', href: 'https://app.watchduty.org/?lat=33.1192&lng=-117.1658&zoom=12', sub: 'Real-time fire tracking + alerts', urgent: true, external: true },
            { label: 'Know Your Zone', href: 'https://protect.genasys.com/search?loc=San+Elijo+Hills%2C+San+Marcos%2C+CA&latlon=33.1192%2C-117.1658&z=13', sub: 'Genasys Protect — evacuation zones', urgent: true, external: true },
            { label: 'Firewise Reporting', href: '/firewise', sub: 'Submit your annual hours' },
            { label: 'Wildfire Plans', href: '/resources#wildfire-plans', sub: 'CWPP documents + maps' },
            { label: 'News & Bulletins', href: '/news', sub: 'Latest community announcements' },
            { label: 'Upcoming Events', href: '/events', sub: 'Workshops and preparedness fairs' },
            { label: 'Resources', href: '/resources', sub: 'Vendor list, maps, insurance' },
            { label: 'Donate', href: '/donate', sub: 'Support community safety' },
          ].map((item) => {
            const classes = `group block border rounded-sm p-4 transition-all ${
              item.urgent
                ? 'bg-[#C8401A]/5 border-[#C8401A]/25 hover:bg-[#C8401A]/10 hover:border-[#C8401A]/40'
                : 'bg-white border-[#d4d0c4] hover:bg-safe-light/50 hover:border-[#228B22]/30'
            }`;
            const inner = (
              <>
                <div className={`font-serif font-bold text-sm mb-1 ${item.urgent ? 'text-[#C8401A]' : 'text-gray-900'}`}>
                  {item.label}
                  {item.external && (
                    <svg className="inline-block w-3 h-3 ml-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
                <div className="font-sans text-xs text-gray-500">{item.sub}</div>
              </>
            );
            return item.external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={classes}>
                {inner}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={classes}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
