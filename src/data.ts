export const profile = {
  name: 'Ioannis Xiradakis',
  displayName: 'Ioannis (Giannis) Xiradakis',
  shortName: 'Giannis',
  title: 'Systems Architect & Researcher',
  subtitle: 'MSc @ Computer Science Department, UoC',
  affiliation: 'FORTH & University of Crete, Department of Computer Science',
  location: 'Heraklion, Crete, Greece',
  email: '',
  avatar: 'https://avatars.githubusercontent.com/u/140832924?v=4',
  linkedin: 'https://www.linkedin.com/in/xiradakisgiannis/',
  github: 'https://github.com/jiannisx',
  orcid: 'https://orcid.org/0009-0009-4974-4901',
  summary:
    'Architecting scalable, concurrent systems and distributed data structures. Focused on solving complex bottlenecks under high contention, bridging theoretical research with structural system design.',
  heroCta: 'Explore the work',
}

export const about = {
  architecture:
    'I specialize in system architecture and algorithm design. My passion lies in solving problems, modeling concurrent environments, and designing robust architectures.',
  research:
    'Focusing on concurrent data structures and distributed systems, engineering algorithms that maintain mathematical correctness and ultra-low latency under extreme contention.',
  ai_systems:
    'Leveraging large-scale data paradigms and AI integration. I explore how LLMs, prompt engineering, and structural schema discovery can optimize complex system infrastructures.',
  problem_solving:
    'Motivated by theoretical challenges and careful system modelling, my focus is on architecting robust solutions to fundamental, high-impact problems.',
}

export const education = [
  {
    degree: "Master's degree, Computer Software Engineering",
    school: 'University of Crete, Department of Computer Science',
    period: 'Sep 2025 – Present',
    detail: null as string | null,
  },
  {
    degree: "Bachelor's degree, Computer Science",
    school: 'University of Crete, Department of Computer Science',
    period: 'Sep 2021 – Jul 2025',
    detail: 'Grade: 9.36/10 (3rd among undergraduates of the same entry year).',
  },
]

export const experience = [
  {
    role: 'Concurrent and Distributed Researcher',
    org: 'Foundation for Research and Technology – Hellas (FORTH)',
    period: 'Jul 2023 – Present',
    detail:
      'Designed novel concurrent algorithms for shared-memory data structures. Focused on mathematical correctness, bottleneck elimination, and architectural optimization for high-contention environments.',
  },
  {
    role: 'Teaching Assistant (Data Structures & Algorithms)',
    org: 'University of Crete, Department of Computer Science',
    period: 'Sep 2025 – Present',
    detail:
      'Conducted tutorial sessions and acted as a code reviewer for 250+ undergraduate students. Assessed coursework for algorithm correctness, time/space complexity, and data structure implementations.',
  },
  {
    role: 'Organizing Committee',
    org: 'SPTDC 2026 — School on the Practice and Theory of Distributed Computing',
    period: 'Oct 2025 – May 2026',
    detail:
      'Co-organizing a distributed computing school for 50+ participants, facilitating high-level discourse bridging theoretical models with practical, large-scale system engineering.',
    href: 'https://sptdc2026.ics.forth.gr/',
  },
  {
    role: 'Teaching Assistant (Technical Writing)',
    org: 'University of Crete, Department of Computer Science',
    period: 'Sep 2024 – Jan 2025',
    detail:
      'Reviewed and evaluated technical assignments for 30+ postgraduate students. Assessed documents for structural coherence, clarity, and effective communication of complex technical concepts.',
  },
  {
    role: 'Conversational AI Engineer — Intern',
    org: 'KOSMOS Intelligent Systems and Services',
    period: 'Jul 2024 – Oct 2024',
    detail:
      'Architected and implemented an end-to-end conversational AI pipeline using Python and the Rasa framework. Engineered NLU structures, trained the conversation models, and built the integration infrastructure for web deployment.',
  },
]

export const volunteering = [
  {
    role: 'School Visit Presenter',
    org: 'University of Crete, Department of Computer Science',
    period: 'Feb 2026',
    detail:
      'Presented our team’s research and emerging technological trends to over 120 high school students, facilitating interactive discussions across 8 visiting groups.',
  },
  {
    role: 'Researcher’s Night Presenter',
    org: 'Foundation for Research and Technology',
    period: 'Sep 2025',
    detail:
      'Effectively communicated complex technical concepts to a broad public audience of 1,000+ attendees, by designing and presenting an interactive educational demo visualizing similarity search in large datasets.',
  },
  {
    role: 'Website Developer',
    org: 'Youth Crete (Pancretan Youth Assembly)',
    period: 'Mar 2024 – May 2024',
    detail:
      'Developed and delivered the complete codebase for the YouthCrete digital platform, designing a system to facilitate youth participation in social activities and European programmes.',
  },
]

export const research = [
  {
    title: 'Brief Announcement: Concurrent Double-Ended Priority Queues',
    venue: 'DISC 2025 — 39th International Symposium on Distributed Computing',
    date: 'Oct 2025',
    authors: 'Panagiota Fatourou, Eric Ruppert, Ioannis Xiradakis',
    description:
      'Introduced the first concurrent implementation specifically designed for a double-ended priority queue (DEPQ). Engineered a linearizable architecture utilizing single-consumer queues, and applied a lock-based combining scheme to support multiple consumers in high-contention scenarios.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2508.13399' },
      { label: 'LIPIcs', href: 'https://doi.org/10.4230/lipics.disc.2025.55' },
    ],
  },
]

export const awards = [
  {
    title: '“Elisavet Karamintzou” Award 2025',
    issuer: 'Elisavet Karamintzou Foundation',
    period: 'Jul 2025',
    detail:
      'Awarded to the top 3 graduating students with the highest GPA in the Department of Computer Science.',
  },
  {
    title: 'Undergraduate Scholarship “Stelios Orphanoudakis” 2024–2025',
    issuer: 'FORTH',
    period: 'Sep 2024',
    detail: 'Awarded for sustained top-tier academic performance during the 2023–2024 academic year.',
  },
  {
    title: '“Chrysanthos and Anastasia Karydi” Scholarship 2021',
    issuer: 'Karydi Foundation',
    period: 'Sep 2023',
    detail:
      'Awarded for achieving one of the highest admission ranks among incoming students at the University of Crete.',
  },
  {
    title: 'Undergraduate Scholarship “Stelios Orphanoudakis” 2022–2023',
    issuer: 'FORTH',
    period: 'Sep 2022',
    detail: 'Awarded for top-tier academic performance during the 2021–2022 academic year.',
  },
]

export const projects = [
  {
    name: 'SoftRoceTeRM',
    description:
      'Engineered an adaptation of TeRM’s RDMA-attached SSD memory extension for Linux Soft-RoCE, successfully replicating its magic-page mechanism without requiring dedicated RDMA hardware.',
    language: 'C',
    url: 'https://github.com/jiannisx/SoftRoceTeRM',
    tags: ['RDMA', 'Systems', 'Linux'],
  },
  {
    name: 'Comparative Analysis of Schema Discovery',
    description:
      'Designed and implemented a parallelized FPGrowth-based algorithm for schema discovery in property graphs, conducting a comparative performance analysis against LLMs under controlled noise environments.',
    language: 'Python',
    url: null as string | null,
    tags: ['Schema Discovery', 'FPGrowth', 'Property Graphs', 'LLMs'],
  },
  {
    name: 'Tree-Based Indexers Demo',
    description:
      'Developed an interactive visualization tool for tree-based indexing algorithms, designed to communicate complex data structure mechanics to non-technical audiences at Researcher’s Night.',
    language: 'Python',
    url: 'https://github.com/jiannisx/researchNightDemo2025',
    tags: ['Edtech', 'Indexing', 'Outreach'],
  },
  {
    name: 'MPI Satellite System',
    description:
      'Architected and implemented a distributed communication system in C using MPI. Designed the network topology, consensus model via leader election, and geographic logic using Haversine formulations.',
    language: 'C',
    url: null as string | null,
    tags: ['MPI', 'Distributed', 'C'],
  },
  {
    name: 'Concurrent Airline Reservations',
    description:
      'Architected a highly concurrent, multithreaded reservation system in C/pthreads. Engineered custom coarse-grained stacks, lock-based queues, and lazy-synchronized linked lists to ensure data integrity under contention.',
    language: 'C',
    url: null as string | null,
    tags: ['Concurrency', 'pthreads'],
  },
  {
    name: 'Linux Group Fairness Scheduler',
    description:
      'Modified the Linux kernel (v2.6.38.1) to implement a custom "Group Fairness" scheduling policy, engineering the CPU allocator to enforce equal time-share distribution across process groups.',
    language: 'C',
    url: null as string | null,
    tags: ['Linux Kernel', 'Scheduling'],
  },
]

export const certifications = [
  'Hands-on Containerization with Docker (Udemy, Dec 2025)',
  'Generative AI Productivity Skills — Microsoft & LinkedIn (Nov 2025)',
  'Introduction to Prompt Engineering for Generative AI (LinkedIn, Nov 2025)',
  'Prompt Engineering & Programming with OpenAI (Columbia+, Aug 2025)',
  'Google Cloud Big Data and ML Fundamentals (Coursera, Jun 2024)',
]

export const skills = [
  {
    group: 'Languages',
    items: ['C', 'C++', 'Java', 'Python', 'Shell / Bash', 'SQL'],
  },
  {
    group: 'Systems & Architecture',
    items: [
      'Distributed System Design',
      'Concurrent Algorithms',
      'Linux Kernel',
      'MPI',
      'System Modeling',
    ],
  },
  {
    group: 'AI & Data Infrastructure',
    items: [
      'NLP Pipeline Architecture',
      'LLM Prompt Engineering',
      'Big Data Infrastructure',
      'Machine Learning Models',
    ],
  },
  {
    group: 'Engineering Practices',
    items: [
      'System Architecture',
      'Code Review',
      'Technical Documentation',
      'Docker / Containerization',
    ],
  },
]

export const languages = [
  { name: 'Greek', level: 'Native or bilingual' },
  { name: 'English', level: 'Professional working proficiency' },
]
