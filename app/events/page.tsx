import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming and past San Elijo Hills Fire Safe Council events — wildfire preparedness fairs, home hardening workshops, evacuation simulations, and community forums.',
};

function CalendarIcon() {
  return (
    <svg className="w-5 h-5 text-[#228B22] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function EventsPage() {
  return (
    <>
      <div data-component="EventsHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">Community Events</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Events</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Workshops, fairs, and forums to help San Elijo Hills residents prepare for wildfire.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-10">

        {/* Upcoming Events */}
        <section data-component="UpcomingEvents.tsx">
          <div className="section-divider mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Upcoming</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          <div className="space-y-4">

            {/* Wildfire Preparedness Fair */}
            <div className="section-card border-l-4 border-[#228B22]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex gap-3">
                  <CalendarIcon />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                      Wildfire Preparedness Fair
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                      <span className="font-sans text-sm text-gray-600 font-bold">May 30, 2026 — 10:00 a.m. to 2:00 p.m.</span>
                      <span className="flex items-center gap-1 font-sans text-sm text-gray-500">
                        <LocationIcon /> Walnut Grove Park
                      </span>
                    </div>
                    <p className="font-sans text-sm text-gray-700 leading-relaxed">
                      Meet vendors, learn about defensible space, home hardening, and connect
                      with the San Elijo Hills Fire Safe Council team. Bring your questions.
                    </p>
                  </div>
                </div>
                <a
                  href="/news/Wildfire_Fair_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline whitespace-nowrap self-start text-center"
                >
                  View Flyer
                </a>
              </div>
            </div>

            {/* Home Hardening Workshop */}
            <div className="section-card border-l-4 border-[#d4d0c4]">
              <div className="flex gap-3">
                <CalendarIcon />
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                    Home Hardening Workshop
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                    <span className="font-sans text-sm text-gray-500 font-bold">Date: TBD</span>
                    <span className="flex items-center gap-1 font-sans text-sm text-gray-500">
                      <LocationIcon /> Location: TBD
                    </span>
                  </div>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    Details to be announced. Follow us on social media or check back here for updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section data-component="PastEvents.tsx">
          <div className="section-divider mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Past Events</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Past Events &amp; Materials</h2>
          <div className="space-y-4">

            {/* Survival Simulation */}
            <div className="section-card">
              <div className="flex gap-3">
                <CalendarIcon />
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                    Last Chance Survival Simulation Workshop
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                    <span className="font-sans text-sm text-gray-600 font-bold">March 5, 2026 — 6:00–9:00 p.m.</span>
                    <span className="flex items-center gap-1 font-sans text-sm text-gray-500">
                      <LocationIcon /> San Elijo Hills Rec Center
                    </span>
                  </div>
                  <div className="aspect-video w-full max-w-2xl mb-3">
                    <iframe
                      src="https://www.youtube.com/embed/pV4PPSjJO-s?start=635"
                      title="Last Chance Survival Simulation Workshop"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-sm border border-[#d4d0c4]"
                    />
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=pV4PPSjJO-s&t=635s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#228B22] font-sans font-bold text-sm hover:underline"
                  >
                    <VideoIcon /> Watch on YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency Preparedness Forum */}
            <div className="section-card">
              <div className="flex gap-3">
                <CalendarIcon />
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                    Inaugural SEH FSC Emergency Preparedness Forum
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                    <span className="font-sans text-sm text-gray-600 font-bold">September 3, 2025 — 5:30 p.m.</span>
                    <span className="flex items-center gap-1 font-sans text-sm text-gray-500">
                      <LocationIcon /> Double Peak School
                    </span>
                  </div>
                  <div className="aspect-video w-full max-w-2xl mb-3">
                    <iframe
                      src="https://www.youtube.com/embed/Rr787bRO-1A"
                      title="Inaugural SEH FSC Emergency Preparedness Forum"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-sm border border-[#d4d0c4]"
                    />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/town_hall_presentation_2025.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#228B22] font-sans font-bold text-sm hover:underline"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      Presentation Slides (PDF)
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=Rr787bRO-1A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#228B22] font-sans font-bold text-sm hover:underline"
                    >
                      <VideoIcon /> Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Updated */}
        <section data-component="EventsStayUpdated.tsx" className="bg-safe-light border border-safe/20 rounded-sm p-6">
          <h2 className="font-serif text-lg font-bold text-gray-900 mb-2">Stay Updated on Events</h2>
          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
            Events are announced through our newsletter, social media, and the SEH HOA communications.
            Contact us to be added to our list, or follow us online.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </section>
      </div>
    </>
  );
}
