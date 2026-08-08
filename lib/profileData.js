// ---------------------------------------------------------------------------
// All editable content for the profile page lives here.
// Add a project or a social link by adding an object to the relevant array —
// no JSX changes are required anywhere else in the app.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Saifullah Muhammad Abdulwahab',
  headline: 'I help businesses build interfaces users actually want to use.',
  location: 'Nigeria',
  role: 'Frontend Developer',
  badges: ['Information Technology Student', 'Web Developer', 'Open to connecting'],
};

// Replace with your real GitHub URL.
export const GITHUB_URL = 'https://github.com/YOUR_GITHUB_USERNAME';

export const socialLinks = [
  {
    platform: 'GitHub',
    username: 'View my repositories',
    description: 'Source code, experiments, and project history.',
    href: 'https://github.com/Saif-dev10',
    buttonText: 'View GitHub',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    username: 'Muhammad Saifullah',
    description: "Let's connect — open to roles and collaborations.",
    href: 'https://www.linkedin.com/in/saifdevx/',
    buttonText: 'Connect',
    icon: 'linkedin',
  },
  {
    platform: 'X',
    username: '@SaifDev_X',
    description: 'Thoughts on frontend, AI, and building in public.',
    href: 'https://x.com/SaifDev_X',
    buttonText: 'Connect',
    icon: 'x',
  },
];

// image is passed in from the page (static imports must live in a file
// Next.js can statically analyze), so each entry references an imageKey
// that page.jsx maps to the actual imported asset.
export const featuredProjects = [
  {
    imageKey: 'attendanceTracker',
    title: 'Attendance Tracker System',
    type: 'Web Application',
    description:
      'Helps students track course attendance and determine exam eligibility based on a 75% attendance threshold.',
    link: 'https://attendance-app-nine-rosy.vercel.app/',
    linkText: 'View Demo',
  },
  {
    imageKey: 'tradecraft',
    title: 'TradeCraft',
    type: 'Trading Platform',
    description:
      'A trading journal and risk-management platform for logging trades, analyzing performance, sizing positions, and reviewing weekly and monthly progress.',
    link: 'https://trade-craft-app-ryf8.vercel.app/',
    linkText: 'View Demo',
  },
  {
    imageKey: 'cocoDelight',
    title: 'Coco Delight',
    type: 'E-commerce Website',
    description:
      'COCO Delight is a modern catering and food-service web application designed to showcase products, services, and offerings through a clean, responsive interface. It focuses on making it easy for customers to explore the brand and its offerings while providing a professional digital presence.',
    link: 'https://the-coco-delight-app.vercel.app/',
    linkText: 'View Demo',
  },
];

export const coreSystems = [
  'User authentication systems',
  'Database design and integration (Firebase)',
  'State management across applications',
  'Deployment workflows (Vercel)',
  'Debugging and dependency resolution in real projects',
];

export const interests = [
  'Learning new technologies quickly',
  'Breaking down problems and debugging issues',
  'Building responsive user interfaces',
  'Turning ideas into functional applications',
  'Working independently from concept to deployment',
  'Understanding what users actually need, not just what looks good',
];

// Pulled directly from the stack mentioned in the About copy — nothing added.
export const skills = ['JavaScript', 'React', 'Next.js', 'Firebase', 'Tailwind CSS', 'Vercel', 'GitHub'];
