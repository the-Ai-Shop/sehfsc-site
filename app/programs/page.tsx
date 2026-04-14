import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Defensible Space Assessments and the Wildfire Prepared Home™ Designation — programs to help San Elijo Hills residents reduce wildfire risk and qualify for insurance discounts.',
};

export default function ProgramsPage() {
  return (
    <>
      <div data-component="ProgramsHeader.tsx" className="bg-[#0f2e0f] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-safe-light">Community Programs</span>
          </div>
          <h1 className="font-serif text-4xl font-bold">Programs</h1>
          <p className="font-sans text-base text-gray-300 mt-2 max-w-2xl">
            Programs and resources to help residents take concrete action against wildfire risk.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-8">

        {/* Program 1: Defensible Space */}
        <section data-component="ProgramDefensibleSpace.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Program 1</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
            Defensible Space Assessments
          </h2>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
            Empower residents to take proactive steps in protecting their homes and neighborhoods
            through defensible space and home hardening efforts.
          </p>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
            The San Marcos Fire Department offers{' '}
            <a
              href="https://www.san-marcos.net/departments/public-safety/fire-department/fire-prevention/ab38-defensible-space-inspections"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#228B22] font-bold hover:underline"
            >
              individual AB38 defensible space inspections
            </a>{' '}
            to help homeowners identify and prioritize risk-reduction actions specific to their
            property. Homeowners can also self-evaluate using the CAL FIRE Defensible Space
            Self-Assessment tool.
          </p>
          <div className="bg-[#f5f4f0] border border-[#d4d0c4] rounded-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="font-sans font-bold text-sm text-gray-800">CAL FIRE Defensible Space Self-Assessment</p>
              <p className="font-sans text-xs text-gray-500 mt-0.5">Evaluate your property using this official CAL FIRE tool</p>
            </div>
            <a
              href="https://survey123.arcgis.com/share/31e91d1ba02b4da0b6442d09f9a9824f?portalUrl=https://calfire-forestry.maps.arcgis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap text-center"
            >
              Open Assessment Tool
            </a>
          </div>
        </section>

        {/* Program 2: Wildfire Prepared Home */}
        <section data-component="ProgramWildfirePrepared.tsx" className="section-card">
          <div className="section-divider mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Program 2</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
            Wildfire Prepared Home&trade; Designation
          </h2>
          <p className="font-sans text-base text-gray-700 leading-relaxed mb-4">
            Encourage residents to take the next step in wildfire readiness by earning the{' '}
            <strong>Wildfire Prepared Home&trade; Base or Plus designation</strong> from the Insurance
            Institute for Business &amp; Home Safety (IBHS). This is a voluntary program that
            recognizes homes meeting established wildfire resilience standards.
          </p>
          <h3 className="font-serif text-lg font-bold text-gray-800 mb-3">Criteria Include</h3>
          <ul className="font-sans text-sm text-gray-700 space-y-2 mb-5 ml-4">
            {[
              'Ember-resistant vents',
              'Noncombustible fencing adjacent to the structure',
              'Class A fire-rated roof materials',
              'Defensible space maintenance around the home',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#228B22] flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-safe-light border border-safe/20 rounded-sm p-4 mb-5">
            <p className="font-sans text-sm text-gray-700">
              <strong>Insurance benefit:</strong> Completing the Wildfire Prepared Home&trade; assessment
              may qualify homeowners for insurance discounts or rebates under California&apos;s Safer from
              Wildfires regulations.
            </p>
          </div>
          <a
            href="https://wildfireprepared.org/wildfire-prepared-home-base-assessment/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Start the Assessment
          </a>
        </section>
      </div>
    </>
  );
}
