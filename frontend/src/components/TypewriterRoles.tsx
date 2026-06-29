'use client';

import { useEffect, useState } from 'react';

type Props = {
    roles?: string[];
    typeSpeed?: number;
    eraseSpeed?: number;
    holdMs?: number;
    className?: string;
};

const DEFAULT_ROLES = [
    'Full Stack Developer',
    'Software Engineer',
    'Tech Enthusiast',
    'Open Source Contributor',
];

export default function TypewriterRoles({
    roles = DEFAULT_ROLES,
    typeSpeed = 75,
    eraseSpeed = 40,
    holdMs = 1400,
    className = '',
}: Props) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [phase, setPhase] = useState<'typing' | 'holding' | 'erasing'>('typing');

    useEffect(() => {
        const current = roles[index % roles.length];

        if (phase === 'typing') {
            if (text.length < current.length) {
                const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
                return () => clearTimeout(t);
            }
            const t = setTimeout(() => setPhase('erasing'), holdMs);
            return () => clearTimeout(t);
        }

        if (phase === 'erasing') {
            if (text.length > 0) {
                const t = setTimeout(() => setText(current.slice(0, text.length - 1)), eraseSpeed);
                return () => clearTimeout(t);
            }
            setIndex((i) => (i + 1) % roles.length);
            setPhase('typing');
            return;
        }
    }, [text, phase, index, roles, typeSpeed, eraseSpeed, holdMs]);

    return (
        <span
            className={className}
            aria-live="polite"
            aria-label={`Role: ${roles[index % roles.length]}`}
        >
            <span className="gradient-text">{text}</span>
            <span
                aria-hidden="true"
                className="ml-0.5 inline-block w-[2px] h-[0.9em] -mb-[0.1em] bg-current align-baseline animate-pulse"
            />
        </span>
    );
}
