import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support the San Elijo Hills Fire Safe Council — a 501(c)3 nonprofit. Your donation funds wildfire education, defensible space programs, and community preparedness events.',
};

export default function DonatePage() {
  return (
    <>
      <div data-component="DonateHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">501(c)3 Nonprofit</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Support Our Work</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Every dollar goes directly to keeping San Elijo Hills fire safe.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-12 space-y-8">

        {/* Impact Statement */}
        <section data-component="DonateImpact.tsx" className="section-card">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
            Help Us Keep San Elijo Hills Fire Safe
          </h2>
          <p className="font-sans text-sm text-gray-600 mb-4">
            501(c)3 nonprofit -- all donations are tax deductible to the extent allowed by law.
          </p>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
            Your donation directly supports wildfire education, prevention, and emergency
            preparedness efforts in San Elijo Hills and nearby communities. From creating
            defensible space programs to organizing evacuation drills and distributing
            life-saving information — this work keeps your neighborhood safer.
          </p>
          <p className="font-sans text-base text-gray-700 leading-relaxed">
            Together, we can reduce wildfire risk and build a safer, more resilient community.
          </p>
        </section>

        {/* What Donations Fund */}
        <section data-component="DonateUses.tsx" className="section-card">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Where Your Donation Goes</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Wildfire preparedness fairs and community workshops',
              'Defensible space education and outreach materials',
              'Firewise USA certification maintenance for all three zones',
              'Evacuation planning resources and drills',
              'Emergency communications and bulletin distribution',
              'Home hardening awareness campaigns',
            ].map((use) => (
              <div key={use} className="flex items-start gap-3 p-3 bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm">
                <span className="w-2 h-2 rounded-full bg-[#228B22] flex-shrink-0 mt-1.5" aria-hidden="true" />
                <p className="font-sans text-sm text-gray-700">{use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Donate */}
        <section data-component="DonateHow.tsx" className="space-y-4">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">How to Donate</span>
          </div>

          {/* Online */}
          <div className="section-card">
            <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Donate Online</h3>
            <p className="font-sans text-sm text-gray-700 leading-relaxed mb-4">
              Credit card, debit card, and PayPal donations are processed securely through
              Give Lively. Make a one-time or recurring donation online.
            </p>
            <Link href="/payments" className="btn-primary inline-block">
              Donate Securely Online
            </Link>
            <p className="font-sans text-xs text-gray-500 mt-2">
              You will be directed to our secure payment page.
            </p>
          </div>

          {/* Zelle & Venmo Quick Options */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="section-card">
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/images/zelle.png"
                  alt="Zelle"
                  width={60}
                  height={24}
                />
                <h3 className="font-serif text-lg font-bold text-gray-900">Zelle</h3>
              </div>
              <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
                Send directly from your bank app — no fees.
              </p>
              <p className="font-sans text-sm text-gray-700 mb-3">
                <strong>Send to:</strong>{' '}
                <a
                  href="mailto:donations@sehfsc.org"
                  className="text-[#228B22] font-bold hover:underline"
                >
                  donations@sehfsc.org
                </a>
              </p>
              <Link
                href="/payments#zelle"
                className="font-sans text-sm text-[#228B22] font-bold hover:underline"
              >
                View QR code and instructions
              </Link>
            </div>

            <div className="section-card">
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Venmo</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
                Send via the Venmo app — quick and easy.
              </p>
              <p className="font-sans text-sm text-gray-700 mb-3">
                <strong>Username:</strong>{' '}
                <span className="text-[#228B22] font-bold">@sehfsc</span>
              </p>
              <Link
                href="/payments#venmo"
                className="font-sans text-sm text-[#228B22] font-bold hover:underline"
              >
                View QR code and instructions
              </Link>
            </div>
          </div>

          {/* Check */}
          <div className="section-card">
            <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Mail a Check</h3>
            <p className="font-sans text-sm text-gray-700 leading-relaxed mb-3">
              Make checks payable to <strong>San Elijo Hills Fire Safe Council</strong> and mail to:
            </p>
            <address className="font-sans text-sm text-gray-800 not-italic bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm px-4 py-3 inline-block">
              San Elijo Hills Fire Safe Council<br />
              310 South Twin Oaks Valley Road #107-238<br />
              San Marcos, CA 92078
            </address>
          </div>
        </section>

        {/* Tax Notice */}
        <div data-component="DonateTax.tsx" className="bg-safe-light border border-safe/20 rounded-sm p-5">
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            <strong>The San Elijo Hills Fire Safe Council is a 501(c)3 nonprofit organization.</strong>{' '}
            All donations are tax deductible to the extent allowed by law. You will receive a
            donation acknowledgment for your records.
          </p>
        </div>

        {/* Questions */}
        <div data-component="DonateContact.tsx" className="text-center pt-2">
          <p className="font-sans text-sm text-gray-600">
            Questions about donating? <Link href="/contact" className="text-[#228B22] font-bold hover:underline">Contact us</Link> or email{' '}
            <a href="mailto:info@sehfsc.org" className="text-[#228B22] font-bold hover:underline">info@sehfsc.org</a>
          </p>
        </div>
      </div>
    </>
  );
}
