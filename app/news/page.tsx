import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates',
  description:
    'San Elijo Hills Fire Safe Council newsletters, press releases, and community announcements. Stay informed on wildfire preparedness in San Elijo Hills.',
};

const newsItems = [
  {
    date: 'January 21, 2026',
    dateISO: '2026-01-21',
    category: 'Community Announcement',
    title: 'Issue 3, Winter 2026 Bulletin',
    summary: 'Council updates, wildfire preparedness resources, and community event recaps from Q4 2025.',
    file: '/news/SEHFSC_Bulletin_2026_Winter.pdf',
  },
  {
    date: 'September 14, 2025',
    dateISO: '2025-09-14',
    category: 'Community Announcement',
    title: 'Issue 2, Fall 2025 Bulletin',
    summary: 'Firewise certification achievements, upcoming workshops, and fall fire season preparation guidance.',
    file: '/news/SEHFSC_Bulletin_2025_Fall_2.pdf',
  },
  {
    date: 'June 4, 2025',
    dateISO: '2025-06-04',
    category: 'Community Announcement',
    title: 'Issue 1, Summer 2025 Bulletin',
    summary: 'Inaugural newsletter covering the council\'s formation, mission, and first community initiatives.',
    file: '/news/SEHFSC_Bulletin_2025-06.pdf',
  },
  {
    date: 'May 22, 2025',
    dateISO: '2025-05-22',
    category: 'Press Release',
    title: 'San Elijo Hills South & Venzano Earn National Firewise USA Recognition',
    summary: 'All three zones of San Elijo Hills achieve official NFPA Firewise USA designation, completing the community-wide certification.',
    file: '/news/20250522_Press_Release_Firewise.pdf',
  },
  {
    date: 'May 16, 2025',
    dateISO: '2025-05-16',
    category: 'Press Release',
    title: 'San Elijo Hills North & Old Creek Ranch Earn National Firewise USA Recognition',
    summary: 'Two of three San Elijo Hills zones receive national recognition, a milestone for community wildfire preparedness.',
    file: '/news/20250516_Press_Release_Firewise.pdf',
  },
  {
    date: 'March 27, 2025',
    dateISO: '2025-03-27',
    category: 'Community Announcement',
    title: 'Official Formation of the San Elijo Hills Fire Safety Council',
    summary: 'Announcement of the council\'s incorporation as a 501(c)3 nonprofit, led by local homeowners committed to wildfire safety.',
    file: '/news/SEHFSC_Newsletter_1.pdf',
  },
];

function PdfIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

export default function NewsPage() {
  return (
    <>
      <div data-component="NewsHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">SEHFSC</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">News &amp; Updates</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Stay informed with our latest newsletters, press releases, and community announcements.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
        <div data-component="NewsList.tsx" className="space-y-3 max-w-3xl">
          {newsItems.map((item) => (
            <article key={item.file} className="section-card hover:border-[#228B22] transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <time dateTime={item.dateISO} className="font-sans text-xs text-gray-500 font-bold">
                      {item.date}
                    </time>
                    <span className="badge">{item.category}</span>
                  </div>
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg font-bold text-gray-900 hover:text-[#228B22] transition-colors"
                  >
                    {item.title}
                  </a>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mt-1">{item.summary}</p>
                </div>
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-1.5 text-[#228B22] hover:text-[#1a6b1a] transition-colors font-sans text-xs font-bold uppercase tracking-wide"
                  aria-label={`Download ${item.title} as PDF`}
                >
                  <PdfIcon />
                  <span className="hidden sm:inline">PDF</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div data-component="NewsSubscribe.tsx" className="mt-10 max-w-3xl bg-safe-light border border-safe/20 rounded-sm p-6">
          <h2 className="font-serif text-lg font-bold text-gray-900 mb-2">Stay Informed</h2>
          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
            Follow us on social media for real-time updates, or contact us to be added to our mailing list.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://facebook.com/sehfsc" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs">
              Facebook
            </a>
            <a href="https://instagram.com/sehfsc" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs">
              Instagram
            </a>
            <a href="https://youtube.com/@SEHFSC" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs">
              YouTube
            </a>
            <a href="https://linktr.ee/sehfsc" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs">
              Linktree
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
