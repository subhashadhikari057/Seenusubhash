'use client';

import React, { useLayoutEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';

type VariantState = Record<string, unknown> & {
    transition?: {
        delay?: number;
        duration?: number;
        ease?: string;
        type?: string;
    };
};

type Variants = {
    hidden: VariantState | ((i: number) => VariantState);
    show: VariantState | ((i: number) => VariantState);
    exit?: VariantState | ((i: number) => VariantState);
};

interface TextAnimateProps {
    children: string;
    by?: 'character' | 'word';
    variants: Variants;
    className?: string;
}

const normalizeProps = (state: VariantState) => {
    const { transition, ...rest } = state;
    const props: Record<string, unknown> = { ...rest };

    if (props.rotate !== undefined) {
        props.rotation = props.rotate;
        delete props.rotate;
    }

    return { props, transition };
};

export const TextAnimate = ({
    children,
    by = 'character',
    variants,
    className,
}: TextAnimateProps) => {
    const tokens = useMemo(() => {
        const text = typeof children === 'string' ? children : String(children);
        if (by === 'word') return text.split(' ');
        return text.split('');
    }, [children, by]);

    const spanRefs = useRef<HTMLSpanElement[]>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            spanRefs.current.forEach((span, index) => {
                if (!span) return;

                const hiddenState =
                    typeof variants.hidden === 'function'
                        ? variants.hidden(index)
                        : variants.hidden;
                const showState =
                    typeof variants.show === 'function'
                        ? variants.show(index)
                        : variants.show;

                const { props: hiddenProps } = normalizeProps(hiddenState);
                const { props: showProps, transition } =
                    normalizeProps(showState);

                gsap.set(span, hiddenProps);

                gsap.to(span, {
                    ...showProps,
                    duration: transition?.duration ?? 0.4,
                    delay: transition?.delay ?? index * 0.05,
                    ease: transition?.ease ??
                        (transition?.type === 'spring'
                            ? 'back.out(1.7)'
                            : 'power3.out'),
                });
            });
        });

        return () => ctx.revert();
    }, [tokens, variants]);

    return (
        <span className={className} aria-label={children} role="presentation">
            {tokens.map((token, index) => (
                <span
                    key={`${token}-${index}`}
                    ref={(el) => {
                        if (el) spanRefs.current[index] = el;
                    }}
                    className="inline-block"
                >
                    {token}
                    {by === 'word' && index < tokens.length - 1 ? '\u00A0' : ''}
                </span>
            ))}
        </span>
    );
};
