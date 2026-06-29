'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 25,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX }}
            className="pointer-events-none fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-500 via-sky-400 to-violet-500"
        />
    );
}
