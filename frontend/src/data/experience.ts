export type Role = {
    company: string;
    title: string;
    location: string;
    period: string;
    bullets: string[];
};

export const experience: Role[] = [
    {
        company: 'Sasol',
        title: 'Junior AI / Software Engineer',
        location: 'Johannesburg, South Africa',
        period: 'Aug 2024 – Present',
        bullets: [
            'Lead end-to-end development of AI-driven and full-stack digital solutions — from architecture to production deployment.',
            'Design and ship scalable AI systems aligned with enterprise architecture, cloud, and security best practices.',
            'Build full-stack apps with React (TypeScript) + Django REST, integrating GenAI capabilities into enterprise platforms.',
            'Secure RESTful APIs and run cloud-native deployments on Azure Kubernetes Service (AKS).',
            'Apply DevSecOps & CI/CD with Azure DevOps, GitHub, Snyk, SonarQube, and New Relic.',
            'Contribute to AI architecture patterns standardised across South Africa and Germany teams.',
        ],
    },
    {
        company: 'Sasol',
        title: 'Optimisation Developer / Data Scientist',
        location: 'Johannesburg, South Africa',
        period: 'Apr 2023 – Jul 2024',
        bullets: [
            'Built and deployed ML solutions to support operational optimisation and data-driven decision-making.',
            'Developed predictive and statistical models on diverse enterprise datasets.',
            'Implemented ML-based OCR to automate auditing — improving accuracy and compliance.',
            'Streamlined data pipelines and analytical workflows using Python.',
            'Designed model validation and testing frameworks ensuring robustness and performance.',
        ],
    },
];
