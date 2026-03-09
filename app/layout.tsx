import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Anvia — Make time work better.',
    description: 'Anvia builds products that improve everyday life. We put time back in people\'s hands through thoughtful technology.',
    keywords: ['Anvia', 'product development', 'technology', 'experience design'],
    openGraph: {
        title: 'Anvia — Make time work better.',
        description: 'We build products that improve everyday life.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
