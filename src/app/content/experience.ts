import type { Experience, Stat, Stack } from './types'

export const experiences = [
    {
        company: 'TABDEAL Exchange',
        role: 'Frontend Developer',
        from: 'Mar 2023',
        to: 'present',
    },
    {
        company: 'ERNYKA Group',
        role: 'Frontend Developer',
        from: 'Sep 2022',
        to: 'Mar 2023',
    },
    {
        company: 'Sarvehana',
        role: 'Frontend Developer',
        from: 'Feb 2020',
        to: 'Sep 2022',
    },
    {
        company: 'Netdes',
        role: 'Web Developer',
        from: 'Sep 2019',
        to: 'Sep 2020',
    },
] as const satisfies readonly Experience[]

export const stats = [
    { title: '+6 yrs', description: 'Frontend engineering' },
    { title: '+3 yrs', description: 'Real-time fintech' },
    { title: '4', description: 'Trading products shipped' },
    { title: 'Vue · React', description: 'Primary stacks' },
] as const satisfies readonly Stat[]

export const stacks: Stack = ['TypeScript', 'Javascript','Vue', 'Nuxt', 'React', 'Next.js', 'Pinia', 'Vuex', 'Redux', 'Tailwind', 'Sass', 'Webpack', 'Strapi']