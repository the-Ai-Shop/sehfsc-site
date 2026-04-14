'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

function GiveLivelyWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existing = document.querySelector(
      'script[src*="givelively.org"]'
    );
    if (existing) return;

    const script = document.createElement('script');
    script.src =
      'https://secure.givelively.org/widgets/simple_donation/san-elijo-hills-fire-safe-council-inc.js?show_suggested_amount_buttons=true&suggested_amount_button_1=25&suggested_amount_button_2=50&suggested_amount_button_3=100&suggested_amount_button_4=250';
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div ref={containerRef} data-component="GiveLivelyWidget" />;
}

export default function PaymentsPage() {
  return (
    <>
      <div data-component="PaymentsHeader" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">
              Secure Donations
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Make a Payment</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Choose your preferred method to support the San Elijo Hills Fire Safe Council.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-12 space-y-10">

        {/* Online Donation via Give Lively */}
        <section data-component="PaymentsOnline" className="section-card">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              Donate Online
            </h2>
          </div>
          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-4">
            Make a secure one-time or recurring donation using your credit or debit card.
            We accept Visa, Mastercard, Discover, American Express, and PayPal.
          </p>

          <GiveLivelyWidget />

          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-200">
            <span className="font-sans text-xs text-gray-500">Powered by</span>
            <Image
              src="/images/givelively.png"
              alt="Give Lively"
              width={100}
              height={28}
              className="opacity-70"
            />
          </div>
        </section>

        {/* Zelle */}
        <section id="zelle" data-component="PaymentsZelle" className="section-card scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/zelle.png"
              alt="Zelle"
              width={80}
              height={32}
            />
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              Donate via Zelle
            </h2>
          </div>
          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-4">
            Send your donation directly from your bank app using Zelle. No fees are charged
            to the sender or the council.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-white border border-gray-200 rounded-sm p-3">
              <Image
                src="/images/zelle-qr-cropped.png"
                alt="Zelle QR code — scan to send donation"
                width={180}
                height={180}
              />
            </div>
            <div className="space-y-2">
              <p className="font-sans text-sm text-gray-700">
                <strong>Send to:</strong>{' '}
                <a
                  href="mailto:donations@sehfsc.org"
                  className="text-[#228B22] font-bold hover:underline"
                >
                  donations@sehfsc.org
                </a>
              </p>
              <p className="font-sans text-xs text-gray-500">
                Open your banking app, select &ldquo;Send with Zelle,&rdquo; and enter the
                email above or scan the QR code.
              </p>
            </div>
          </div>
        </section>

        {/* Venmo */}
        <section id="venmo" data-component="PaymentsVenmo" className="section-card scroll-mt-24">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
            Donate via Venmo
          </h2>
          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-4">
            Send a donation through Venmo using our username or by scanning the QR code below.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-white border border-gray-200 rounded-sm p-3">
              <Image
                src="/images/venmo.jpg"
                alt="Venmo QR code — scan to send donation"
                width={180}
                height={180}
              />
            </div>
            <div className="space-y-2">
              <p className="font-sans text-sm text-gray-700">
                <strong>Venmo username:</strong>{' '}
                <span className="text-[#228B22] font-bold">@sehfsc</span>
              </p>
              <p className="font-sans text-xs text-gray-500">
                Open the Venmo app, search for <strong>@sehfsc</strong>, or scan the QR code
                to send your donation.
              </p>
            </div>
          </div>
        </section>

        {/* Tax Notice */}
        <div data-component="PaymentsTax" className="bg-safe-light border border-safe/20 rounded-sm p-5">
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            <strong>
              The San Elijo Hills Fire Safe Council is a 501(c)3 nonprofit organization.
            </strong>{' '}
            All donations are tax deductible to the extent allowed by law. You will receive a
            donation acknowledgment for your records.
          </p>
        </div>

        {/* Back to Donate */}
        <div data-component="PaymentsBack" className="text-center pt-2">
          <Link
            href="/donate"
            className="font-sans text-sm text-[#228B22] font-bold hover:underline"
          >
            Back to Donation Information
          </Link>
        </div>
      </div>
    </>
  );
}
