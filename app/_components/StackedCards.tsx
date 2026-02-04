'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { GENERAL_INFO } from '@/lib/data';

const CARD_DATA = [
    {
        title: "Yo, I'm Subhash. I help founders build scalable backend systems.",
        cta: '',
        href: '/#selected-projects',
    },
    {
        title: 'REST API development, clean architecture, real-world delivery.',
        cta: 'See Experience',
        href: '/#my-experience',
    },
    {
        title: 'See selected projects and real-world backend work.',
        cta: 'View Projects',
        href: '/#selected-projects',
    },
    {
        title: 'Backend system design and database modeling for growth.',
        cta: 'About Me',
        href: '/#about-me',
    },
    {
        title: 'Or do you prefer text?',
        cta: 'Email me',
        href: `mailto:${GENERAL_INFO.email}`,
    },
];

const STACK_STYLES = [
    'translate-y-0 scale-100 opacity-100 z-30',
    'translate-y-4 md:translate-y-6 scale-[0.96] opacity-90 z-20',
    'translate-y-8 md:translate-y-12 scale-[0.92] opacity-75 z-10',
];

interface Props {
    className?: string;
}

const StackedCards = ({ className }: Props) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const clickAudioRefs = React.useRef<HTMLAudioElement[]>([]);

    React.useEffect(() => {
        clickAudioRefs.current = [
            new Audio('/click1.m4a'),
            new Audio('/Click2.m4a'),
        ];

        clickAudioRefs.current.forEach((audio) => {
            audio.preload = 'auto';
        });

        return () => {
            clickAudioRefs.current = [];
        };
    }, []);

    const playRandomClick = () => {
        const sounds = clickAudioRefs.current;
        if (!sounds.length) return;

        const sound = sounds[Math.floor(Math.random() * sounds.length)];
        if (!sound) return;

        sound.currentTime = 0;
        void sound.play();
    };

    const handleNext = () => {
        playRandomClick();
        setActiveIndex((prev) => (prev + 1) % CARD_DATA.length);
    };

    const handlePrev = () => {
        playRandomClick();
        setActiveIndex(
            (prev) => (prev - 1 + CARD_DATA.length) % CARD_DATA.length,
        );
    };

    const stack = [0, 1, 2].map((offset) => ({
        ...CARD_DATA[(activeIndex + offset) % CARD_DATA.length],
        offset,
    }));

    return (
        <div
            className={cn(
                'relative w-[92vw] max-w-[380px] h-[220px] sm:h-[250px] lg:h-[280px]',
                'font-sf-mono',
                className,
            )}
        >
            <div
                className="pointer-events-none absolute inset-[-12px] sm:inset-[-16px] rounded-[34px] opacity-25"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '26px 26px',
                    maskImage:
                        'radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 55%, transparent 70%)',
                }}
            />
            {stack.map((card) => (
                <div
                    key={`${card.title}-${card.offset}`}
                    className={cn(
                        'absolute inset-0 rounded-[28px] border border-border/80 bg-background p-7 transition-all duration-500',
                        'shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-[2px]',
                        card.offset === 0 ? 'animate-card-rise' : '',
                        card.offset === 0
                            ? 'pointer-events-auto'
                            : 'pointer-events-none',
                        STACK_STYLES[card.offset],
                    )}
                >
                    <div
                        className={cn(
                            'transition-opacity duration-300 flex h-full flex-col',
                            card.offset === 0 ? 'opacity-100' : 'opacity-0',
                        )}
                        aria-hidden={card.offset !== 0}
                    >
                        <div>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span className="uppercase tracking-[0.2em]">
                                    Notes
                                </span>
                                <span className="text-foreground">
                                    {(activeIndex + 1)
                                        .toString()
                                        .padStart(2, '0')} /{' '}
                                    {CARD_DATA.length
                                        .toString()
                                        .padStart(2, '0')}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={handlePrev}
                                        className="size-8 rounded-full border border-border/70 text-muted-foreground hover:text-foreground"
                                        aria-label="Previous card"
                                    >
                                        <span className="mx-auto block text-sm">
                                            ↑
                                        </span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className="size-8 rounded-full border border-border/70 text-muted-foreground hover:text-foreground"
                                        aria-label="Next card"
                                    >
                                        <span className="mx-auto block text-sm">
                                            ↓
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl font-semibold leading-snug text-foreground">
                                {card.title}
                            </div>
                        </div>
                        {card.cta ? (
                        <a
                            href={card.href}
                            className="inline-flex w-fit items-center gap-2 mt-auto mb-1 rounded-full border border-border/70 px-4 py-2 text-[11px] sm:text-xs hover:border-primary hover:text-primary transition-colors"
                        >
                                {card.cta}
                                <span aria-hidden="true">↗</span>
                            </a>
                        ) : (
                            <div className="mt-auto mb-2" />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StackedCards;
