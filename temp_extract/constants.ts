import { Project, Article, SocialLink, Experience, Certificate } from './types';

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/ErenAri?tab=repositories', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/eren-ari/', icon: 'linkedin' },
  { platform: 'Medium', url: 'https://medium.com/@erenari27', icon: 'book' },
];

export const SKILLS = {
  "Languages": ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  "Frameworks": ["React", "Next.js", "Tailwind", "Node.js", "FastAPI"],
  "AI & Data": ["TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "LLMs"],
  "DevOps": ["Docker", "AWS", "Git", "CI/CD", "Linux"]
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Advanced Data Analysis Pipeline',
    description: 'A robust data processing pipeline built with Python and Apache Airflow, designed to handle large-scale datasets for academic research.',
    tags: ['Python', 'Data Engineering', 'Research'],
    link: 'https://github.com/ErenAri?tab=repositories',
    stars: 12
  },
  {
    id: '2',
    title: 'Neural Network Visualizer',
    description: 'Interactive web tool to visualize neural network layers and activations in real-time, aiding in the interpretability of deep learning models.',
    tags: ['React', 'TypeScript', 'TensorFlow.js'],
    link: 'https://github.com/ErenAri?tab=repositories',
    stars: 24
  },
  {
    id: '3',
    title: 'Academic Portfolio Template',
    description: 'A clean, minimalist, and accessible portfolio template designed for researchers and academics to showcase their publications.',
    tags: ['Web Design', 'UI/UX', 'Tailwind'],
    link: 'https://github.com/ErenAri?tab=repositories',
    stars: 8
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Bridging the Gap: Academic Theory vs. Software Reality',
    summary: 'An exploration of how theoretical computer science concepts translate into modern software development practices.',
    date: 'Oct 2023',
    link: 'https://medium.com/@erenari27',
    platform: 'Medium'
  },
  {
    id: '2',
    title: 'Modern State Management in React Applications',
    summary: 'A deep dive into the evolution of state management, from Redux to Context API and atomic state libraries.',
    date: 'Sep 2023',
    link: 'https://medium.com/@erenari27',
    platform: 'Medium'
  },
  {
    id: '3',
    title: 'The Future of AI in Academic Research',
    summary: 'Discussing the ethical implications and productivity boosts provided by LLMs in the research workflow.',
    date: 'Aug 2023',
    link: 'https://medium.com/@erenari27',
    platform: 'Medium'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI / Stanford',
    tags: ['Specialization']
  },
  {
    id: '2',
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI / Stanford',
    grade: '99.77%'
  },
  {
    id: '3',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI / Stanford',
    grade: '99.26%'
  },
  {
    id: '4',
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI / Stanford',
    grade: '99.40%'
  },
  {
    id: '5',
    title: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI / AWS',
    grade: '93.25%'
  },
  {
    id: '6',
    title: 'Deep Learning with PyTorch',
    issuer: 'IBM',
    grade: '93.60%'
  },
  {
    id: '7',
    title: 'Introduction to Deep Learning & Neural Networks with Keras',
    issuer: 'IBM',
    grade: '92.50%'
  },
  {
    id: '8',
    title: 'Machine Learning with Python',
    issuer: 'IBM',
    grade: '91.42%'
  },
  {
    id: '9',
    title: 'Mathematics for Machine Learning: Linear Algebra',
    issuer: 'Imperial College London',
    grade: '98%'
  },
  {
    id: '10',
    title: 'Introduction to Statistics',
    issuer: 'Stanford University',
    grade: '94.09%'
  },
  {
    id: '11',
    title: 'Introduction to Neural Networks and PyTorch',
    issuer: 'IBM',
    grade: '86.76%'
  },
  {
    id: '12',
    title: 'Deep Learning with PyTorch: GANs',
    issuer: 'Coursera',
    grade: '83.33%'
  },
  {
    id: '13',
    title: 'Deep Learning with Keras and Tensorflow',
    issuer: 'IBM',
    grade: '81.70%'
  }
];

export const EXPERIENCE: Experience[] = [
  // Removed per previous request, keeping empty array or removing export if unused
];

export const BIO_CONTEXT = `
You are an AI assistant for Eren Ari's personal portfolio website.
Eren is a software developer and researcher with a strong academic background.
Key Links:
- GitHub: https://github.com/ErenAri?tab=repositories
- Medium: https://medium.com/@erenari27
- LinkedIn: https://www.linkedin.com/in/eren-ari/

He is passionate about building practical, modern applications using technologies like React, Python, and AI tools.
He holds numerous certificates from Stanford, IBM, and DeepLearning.AI with high distinction.
When answering questions, be professional, concise, and helpful. Adopt a tone that is "Academic but energetic".
`;