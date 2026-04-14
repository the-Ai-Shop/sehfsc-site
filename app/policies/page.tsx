import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policies',
  description:
    'Privacy Policy, Terms and Conditions, and Refunds Policy for the San Elijo Hills Fire Safe Council. Effective March 25, 2025.',
};

export default function PoliciesPage() {
  return (
    <>
      <div data-component="PoliciesHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">Legal</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Policies</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Privacy Policy, Terms and Conditions, and Refunds Policy for the San Elijo Hills Fire Safe Council.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-12 space-y-12">

        {/* Nav anchors */}
        <nav data-component="PoliciesNav.tsx" className="flex flex-wrap gap-3 pb-4 border-b border-[#d4d0c4]" aria-label="Policy sections">
          {[
            { href: '#privacy', label: 'Privacy Policy' },
            { href: '#terms', label: 'Terms and Conditions' },
            { href: '#refunds', label: 'Refunds Policy' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-bold text-[#228B22] hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Privacy Policy */}
        <section id="privacy" data-component="PrivacyPolicy.tsx" className="scroll-mt-20 space-y-5">
          <div>
            <div className="section-divider mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Privacy Policy</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Privacy Policy</h2>
            <p className="font-sans text-sm text-gray-500 mt-1">Effective March 25, 2025</p>
          </div>

          <div className="prose-civic space-y-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Information We Collect</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                The San Elijo Hills Fire Safe Council collects information that you voluntarily provide
                when contacting us through our website, signing up for communications, making donations,
                or submitting Firewise volunteer hours. This may include your name, email address,
                mailing address, phone number, and payment information for donations.
              </p>
              <p className="font-sans text-sm text-gray-700 leading-relaxed mt-2">
                We may also collect non-personally identifiable information through standard web
                analytics, including pages visited, browser type, and referring URLs. This information
                is used solely to improve our website and communications.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">How We Use Your Information</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                Information you provide is used to respond to your inquiries, process donations,
                send newsletters and community bulletins you have requested, coordinate Firewise
                certification activities, and notify you of community wildfire preparedness events.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">We Do Not Sell or Rent Your Information</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                The San Elijo Hills Fire Safe Council does not sell, rent, trade, or otherwise
                transfer your personally identifiable information to outside parties. We do not
                share your information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Payment Processing</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                Online donations are processed through secure third-party payment processors,
                including PayPal and/or Stripe. We do not store your credit card or payment
                account information on our servers. Payment processors operate under their own
                privacy and security policies.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Security</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                We implement reasonable security measures to protect information you provide.
                However, no method of transmission over the internet or electronic storage is
                100% secure. While we strive to protect your information, we cannot guarantee
                absolute security.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Changes to This Policy</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on
                this page with an updated effective date. Continued use of this website after
                changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Contact</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                Questions about this Privacy Policy should be directed to{' '}
                <a href="mailto:info@sehfsc.org" className="text-[#228B22] font-bold hover:underline">
                  info@sehfsc.org
                </a>.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-[#d4d0c4]" />

        {/* Terms and Conditions */}
        <section id="terms" data-component="TermsConditions.tsx" className="scroll-mt-20 space-y-5">
          <div>
            <div className="section-divider mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Terms and Conditions</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Terms and Conditions</h2>
            <p className="font-sans text-sm text-gray-500 mt-1">Effective March 25, 2025</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Purpose of This Website</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                This website is operated by the San Elijo Hills Fire Safe Council, a 501(c)3
                nonprofit organization. It is provided for community education and information
                purposes related to wildfire preparedness, prevention, and emergency response
                in San Elijo Hills and neighboring communities.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Donations</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                Donations made through this website are voluntary and made to support the nonprofit
                mission of the San Elijo Hills Fire Safe Council. All donations are final. Please
                refer to our Refunds Policy below for information about error corrections.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Content Ownership</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                All content on this website — including text, graphics, logos, images, and
                downloadable documents — is the property of the San Elijo Hills Fire Safe Council
                or its content suppliers and is protected by applicable copyright and intellectual
                property laws. Content may not be reproduced or distributed without written
                permission except for non-commercial personal use.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Limitation of Liability</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                The information on this website is provided for general community education
                purposes. The San Elijo Hills Fire Safe Council makes no warranties, expressed
                or implied, about the completeness, accuracy, reliability, or suitability of
                information on this site. In no event shall the SEHFSC be liable for any loss
                or damage arising from reliance on information contained on this website.
              </p>
              <p className="font-sans text-sm text-gray-700 leading-relaxed mt-2">
                Emergency preparedness and evacuation decisions should always follow the direction
                of local fire and law enforcement authorities.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">External Links</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                This website contains links to external websites operated by third parties,
                including government agencies, community organizations, and service providers.
                These links are provided for convenience and information purposes only. The
                San Elijo Hills Fire Safe Council has no control over the content of external
                sites and assumes no responsibility for them.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Contact</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                Questions about these Terms and Conditions should be directed to{' '}
                <a href="mailto:info@sehfsc.org" className="text-[#228B22] font-bold hover:underline">
                  info@sehfsc.org
                </a>.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-[#d4d0c4]" />

        {/* Refunds Policy */}
        <section id="refunds" data-component="RefundsPolicy.tsx" className="scroll-mt-20 space-y-5">
          <div>
            <div className="section-divider mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Refunds Policy</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Refunds Policy</h2>
            <p className="font-sans text-sm text-gray-500 mt-1">Effective March 25, 2025</p>
          </div>

          <div className="space-y-4">
            <div className="bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm p-5">
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">All Donations Are Final</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                All donations made to the San Elijo Hills Fire Safe Council are final and
                non-refundable. As a 501(c)3 nonprofit, donations are considered charitable
                contributions and are not subject to reversal except in the case of documented
                processing errors.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Processing Errors</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                If you believe a donation was processed in error — including duplicate charges or
                incorrect amounts — please contact us within 30 days of the transaction at{' '}
                <a href="mailto:info@sehfsc.org" className="text-[#228B22] font-bold hover:underline">
                  info@sehfsc.org
                </a>{' '}
                with your name, the date of the transaction, and the amount charged. We will
                review the request and respond within 5 business days.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Questions</h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                For all donation-related inquiries, please contact{' '}
                <a href="mailto:info@sehfsc.org" className="text-[#228B22] font-bold hover:underline">
                  info@sehfsc.org
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
