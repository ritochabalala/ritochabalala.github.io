export type SkillGroup = {
    title: string;
    items: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        title: 'Languages',
        items: ['Python', 'TypeScript', 'JavaScript', 'C#', 'Java', 'R', 'SQL', 'PHP', 'C++', 'HTML', 'CSS', 'LaTeX'],
    },
    {
        title: 'AI / ML',
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
        items: ['React (TypeScript)', 'Next.js', 'Django REST Framework', 'ASP.NET Core MVC', 'Tailwind CSS'],
    },
    {
        title: 'Cloud & DevSecOps',
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
        items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Oracle', 'Power BI'],
    },
    {
        title: 'Ways of Working',
        items: [
            'Agile / Scrum delivery',
            'SDLC best practices',
            'AI & technical governance',
            'Stakeholder engagement',
            'Continuous improvement',
        ],
    },
];
