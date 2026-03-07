import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anvia',
  description: 'A new way for everyday life.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
