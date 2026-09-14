import type { Project } from './types'

export const projects = [
    {
        title: 'Design Language System',
        summary:
            'A themeable component library adopted across the exchange, built to keep UI consistent as the product surface grew.',
        highlight:'Reduced UI-build time for every new feature.',
        stack: ['Vue', 'Nuxt', 'Sass', 'Tailwind'],
        tag: 'platform',
    },
    {
        title: 'WebSocket & TradingView layer',
        summary:
            'The real-time layer behind the trading page: live pricing, order-book synchronisation, and charting.',
        highlight: 'Fast and stable under live market load.',
        stack: ['Vue', 'Nuxt', 'WebSocket', 'TradingView'],
        tag: 'Real-time',
    },
    {
        title: 'Margin & Easy Leverage',
        summary:
            'Leveraged trading products taken from zero to production, then extended alongside Gold and Fixed Income.',
        highlight: 'Growth in adoption and new active users.',
        stack: ['Vue', 'Nuxt', 'Pinia'],
        tag: 'live',
    },
    {
        title: 'Call-center CRM panel',
        summary:
            'An internal panel for maintaining users’ product information, and my first production work in React.',
        highlight: 'React and Next.js in production.',
        stack: ['React', 'Next.js', 'React Router', 'Redux'],
        tag: 'In progress',
    },
] as const satisfies readonly Project[]