'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [preferred, setPreferred] = useState<'Email' | 'Text'>('Email');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  /*
   * TODO: Replace YOUR_FORM_ID with a real Formspree form ID.
   * The SEHFSC board needs to create a form at https://formspree.io
   * and paste the ID here (e.g. "xrgwnelp").
   * Until then, submission falls back to opening the user's email client.
   */
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        return;
      }
      throw new Error('Formspree returned an error');
    } catch {
      // Fallback: open mailto with form contents
      const name = data.get('name') ?? '';
      const email = data.get('email') ?? '';
      const address = data.get('address') ?? '';
      const phone = data.get('phone') ?? '';
      const message = data.get('message') ?? '';
      const subject = encodeURIComponent('Contact from SEHFSC Website');
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nAddress: ${address}\nPhone: ${phone}\nPreferred: ${preferred}\n\n${message}`
      );
      window.open(`mailto:info@sehfsc.org?subject=${subject}&body=${body}`, '_self');
      setStatus('error');
    }
  }

  return (
    <>
      <div data-component="ContactHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">Get in Touch</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Contact</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-12">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <section data-component="ContactForm.tsx">
            <div className="section-divider mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Residents</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <div className="bg-[#b8770a]/10 border border-[#b8770a]/30 rounded-sm px-4 py-3 mb-5">
              <p className="font-sans text-sm text-gray-800 leading-relaxed">
                <strong>This form is for residents of the San Elijo Hills Fire Hazard Zone.</strong>{' '}
                All others may email{' '}
                <a href="mailto:info@sehfsc.org" className="text-[#228B22] font-bold hover:underline">
                  info@sehfsc.org
                </a>
              </p>
            </div>

            {status === 'success' && (
              <div className="bg-safe-light border border-safe/20 rounded-sm px-4 py-3 mb-5">
                <p className="font-sans text-sm text-green-800 font-bold">
                  Thank you! Your message has been sent. We will be in touch soon.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="bg-[#b8770a]/10 border border-[#b8770a]/30 rounded-sm px-4 py-3 mb-5">
                <p className="font-sans text-sm text-gray-800">
                  Your email client should have opened with your message. If not, please email us
                  directly at{' '}
                  <a href="mailto:info@sehfsc.org" className="text-[#228B22] font-bold hover:underline">
                    info@sehfsc.org
                  </a>.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="form-label">
                  Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="form-field"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="form-field"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="address" className="form-label">
                  Street Address
                  <span className="font-normal text-gray-400 ml-1">(no city/state/zip needed)</span>
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  className="form-field"
                  placeholder="e.g. 123 Oak Tree Lane"
                />
              </div>

              <div>
                <label htmlFor="phone" className="form-label">Cell Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="form-field"
                  placeholder="123-456-7890"
                />
              </div>

              <div>
                <p className="form-label">Preferred Contact Method</p>
                <div className="flex gap-6 mt-1">
                  {(['Email', 'Text'] as const).map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferred_contact"
                        value={method}
                        checked={preferred === method}
                        onChange={() => setPreferred(method)}
                        className="w-4 h-4 accent-[#228B22]"
                        aria-label={`Preferred contact method: ${method}`}
                      />
                      <span className="font-sans text-sm text-gray-700">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message <span className="text-red-500" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="form-field resize-y"
                  aria-required="true"
                />
              </div>

              <p className="font-sans text-xs text-gray-500">
                Your information will not be shared.
              </p>

              <button type="submit" className="btn-primary w-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <section data-component="ContactInfo.tsx">
            <div className="section-divider mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Our Information</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

            <div className="space-y-5">
              <div>
                <p className="font-sans font-bold text-sm text-gray-700 uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:info@sehfsc.org" className="font-sans text-base text-[#228B22] font-bold hover:underline">
                  info@sehfsc.org
                </a>
              </div>

              <div>
                <p className="font-sans font-bold text-sm text-gray-700 uppercase tracking-wide mb-1">Mailing Address</p>
                <address className="font-sans text-sm text-gray-700 not-italic leading-relaxed">
                  San Elijo Hills Fire Safe Council<br />
                  310 South Twin Oaks Valley Road #107-238<br />
                  San Marcos, CA 92078
                </address>
              </div>

              <div>
                <p className="font-sans font-bold text-sm text-gray-700 uppercase tracking-wide mb-2">Follow Us</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'Facebook', href: 'https://facebook.com/sehfsc' },
                    { label: 'Instagram', href: 'https://instagram.com/sehfsc' },
                    { label: 'YouTube', href: 'https://youtube.com/@SEHFSC' },
                    { label: 'Linktree', href: 'https://linktr.ee/sehfsc' },
                  ].map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-[#228B22] font-bold hover:underline"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-safe-light border border-safe/20 rounded-sm p-4 mt-4">
                <p className="font-sans text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">
                  Emergency Resources
                </p>
                <p className="font-sans text-sm text-gray-700 leading-relaxed">
                  For active fire emergencies, do not contact the council directly.
                  Call <strong>911</strong>, register with{' '}
                  <a href="https://www.alertsandiego.org" target="_blank" rel="noopener noreferrer" className="text-[#228B22] font-bold hover:underline">Alert San Diego</a>,
                  and check{' '}
                  <a href="https://www.fire.ca.gov/incidents/" target="_blank" rel="noopener noreferrer" className="text-[#228B22] font-bold hover:underline">CAL FIRE Incidents</a>.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
