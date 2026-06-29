export type Credential = {
    title: string;
    issuer?: string;
    year: string;
    description?: string;
};

export const certifications: Credential[] = [
    {
        title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)',
        issuer: 'Microsoft',
        year: '2025',
    },
    {
        title: 'National Certificate: Business Analysis (NQF Level 6)',
        issuer: 'MICT SETA',
        year: '2024',
    },
];

export const awards: Credential[] = [
    {
        title: 'Huawei Seeds for the Future — Top Project in Africa',
        issuer: 'Huawei',
        year: '2023',
        description:
            'Selected participant; part of a team awarded Top Project in Africa for innovation and technical excellence.',
    },
];
