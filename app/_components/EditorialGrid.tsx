'use client';

import { SOCIAL_LINKS } from '@/lib/data';
import React from 'react';
import gsap from 'gsap';
import { TextAnimate } from '@/registry/magicui/text-animate';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const getLink = (name: string) =>
    SOCIAL_LINKS.find((link) => link.name === name)?.url;

const GRID_ITEMS = [
    {
        label: 'LinkedIn',
        href: getLink('linkedin'),
        display: 'LinkedIn',
        short: 'Li',
        handle: 'subhash-adhikari',
    },
    {
        label: 'GitHub',
        href: getLink('github'),
        display: 'GitHub',
        short: 'Gh',
        handle: 'subhashadhikari057',
    },
    {
        label: 'Twitter',
        href: 'https://x.com/Seenu_subhash',
        display: 'Twitter',
        short: 'Tw',
        handle: 'Seenu_subhash',
    },
    {
        label: 'Instagram',
        href: getLink('instagram'),
        display: 'Instagram',
        short: 'Ig',
        handle: 'seenu.subhash',
    },
];

const GRID_LAYOUT = [
    'lg:col-span-4 lg:row-span-1',
    'lg:col-span-2 lg:row-span-1',
    'lg:col-span-2 lg:row-span-1',
    'lg:col-span-4 lg:row-span-1',
];

const textVariants = {
    hidden: {
        opacity: 0,
        y: 24,
        rotate: 0,
        scale: 0.92,
    },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
            delay: 0.15 + i * 0.02,
            duration: 1.4,
            ease: 'power2.out',
        },
    }),
    exit: (i: number) => ({
        opacity: 0,
        y: 24,
        rotate: 0,
        scale: 0.92,
        transition: {
            delay: 0.1 + i * 0.02,
            duration: 1.1,
            ease: 'power2.in',
        },
    }),
};

const EditorialGrid = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    const [isGridHover, setIsGridHover] = React.useState(false);
    const cursorRefs = React.useRef<HTMLDivElement[]>([]);
    const gridCursorRef = React.useRef<HTMLDivElement | null>(null);
    const sectionRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        cursorRefs.current.forEach((el) => {
            if (!el) return;
            gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.85 });
        });

        if (gridCursorRef.current) {
            gsap.set(gridCursorRef.current, {
                xPercent: -50,
                yPercent: -50,
                opacity: 0,
                scale: 0.9,
            });
        }
    }, []);

    React.useEffect(() => {
        const el = gridCursorRef.current;
        if (!el) return;

        if (isGridHover) {
            gsap.to(el, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
        } else {
            gsap.to(el, { opacity: 0, scale: 0.9, duration: 0.25, ease: 'power2.out' });
        }
    }, [isGridHover]);

    React.useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const enterTween = gsap.fromTo(
            el,
            { y: 150, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            },
        );

        const exitTween = gsap.to(el, {
            y: -150,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'bottom 50%',
                end: 'bottom 20%',
                scrub: 1,
            },
        });

        return () => {
            enterTween.kill();
            exitTween.kill();
        };
    }, []);

    React.useEffect(() => {
        const root = document.documentElement;
        if (isGridHover) {
            root.classList.add('editorial-hover');
        } else {
            root.classList.remove('editorial-hover');
        }

        return () => {
            root.classList.remove('editorial-hover');
        };
    }, [isGridHover]);


    const handleMove = (index: number) =>
        (event: React.MouseEvent<HTMLAnchorElement>) => {
            const el = cursorRefs.current[index];
            if (!el) return;

            const rect = event.currentTarget.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            gsap.to(el, {
                x,
                y,
                duration: 0.35,
                ease: 'power2.out',
            });
        };

    const handleGridMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const el = gridCursorRef.current;
        if (!el) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        gsap.to(el, {
            x,
            y,
            duration: 0.35,
            ease: 'power2.out',
        });
    };

    const handleEnter = (index: number) => () => {
        const el = cursorRefs.current[index];
        if (el) {
            gsap.to(el, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
        }
        setHoveredIndex(index);
    };

    const handleLeave = (index: number) => () => {
        const el = cursorRefs.current[index];
        if (el) {
            gsap.to(el, { opacity: 0, scale: 0.85, duration: 0.3, ease: 'power2.out' });
        }
        setHoveredIndex(null);
    };

    return (
        <section className="pt-6 pb-20 hidden md:block" id="editorial-grid">
            <div
                className="mx-auto w-full max-w-[1800px] px-4 sm:px-10 lg:px-14"
                ref={sectionRef}
            >
                <div
                    className="relative isolate grid md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 border border-border/70 gap-0 rounded-[24px] rounded-tr-[40px] overflow-hidden"
                    onMouseEnter={() => setIsGridHover(true)}
                    onMouseLeave={() => setIsGridHover(false)}
                    onMouseMove={handleGridMove}
                >
                    <div
                        ref={gridCursorRef}
                        className="pointer-events-none absolute z-30 size-28 sm:size-32 rounded-full border border-foreground/30"
                    >
                        <span className="absolute inset-0 grid place-items-center text-xl sm:text-2xl text-foreground/70">
                            ↗
                        </span>
                    </div>
                    {GRID_ITEMS.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target={item.href?.startsWith('http') ? '_blank' : undefined}
                            rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                            className={`group relative min-h-[180px] sm:min-h-[240px] lg:min-h-[260px] p-0 border border-border/50 bg-background overflow-hidden ${GRID_LAYOUT[index]}`}
                            onMouseMove={handleMove(index)}
                            onMouseEnter={handleEnter(index)}
                            onMouseLeave={handleLeave(index)}
                        >
                            <div
                                className={`relative z-10 flex items-center justify-between text-xs text-muted-foreground uppercase tracking-[0.25em] transition-opacity duration-200 px-5 pt-4 ${
                                    hoveredIndex === index
                                        ? 'opacity-0'
                                        : 'opacity-100'
                                }`}
                            >
                                <span>{item.label}</span>
                                <span>{item.short}</span>
                            </div>

                            <div className="pointer-events-none absolute inset-x-0 bottom-[-18px] sm:bottom-[-10px] overflow-hidden">
                                {hoveredIndex === index && (
                                    <div className="inline-flex w-max animate-editorial-marquee">
                                        <TextAnimate
                                            variants={textVariants}
                                            by="character"
                                            className="block text-[clamp(72px,14vw,180px)] leading-none font-anton text-foreground/20 whitespace-nowrap pr-16"
                                        >
                                            {item.display}
                                        </TextAnimate>
                                        <span aria-hidden="true">
                                            <TextAnimate
                                                variants={textVariants}
                                                by="character"
                                                className="block text-[clamp(72px,14vw,180px)] leading-none font-anton text-foreground/20 whitespace-nowrap pr-16"
                                            >
                                                {item.display}
                                            </TextAnimate>
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div
                                className={`pointer-events-none absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-xs text-muted-foreground transition-opacity duration-200 ${
                                    hoveredIndex === index
                                        ? 'opacity-0'
                                        : 'opacity-100'
                                }`}
                            >
                                @{item.handle}
                            </div>

                            <div
                                className={`pointer-events-none absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-xs text-muted-foreground uppercase tracking-[0.2em] transition-opacity duration-200 ${
                                    hoveredIndex === index
                                        ? 'opacity-0'
                                        : 'opacity-100'
                                }`}
                            >
                                {item.short}
                            </div>

                            <div
                                ref={(el) => {
                                    if (el) cursorRefs.current[index] = el;
                                }}
                                className="pointer-events-none absolute z-20 size-24 sm:size-28 rounded-full border border-foreground/40 hidden"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EditorialGrid;
