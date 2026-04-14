import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quick Access',
  description:
    'Quick access dashboard for San Elijo Hills Fire Safe Council resources — fire weather, active fires, evacuation zones, Firewise reporting, and emergency contacts.',
};

const urgentLinks = [
  {
    label: "Today's Fire Weather",
    sublabel: 'SDG&E Weather Awareness System',
    href: '/fire-weather',
    urgent: true,
  },
  {
    label: 'Current Active Fires',
    sublabel: 'CAL FIRE Incident Map',
    href: '/active-fires',
    urgent: true,
  },
  {
    label: 'Evacuation Zone Lookup',
    sublabel: 'Genasys Protect — EVAC.ORG',
    href: 'https://protect.genasys.com',
    external: true,
    urgent: true,
  },
  {
    label: 'Alert San Diego',
    sublabel: 'Register for emergency alerts',
    href: 'https://www.alertsandiego.org',
    external: true,
    urgent: true,
  },
];

const prepareLinks = [
  { label: 'Zone 0 Checklist', href: '/prevention#zone-0' },
  { label: 'Evacuation Protocol', href: '/evacuation' },
  { label: 'Build Your Prep Plan', href: '/preparation' },
  { label: 'Firewise Reporting', href: '/firewise' },
  { label: 'Programs & Assessments', href: '/programs' },
  { label: 'Download Zone Map', href: '/San Elijo Hills Zone Map.pdf', external: true },
  { label: 'Download Evac Map', href: '/San Elijo Hills Evac Map.pdf', external: true },
  { label: 'Community Resources', href: '/resources' },
];

const emergencyContacts = [
  { label: 'Emergency', number: '911', note: 'Fire, Police, Medical' },
  { label: 'San Marcos Fire Dept', number: '(760) 744-9000', note: 'Non-emergency' },
  { label: 'SDG&E Outage Reporting', number: '1-800-411-7343', note: 'Power outages + PSPS' },
  { label: 'San Diego County OES', number: '(858) 715-2000', note: 'Office of Emergency Services' },
];

export default function DashboardPage() {
  return (
    <>
      <div data-component="DashboardHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">Quick Access</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Resource Dashboard</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Fast access to the most critical fire safety resources for San Elijo Hills residents.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-10">

        {/* Urgent Resources */}
        <section data-component="UrgentResources.tsx">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8770a]">Real-Time</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Live Monitoring</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {urgentLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between p-4 bg-[#b8770a]/10 border border-[#b8770a]/40 rounded-sm hover:bg-[#b8770a]/20 transition-colors group"
              >
                <div>
                  <p className="font-sans font-bold text-sm text-gray-900">{link.label}</p>
                  <p className="font-sans text-xs text-gray-500 mt-0.5">{link.sublabel}</p>
                </div>
                <svg className="w-4 h-4 text-[#b8770a] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Prepare Links */}
        <section data-component="PrepareLinks.tsx">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Prepare</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Preparedness Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {prepareLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between p-3 bg-white border border-[#d4d0c4] rounded-sm hover:border-[#228B22] hover:bg-safe-light transition-colors group"
              >
                <p className="font-sans font-bold text-sm text-gray-900">{link.label}</p>
                <svg className="w-3.5 h-3.5 text-[#228B22] flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Emergency Contacts */}
        <section data-component="EmergencyContacts.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Emergency Contacts</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Key Phone Numbers</h2>
          <div className="overflow-x-auto">
            <table className="table-civic w-full">
              <thead>
                <tr>
                  <th>Agency</th>
                  <th>Phone</th>
                  <th>Use For</th>
                </tr>
              </thead>
              <tbody>
                {emergencyContacts.map((contact) => (
                  <tr key={contact.label}>
                    <td className="font-bold">{contact.label}</td>
                    <td>
                      <a href={`tel:${contact.number.replace(/[^0-9]/g, '')}`} className="text-[#228B22] font-bold hover:underline">
                        {contact.number}
                      </a>
                    </td>
                    <td className="text-gray-500">{contact.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Evacuation Zones Reference */}
        <section data-component="ZoneReference.tsx" className="bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm p-5">
          <h2 className="font-serif text-lg font-bold text-gray-900 mb-2">San Elijo Hills Evacuation Zones</h2>
          <p className="font-sans text-sm text-gray-600 mb-3">
            Your evacuation zone number determines when and how you receive official evacuation orders.
            Know your zone and the zones immediately adjacent.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {['0850', '0852', '0854', '0920', '0921'].map((zone) => (
              <div key={zone} className="zone-card inline-flex items-center px-3 py-1.5">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400 mr-1.5">Zone</span>
                <span className="font-serif text-lg font-bold text-[#228B22]">{zone}</span>
              </div>
            ))}
          </div>
          <a
            href="https://protect.genasys.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-bold text-sm text-[#228B22] hover:underline"
          >
            Look up your specific zone at Genasys Protect &rarr;
          </a>
        </section>

        {/* Firewise CTA */}
        <div data-component="FirewiseCTA.tsx" className="bg-safe-light border border-safe/20 rounded-sm p-5">
          <h2 className="font-serif font-bold text-lg text-gray-900 mb-1">Log Your Firewise Hours</h2>
          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
            California law requires your insurer to offer a premium discount if you live in a
            certified Firewise USA community. All three San Elijo Hills zones are certified.
            Submit your annual hours to maintain certification.
          </p>
          <Link href="/firewise" className="btn-primary">
            Submit Firewise Hours
          </Link>
        </div>
      </div>
    </>
  );
}
