import type { Metadata } from 'next';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { brand } from '@/lib/brand';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), { ssr: false });

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the board and committees of the San Elijo Hills Fire Safe Council. A 501(c)3 nonprofit protecting San Elijo Hills through education, outreach, and neighborhood coordination.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About the San Elijo Hills Fire Safe Council',
  url: 'https://sehfsc.org/about',
  description:
    'Meet the people and committees behind San Elijo Hills wildfire preparedness.',
  mainEntity: { '@id': 'https://sehfsc.org/#organization' },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Page Header */}
      <div data-component="AboutHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">San Elijo Hills Fire Safe Council</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">About Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-10">

        {/* Mission */}
        <section data-component="Mission.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Our Mission</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="font-sans text-base text-gray-700 leading-relaxed max-w-3xl mb-4">
            The San Elijo Hills Fire Safe Council was formed in March 2025 by homeowners who live
            in the five evacuation zones that cover San Elijo Hills. We are not a government agency,
            a consultant, or an outside organization. Every board member owns a home here and has
            personally gone through the defensible space and Firewise certification process.
          </p>
          <p className="font-sans text-base text-gray-700 leading-relaxed max-w-3xl">
            In our first year, we earned Firewise USA&reg; certification for all three community zones,
            organized two community preparedness events, published a Community Wildfire Protection
            Plan, and created the reporting infrastructure that lets every San Elijo Hills homeowner
            claim the California insurance discount they&apos;re legally owed. That work is not
            finished — it&apos;s ongoing, and it requires your participation to sustain.
          </p>
          <div className="mt-6 mb-2 max-w-md">
            <VideoPlayer />
          </div>
        </section>

        {/* Board */}
        <section data-component="Board.tsx">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Leadership</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
            About the San Elijo Hills Fire Safe Council Board
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { name: 'Lindsey Smith', title: 'President', photo: '/images/lindsey.jpg', video: 'https://youtu.be/xU7b7Hsbr-g' },
              { name: 'Bill Mullins', title: 'Vice President', photo: '/images/bill.jpg' },
              { name: 'Mark Dale', title: 'Treasurer', photo: '/images/mark.jpg' },
              { name: 'Gabe Cohan', title: 'Secretary', photo: '/images/gabe.jpg' },
              { name: 'Peter Brandt', title: 'Committee Coordinator', photo: '/images/peter.jpg' },
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="relative w-[150px] h-[150px] mb-3">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full object-cover w-[150px] h-[150px]"
                  />
                </div>
                <p className="font-sans font-bold text-sm text-gray-900 flex items-center gap-1">
                  {member.name}
                  {member.video && (
                    <a
                      href={member.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${member.name} video`}
                      className="inline-flex items-center"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-600 hover:text-red-700 transition-colors">
                        <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.39.569A2.994 2.994 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.994 2.994 0 002.108 2.117C4.482 20.5 12 20.5 12 20.5s7.518 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  )}
                </p>
                <p className="font-sans text-xs text-gray-500">{member.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Committees */}
        <section data-component="Committees.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Organization</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Committees</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {brand.committees.map((committee) => (
              <div key={committee} className="zone-card">
                <p className="font-sans font-bold text-gray-800 text-sm">{committee}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2025 Milestones — track record proof */}
        <section data-component="Milestones.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">2025 Milestones</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">What the Council Accomplished in Year One</h2>
          <div className="space-y-3">
            {[
              {
                month: 'Mar 2025',
                milestone: 'Official Formation',
                detail: 'San Elijo Hills Fire Safe Council incorporated as a 501(c)3 nonprofit, led by local homeowners.',
              },
              {
                month: 'May 2025',
                milestone: 'National Firewise USA Recognition — All 3 Zones',
                detail: 'Old Creek Ranch and SEH North certified May 16. SEH South + Venzano certified May 22. All three zones of San Elijo Hills now hold official NFPA Firewise USA designation — making San Elijo Hills one of the few fully multi-zone certified communities in San Diego County.',
              },
              {
                month: 'Jun 2025',
                milestone: 'Inaugural Emergency Preparedness Forum',
                detail: 'First community-wide preparedness event held at Double Peak School, covering evacuation planning, defensible space, and the Firewise certification process.',
              },
              {
                month: 'Sep 2025',
                milestone: 'Last Chance Survival Simulation Workshop',
                detail: 'Hands-on evacuation simulation workshop at San Elijo Hills Rec Center — residents practiced go-bag assembly, zone lookup, and Hi-Lo siren recognition.',
              },
              {
                month: 'Dec 2025',
                milestone: 'Community Wildfire Protection Plan Approved',
                detail: 'SEH CWPP finalized — a formal, publicly available risk assessment and mitigation roadmap developed collaboratively with CAL FIRE, San Marcos Fire Department, and community stakeholders.',
              },
            ].map((item) => (
              <div key={item.month} className="flex gap-4 p-4 border border-[#d4d0c4] rounded-sm bg-white">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-sans text-xs font-bold text-[#228B22] uppercase tracking-wide">{item.month}</span>
                </div>
                <div className="flex-1 border-l border-[#228B22]/30 pl-4">
                  <p className="font-sans font-bold text-sm text-gray-900 mb-0.5">{item.milestone}</p>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 501c3 */}
        <section data-component="TaxInfo.tsx" className="bg-safe-light border border-safe/20 rounded-sm p-6">
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            <strong>The San Elijo Hills Fire Safe Council is a 501(c)3 nonprofit organization.</strong>{' '}
            All donations are tax deductible to the extent allowed by law. For questions, contact us at{' '}
            <a href="mailto:info@sehfsc.org" className="text-[#228B22] font-bold hover:underline">
              info@sehfsc.org
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
