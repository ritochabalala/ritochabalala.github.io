export type Project = {
    title: string;
    description: string;
    tags: string[];
    year?: string;
    href?: string;
    repo?: string;
    highlight?: boolean;
};

export const projects: Project[] = [
    {
        title: 'Orbit — Innovation Management Platform',
        description:
            'Led the development of Innovation Orbit, an AI-enabled enterprise innovation management platform supporting idea generation, evaluation, and cross-team collaboration.',
        tags: ['React', 'TypeScript', 'Django REST', 'Azure AKS', 'GenAI'],
        year: '2026',
        repo: 'https://github.com/sasol-enterprise/enterprise-dgt-orbit-app',
        highlight: true,
    },
    {
        title: 'AI Knowledge Assistant (RAG)',
        description:
            'Retrieval-Augmented Generation system integrating vector search and LLMs — document ingestion, embeddings, grounding validation, and context-window-aware retrieval for long-document QA.',
        tags: ['Python', 'LangChain', 'LLMs', 'RAG', 'Vector DB'],
        year: '2025',
        repo: 'https://github.com/ritochabalala/context-window-aware_rag',
        highlight: true,
    },
    {
        title: 'ML-Based OCR for Auditing',
        description:
            'Automated auditing workflow using ML-based OCR to extract, validate, and reconcile structured data from scanned documents — improving accuracy and compliance.',
        tags: ['Python', 'Computer Vision', 'OCR', 'ML', 'Automation'],
        year: '2024',
        highlight: true,
    },
    {
        title: 'Full-Stack Blog Application',
        description:
            'Built a Django REST + React-based blogging platform with authentication and full CRUD functionality.',
        tags: ['Django REST', 'React', 'Auth', 'CRUD'],
        year: '2024',
        repo: 'https://github.com/ritochabalala/Full-Stack-Blog-Platform',
    },
    {
        title: 'Disease Prediction System',
        description:
            'Machine-learning model that predicts diseases from user-reported symptoms, using data preprocessing and predictive modelling techniques.',
        tags: ['Python', 'scikit-learn', 'ML', 'Healthcare'],
        year: '2023',
    },
    {
        title: 'University Online Admission System',
        description:
            'Designed and implemented an automated admissions system to improve efficiency and reduce manual processing for university intake.',
        tags: ['Web App', 'Workflow Automation', 'Databases'],
        year: '2022',
    },
    {
        title: 'E-Commerce Platform',
        description:
            'Full-stack web application supporting multi-brand product browsing, cart, and online transactions.',
        tags: ['Full-Stack', 'Web', 'Payments'],
        year: '2021',
    },
    {
        title: 'Render-Visualisations',
        description:
            'Earlier exploration of data rendering and visualisation techniques on the web.',
        tags: ['PHP', 'JavaScript', 'Data Viz'],
        year: '2023',
        repo: 'https://github.com/ritochabalala/Render-Visualisations',
    },
    {
        title: 'Portfolio Site',
        description:
            'This site — Next.js, Tailwind CSS, statically exported and deployed to GitHub Pages.',
        tags: ['Next.js', 'Tailwind', 'TypeScript'],
        year: '2026',
        repo: 'https://github.com/ritochabalala/ritochababala.github.io',
    },
];
