export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'security-systems',
    title: 'Security Systems',
    description: 'Advanced CCTV surveillance and integrated security solutions for homes and businesses.',
    icon: 'ShieldCheck'
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure',
    description: 'Robust networking, server management, and cloud infrastructure setup.',
    icon: 'Server'
  },
  {
    id: 'home-automation',
    title: 'Smart Home Automation',
    description: 'Seamlessly control your environment with intelligent automation technologies.',
    icon: 'Home'
  },
  {
    id: 'access-control',
    title: 'Access Control',
    description: 'Biometric and card-based systems to secure your entry and exit points.',
    icon: 'Lock'
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety',
    description: 'State-of-the-art fire detection and prevention systems.',
    icon: 'Flame'
  },
  {
    id: 'consultancy',
    title: 'IT Consultancy',
    description: 'Expert advice on optimizing your technology stack for maximum efficiency.',
    icon: 'Lightbulb'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Corporate HQ Security',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a7c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Smart Luxury Villa',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Data Center Networking',
    category: 'IT Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Retail Chain Surveillance',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
  }
];
