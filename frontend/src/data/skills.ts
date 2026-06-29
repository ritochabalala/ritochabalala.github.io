export type SkillGroup = {
    title: string;
    icon: 'code' | 'brain' | 'layers' | 'cloud' | 'database' | 'workflow';
    items: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        title: 'Languages',
        icon: 'code',
        items: ['Python', 'TypeScript', 'JavaScript', 'C#', 'Java', 'R', 'SQL', 'PHP', 'C++', 'HTML', 'CSS', 'LaTeX'],
    },
    {
        title: 'AI / ML',
        icon: 'brain',
        items: [
            'Machine Learning',
            'Generative AI / LLMs',
            'Retrieval-Augmented Generation (RAG)',
            'ML-based OCR',
            'Predictive Analytics',
            'Statistical Modelling',
            'LangChain',
            'TensorFlow',
            'scikit-learn',
            'Pandas / NumPy',
        ],
    },
    {
        title: 'Frameworks & Frontend',
        icon: 'layers',
        items: ['React (TypeScript)', 'Next.js', 'Django REST Framework', 'ASP.NET Core MVC', 'Tailwind CSS'],
    },
    {
        title: 'Cloud & DevSecOps',
        icon: 'cloud',
        items: [
            'Microsoft Azure',
            'Azure Kubernetes Service (AKS)',
            'Docker',
            'Kubernetes',
            'Azure DevOps',
            'GitHub Actions',
            'CI/CD Pipelines',
            'Snyk',
            'SonarQube',
            'New Relic',
        ],
    },
    {
        title: 'Databases & Analytics',
        icon: 'database',
        items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Oracle', 'Power BI'],
    },
    {
        title: 'Ways of Working',
        icon: 'workflow',
        items: [
            'Agile / Scrum delivery',
            'SDLC best practices',
            'AI & technical governance',
            'Stakeholder engagement',
            'Continuous improvement',
        ],
    },
];
