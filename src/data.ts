export const profile = {
  name: 'Ioannis Xiradakis',
  displayName: 'Ioannis (Giannis) Xiradakis',
  shortName: 'Giannis',
  title: 'Software Engineer & Researcher',
  subtitle: 'MSc @ Computer Science Department, UoC',
  affiliation: 'FORTH & University of Crete, Department of Computer Science',
  location: 'Heraklion, Crete, Greece',
  email: '',
  avatar: 'https://avatars.githubusercontent.com/u/140832924?v=4',
  linkedin: 'https://www.linkedin.com/in/xiradakisgiannis/',
  github: 'https://github.com/jiannisx',
  orcid: 'https://orcid.org/0009-0009-4974-4901',
  summary:
    'Concurrent data structures and distributed systems — algorithms that stay fast and correct under contention.',
  heroCta: 'Explore the work',
}

export const about = {
  research:
    'I work on concurrent data structures and distributed systems, focusing on algorithms that stay fast and correct under high contention.',
  learning:
    'I am expanding into big data and artificial intelligence, with a particular interest in prompt engineering and how large language models can support systems work.',
  future:
    'I want to deepen my skills in security and software engineering so the systems I build are not only fast, but also secure, reliable, and scalable.',
  drive:
    'I am motivated by large-scale problem solving, careful system design, and work at the intersection of research and practical engineering.',
}

export const experience = [
  {
    role: 'Teaching Assistant',
    org: 'University of Crete, Department of Computer Science',
    period: 'Sep 2025 – Present',
    detail:
      'TA for CS240 Data Structures and CS380 Algorithms (undergraduate), as a Master’s student.',
  },
  {
    role: 'Concurrent and Distributed Researcher',
    org: 'Foundation for Research and Technology – Hellas (FORTH)',
    period: 'Aug 2025 – Present',
    detail:
      'Research on concurrent algorithms and shared-memory data structures. Previously Undergraduate Concurrent and Distributed Researcher (Jul 2023 – Aug 2025).',
  },
  {
    role: 'Organizer',
    org: 'SPTDC 2026 — School on the Practice and Theory of Distributed Computing',
    period: 'Oct 2025 – May 2026',
    detail:
      'Organizing committee for the spring school in Heraklion, bridging theory and practice in distributed computing.',
    href: 'https://sptdc2026.ics.forth.gr/',
  },
  {
    role: 'Teaching Assistant',
    org: 'University of Crete, Department of Computer Science',
    period: 'Sep 2024 – Jan 2025',
    detail:
      'TA for CS508 Technical Writing in English (postgraduate), as an undergraduate student.',
  },
  {
    role: 'AI Chatbot Developer — Intern',
    org: 'KOSMOS Intelligent Systems and Services (KISS)',
    period: 'Jul 2024 – Oct 2024',
    detail:
      'Built an AI chatbot with Python and Rasa: NLU training, conversation flows, and integration into a user-facing environment.',
  },
]

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

export const research = [
  {
    title: 'Brief Announcement: Concurrent Double-Ended Priority Queues',
    venue: 'DISC 2025 — 39th International Symposium on Distributed Computing',
    date: 'Oct 2025',
    authors: 'Panagiota Fatourou, Eric Ruppert, Ioannis Xiradakis',
    description:
      'This work provides the first concurrent implementation specifically designed for a double-ended priority queue (DEPQ). We do this by describing a general way to add an ExtractMax operation to any concurrent priority queue that already supports Insert and ExtractMin operations. The construction uses two linearizable single-consumer priority queues to build a linearizable dual-consumer DEPQ (only one process can perform Extract operations at each end). This construction preserves lock-freedom. We then describe how to use a lock-based combining scheme to allow multiple consumers at each end of the DEPQ. To illustrate the technique, we apply it to a list-based priority queue.',
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
      'Awarded to the three students with the highest GPA upon graduation from the Department of Computer Science.',
  },
  {
    title: 'Undergraduate Scholarship “Stelios Orphanoudakis” 2024–2025',
    issuer: 'FORTH',
    period: 'Sep 2024',
    detail: 'Based on academic performance in 2023–2024.',
  },
  {
    title: '“Chrysanthos and Anastasia Karydi” Scholarship 2021',
    issuer: 'Karydi Foundation',
    period: 'Sep 2023',
    detail:
      'Awarded to students from Crete admitted with the highest grades to the University of Crete.',
  },
  {
    title: 'Undergraduate Scholarship “Stelios Orphanoudakis” 2022–2023',
    issuer: 'FORTH',
    period: 'Sep 2022',
    detail: 'Based on academic performance in 2021–2022.',
  },
]

export const volunteering = [
  {
    role: 'School Visit Presenter',
    org: 'University of Crete, Department of Computer Science',
    period: 'Feb 2026',
    detail:
      'Welcomed high school students to the Dept. of Computer Science (University of Crete), presenting our team’s research and discussing emerging technological trends.'
  },
  {
    role: 'Researcher’s Night Presenter',
    org: 'Foundation for Research and Technology',
    period: 'Sep 2025',
    detail:
      'Communicated complex technical concepts to a broad public audience and designed an interactive demo visualizing similarity search in large datasets for children.'
  },
  {
    role: 'Website Developer',
    org: 'Youth Crete (Pancretan Youth Assembly)',
    period: 'Mar 2024 – May 2024',
    detail:
      'Built the main YouthCrete website — a platform for youth participation in social activities, European programmes, competitions, and political institutions.',
  },
]

export const projects = [
  {
    name: 'SoftRoceTeRM',
    description:
      'Adapting TeRM’s RDMA-attached SSD memory extension to Linux Soft-RoCE — exploring whether its magic-page mechanism can be reproduced without real RDMA hardware (CS590.45, UoC).',
    language: 'Shell',
    url: 'https://github.com/jiannisx/SoftRoceTeRM',
    tags: ['RDMA', 'Systems', 'Linux'],
  },
  {
    name: 'Comparative Analysis of Schema Discovery under Controlled Noise Conditions',
    description:
      'Designed a parallelized FPGrowth-based algorithm to merge frequent transaction sets into coherent schema structures, then compared it with LLMs (Gemini and ChatGPT) on property graphs across different noise levels.',
    language: 'Python',
    url: null as string | null,
    tags: ['Schema Discovery', 'FPGrowth', 'Property Graphs', 'LLMs'],
  },
  {
    name: 'Tree-Based Indexers Demo',
    description:
      'Interactive demo presented at Researcher’s Night 2025 at FORTH — explaining tree-based indexers to kids and families.',
    language: 'Python',
    url: 'https://github.com/jiannisx/researchNightDemo2025',
    tags: ['Edtech', 'Indexing', 'Outreach'],
  },
  {
    name: 'MPI Satellite System',
    description:
      'Distributed satellite communication system in C with MPI: coordinator, satellites, and ground stations with leader election and Haversine-based distance calculations.',
    language: 'C',
    url: null as string | null,
    tags: ['MPI', 'Distributed', 'C'],
  },
  {
    name: 'Concurrent Airline Reservations',
    description:
      'Multithreaded airline reservation system in C/pthreads using coarse-grained stacks, lock-based queues, and lazy-synchronized linked lists with correctness checks.',
    language: 'C',
    url: null,
    tags: ['Concurrency', 'pthreads'],
  },
  {
    name: 'Linux Group Fairness Scheduler',
    description:
      'Implemented the “Group Fairness” scheduling policy in Linux kernel v2.6.38.1, allocating equal time shares across process groups.',
    language: 'C',
    url: null,
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
    items: ['C', 'C++', 'Java', 'Python', 'Shell / Bash', 'SQL', 'JavaScript'],
  },
  {
    group: 'Systems & Research',
    items: [
      'Concurrent Programming',
      'Distributed Systems',
      'Data Structures',
      'MPI',
      'Linux Kernel',
      'Debugging',
    ],
  },
  {
    group: 'AI & Data',
    items: ['Prompt Engineering', 'NLP / Rasa', 'Big Data', 'Machine Learning', 'NumPy', 'Pandas'],
  },
  {
    group: 'Practices',
    items: ['Teamwork', 'Code Review', 'Project Management', 'Science Communication', 'Docker'],
  },
]

export const languages = [
  { name: 'Greek', level: 'Native or bilingual' },
  { name: 'English', level: 'Professional working proficiency' },
]
