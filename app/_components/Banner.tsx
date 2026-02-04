'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import StackedCards from './StackedCards';

const ACCENT_THEMES = [
    { primary: '0 87% 57%', foreground: '0 0% 10%' },
    { primary: '198 100% 50%', foreground: '0 0% 10%' },
    { primary: '12 100% 55%', foreground: '0 0% 10%' },
    { primary: '42 98% 60%', foreground: '0 0% 10%' },
    { primary: '127 55% 37%', foreground: '0 0% 95%' },
];

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [accentIndex, setAccentIndex] = React.useState(0);

    const applyAccentTheme = (index: number) => {
        const theme = ACCENT_THEMES[index];
        if (!theme) return;

        document.documentElement.style.setProperty('--primary', theme.primary);
        document.documentElement.style.setProperty(
            '--primary-foreground',
            theme.foreground,
        );
    };

    React.useEffect(() => {
        const savedIndex = Number(localStorage.getItem('accentIndex'));
        const safeIndex = Number.isNaN(savedIndex)
            ? 0
            : Math.min(Math.max(savedIndex, 0), ACCENT_THEMES.length - 1);

        applyAccentTheme(safeIndex);
        setAccentIndex(safeIndex);
    }, []);

    const handleAccentCycle = () => {
        const nextIndex = (accentIndex + 1) % ACCENT_THEMES.length;
        applyAccentTheme(nextIndex);
        setAccentIndex(nextIndex);
        localStorage.setItem('accentIndex', String(nextIndex));
    };

    const handleAccentKeyDown =
        (event: React.KeyboardEvent<HTMLHeadingElement>) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleAccentCycle();
            }
        };

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px] md:ml-[-24px]">
                    <h1
                        className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton cursor-pointer focus:outline-none focus-visible:outline-none"
                        onClick={handleAccentCycle}
                        onKeyDown={handleAccentKeyDown}
                        role="button"
                        tabIndex={0}
                        title="Click to change accent color"
                    >
                        <span className="block text-primary">FULL STACK</span>
                        <span className="block ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Subhash
                        </span>
                        . A backend-focused full stack engineer with 1+ years of
                        experience building scalable, high-performance web
                        applications, specializing in backend systems, APIs, and
                        database design.
                    </p>
                    <Button
                        as="link"
                        href={`mailto:${GENERAL_INFO.email}`}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Hire Me
                    </Button>
                </div>

                <StackedCards className="hidden md:block md:-translate-x-8 md:translate-y-12" />

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            1+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            4+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    {/*<div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            10K+
                        </h5>
                        <p className="text-muted-foreground">Hours Worked</p>
                    </div>*/}
                    <div className="slide-up-and-fade">
                        <h6 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            Continuous
                        </h6>
                        <p className="text-muted-foreground">
                            Learning & Practice
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
