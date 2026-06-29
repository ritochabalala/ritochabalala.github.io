export type EducationEntry = {
    qualification: string;
    institution: string;
    period: string;
    modules?: string[];
    research?: string;
    note?: string;
};

export const education: EducationEntry[] = [
    {
        qualification: 'BSc Honours in Computer Science & Information Technology',
        institution: 'Sefako Makgatho Health Sciences University',
        period: '2022 – 2023',
        modules: [
            'Artificial Intelligence',
            'Advanced Database Systems',
            'Mobile Application Development',
            'Health Informatics',
        ],
        research:
            'Research Project: Customers’ Perceptions Toward Mobile Banking Applications in Rural Areas of Limpopo.',
    },
    {
        qualification: 'Bachelor of Science (BSc) – Mathematical Sciences',
        institution: 'Sefako Makgatho Health Sciences University',
        period: '2018 – 2021',
        modules: ['Computer Science', 'Statistics', 'Mathematics', 'Applied Mathematics'],
        note: 'Majors',
    },
    {
        qualification: "Bachelor's Degree for NSC 2017",
        institution: 'Nkwangulatilo Education Centre',
        period: '2017',
        modules: [
            'Mathematics',
            'Physical Sciences',
            'Life Sciences',
            'Agricultural Sciences',
            'Xitsonga (Home Language)',
            'English (First Additional Language)',
            'Life Orientation',
        ],
        note: 'Subjects',
    },
];
