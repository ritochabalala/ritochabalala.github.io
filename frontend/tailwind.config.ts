import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eef7ff',
                    100: '#d9ecff',
                    200: '#bcdfff',
                    300: '#8ecaff',
                    400: '#58aaff',
                    500: '#3088ff',
                    600: '#1f6af0',
                    700: '#1a55d6',
                    800: '#1c47ad',
                    900: '#1d3f88',
                    950: '#152752',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(12px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.6s ease-out both',
                gradient: 'gradient 8s ease infinite',
            },
        },
    },
    plugins: [],
};

export default config;
