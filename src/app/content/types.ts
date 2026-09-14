export type Project = {
    title: string;
    summary: string;
    highlight: string;
    stack: readonly string[];
    tag: string;
}

export type Experience = {
    company: string;
    role: string;
    from: string;
    to: string | 'present';
}

export type Stat = {
    title: string;
    description: string;
}

export type Stack = string[];