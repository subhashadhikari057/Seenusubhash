import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://subhashadhikari.dev'),
    title: {
        default:
            'Backend Focused Full Stack Engineer | Scalable Web Applications',
        template: '%s | Subhash Adhikari',
    },
    description:
        'Backend-focused full stack engineer from Nepal building scalable, production-ready web applications with clean APIs, robust backend systems, and real-world project experience.',
    keywords: [
        'Subhash Adhikari',
        'Subhash Seenu',
        'seenu yadav',
        'Backend Focused Full Stack Engineer',
        'Full Stack Developer Backend Focused',
        'Backend Engineer',
        'Full Stack Web Developer',
        'Scalable Web Applications',
        'REST API Development',
        'Backend System Design',
        'Database Design and Modeling',
        'Authentication and Authorization',
        'Role Based Access Control',
        'WebSocket Integration',
        'High Performance Web Applications',
        'Full Stack Developer Nepal',
        'Backend Engineer Nepal',
        'Remote Full Stack Developer from Nepal',
        'NestJS Backend Developer',
        'Node.js Backend Developer',
        'Prisma ORM',
        'Tailwind CSS',
        'Full Stack JavaScript Developer',
    ],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: 'https://subhashadhikari.dev',
        title: 'Backend Focused Full Stack Engineer | Scalable Web Applications',
        description:
            'Backend-focused full stack engineer from Nepal building scalable, production-ready web applications with clean APIs, robust backend systems, and real-world project experience.',
        siteName: 'Subhash Adhikari',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Backend Focused Full Stack Engineer | Scalable Web Applications',
        description:
            'Backend-focused full stack engineer from Nepal building scalable, production-ready web applications with clean APIs, robust backend systems, and real-world project experience.',
    },
    verification: {
        google: 'Hneo84Qb0J9k5MFw1yyS-iKL6ebD5bTXqZYjfSTbmXQ',
    },
    authors: [{ name: 'Subhash Adhikari', url: 'https://subhashadhikari.dev' }],
    creator: 'Subhash Adhikari',
    publisher: 'Subhash Adhikari',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const sameAsLinks = Array.from(
        new Set(
            [
                ...SOCIAL_LINKS.map((link) => link.url),
                GENERAL_INFO.email,
                 SOCIAL_LINKS.find((link) => link.name === 'linkedin')?.url,
                 SOCIAL_LINKS.find((link) => link.name === 'github')?.url,
                 SOCIAL_LINKS.find((link) => link.name === 'instagram')?.url,
            
            ].filter(Boolean),
        ),
    );

    const personJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Subhash Adhikari',
        alternateName: ['Subhash Seenu'],
        jobTitle: 'Backend Focused Full Stack Engineer',
        url: 'https://subhashadhikari.dev',
        sameAs: sameAsLinks,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'Nepal',
        },
        knowsAbout: [
            'REST API Development',
            'Backend System Design',
            'Database Design and Modeling',
            'Authentication and Authorization',
            'Role Based Access Control',
            'WebSocket Integration',
            'Scalable Backend Architecture',
            'High Performance Web Applications',
        ],
    };

    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Subhash Adhikari',
        url: 'https://subhashadhikari.dev',
        description:
            'Backend-focused full stack engineer from Nepal building scalable, production-ready web applications with clean APIs, robust backend systems, and real-world project experience.',
        inLanguage: 'en-US',
    };

    return (
        <html lang="en">
            <head>
                <GoogleAnalytics gaId="G-MHLY1LNGY5" />
                <Script id="hotjar" strategy="afterInteractive">
                    {`(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:6380611,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
                </Script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteJsonLd),
                    }}
                />
            </head>
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    {/* <a
                        href="https://forms.gle/t73XYJgWD5cJNr6e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 block bg-black text-center z-[1] text-sm py-2 hover:text-primary transition-all"
                    >
                        Frontend dev? I&apos;ll help you polish your resume —
                        completely free.
                    </a> */}
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}
