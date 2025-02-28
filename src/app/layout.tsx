import { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { Montserrat } from 'next/font/google';

// Metadata
export const metadata: Metadata = {
    title: 'Wiibleyde - Cobblemon Stats',
    description: 'Cobblemon Stats',
    authors: [
        {
            name: 'Wiibleyde',
            url: 'https://nathan.bonnell.fr',
        },
        {
            name: 'JusteKal',
            url: 'https://github.com/JusteKal/',
        },
    ],
};

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={'flex flex-col min-h-screen ' + montserrat.className}>
                <Navbar />
                <div className="flex-grow mt-16">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
