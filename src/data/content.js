export const projects = [
  {
    title: 'Face Recognition Attendance',
    description: 'Real-time, multi-branch authentication using facial embeddings and anti-spoofing.',
    tags: ['OpenCV', 'Python', 'Deep Learning'],
    liveUrl: null,
    sourceUrl: 'https://github.com/Aravind56565657/Face_attendace_system',
  },
  {
    title: 'Emotion Analysis AI',
    description: '92.5% accuracy in multi-class emotion detection with scalable inference.',
    tags: ['NLP', 'PyTorch', 'Transformers'],
    liveUrl: null,
    sourceUrl: '#',
  },
  {
    title: 'Job Portal',
    description: 'A full-stack job listing platform with user authentication, role-based access, job posting, application tracking, and responsive UI for seamless recruitment management.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    liveUrl: 'https://job-portal-2bq3.vercel.app/',
    sourceUrl: 'https://github.com/Aravind56565657/job-portal',
  },  
  {
    title: 'Document Extraction',
    description: 'Intelligent parser for structured data extraction from complex PDF layouts.',
    tags: ['OCR', 'LayoutLM', 'Python'],
    liveUrl: null,
    sourceUrl: 'https://github.com/Aravind56565657/Doc-to-Data',
  },
  {
    title: 'Smart Notifier',
    description: 'Auto-classifies and summarizes emails to Telegram in real-time.',
    tags: ['Automation', 'Telegram Bot API', 'NLP'],
    liveUrl: null,
    sourceUrl: '#',
  },
]

export const skillGroups = [
  { title: 'Frontend & UI', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Next.js'] },
  { title: 'AI & Intelligence', skills: ['Python', 'TensorFlow', 'LangChain', 'OpenAI API', 'RAG Systems', 'Hugging Face'] },
  { title: 'Backend & Core', skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'C++'] },
  { title: 'DevOps & Tools', skills: ['Git', 'Docker', 'AWS', 'Linux', 'Figma', 'Postman'] },
]

/**
 * Certifications – add image paths for each cert.
 * Place images in public/certificates/ (e.g. public/certificates/aicte-bootcamp.jpg)
 */
export const certifications = [
  { title: 'AICTE Bootcamp', issuer: 'AICTE', image: '/certificates/Aicte-bootcamp.jpg' },
  { title: 'AICTE Bootcamp Volunteer', issuer: 'AICTE', image: '/certificates/Aicte-Bootcamp-volunteer.jpg' },
  { title: 'AI Internship', issuer: '4SightAI', image: '/certificates/AI-Intern.jpg' },
  { title: 'C Programming', issuer: 'Technical', image: '/certificates/C-language.jpg' },
  { title: 'Smart Idea Challenge', issuer: 'Innovation Contest', image: '/certificates/smart-idea-challenge.jpg' },
  { title: 'Smart Irrigation Project', issuer: 'Engineering Project', image: '/certificates/smart-irrigation.jpg' },
  { title: 'Student Coordinator', issuer: 'Leadership', image: '/certificates/student-coordinator.jpg' },
]

/**
 * Beyond the Code – personal narrative, philosophy, interests.
 * Edit to reflect your story.
 */
export const about = {
  mission:
    "I build systems that think, adapt, and scale — but I believe the best engineers are shaped by curiosity beyond the screen.",
  education: {
    degree: "B.Tech in CSE (Data Science)",
    college: "RVR & JC College of Engineering",
    cgpa: "8.6",
  },
  focus: [
    "Large language models & agentic workflows",
    "Intelligent automation & RAG systems",
    "Full-stack products with AI at the core",
  ],
  drive: [
    {
      icon: "🚀",
      title: "Impact over hype",
      text: "I care about solving real problems — from attendance automation to document extraction — not chasing buzzwords.",
    },
    {
      icon: "📚",
      title: "Learn in public",
      text: "Teaching clarifies thinking. I share what I build and learn to stay accountable and help others grow.",
    },
    {
      icon: "⚡",
      title: "Ship fast, iterate smarter",
      text: "Done is better than perfect. I focus on getting working solutions out, then improving based on feedback.",
    },
  ],
  beyond: {
    headline: "When I'm not coding",
    items: [
      "Exploring AI papers and open-source projects",
      "Contributing to campus tech events and bootcamps",
      "Tinkering with automation and side projects",
    ],
  },
}

export const positions = [
  {
    title: 'Student Coordinator',
    org: 'College Fests & Cultural Events',
    description: 'Organized college fests and cultural events, managing logistics, planning, and execution to enhance student engagement.',
  },
  {
    title: 'Member',
    org: 'Student Integrated Committee',
    description: 'Actively contributed to student welfare initiatives and supported event coordination and campus activities.',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

/** Profile photo path - place your image in public/profile.jpg */
export const profileImage = '/profile.jpg'

export const contact = {
  email: 'aravindkumar23567@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/aravind-kumar-maradana-209061290/',
  github: 'https://github.com/Aravind56565657',
}
