import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Make a Payment',
  description:
    'Donate to the San Elijo Hills Fire Safe Council online, via Zelle, or Venmo. All donations are tax deductible — 501(c)3 nonprofit.',
};

export default function PaymentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
