import React from 'react';
import {
  Users,
  ShieldCheck,
  Settings,
  Truck,
  Server,
  Utensils,
  Briefcase,
  Layout,
  Globe,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import { Service, JobCategory } from './types';

export const SERVICES: Service[] = [
  {
    id: 'manpower',
    title: 'Manpower Outsourcing',
    description:
      'Expert staffing solutions including Security Guards, CCTV Operators, Office Staff, and Industrial Manpower.',
    icon: 'Users',
    imageUrl:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
    path: '/manpower',
  },
  {
    id: 'it',
    title: 'IT Infrastructure Services',
    description:
      'Comprehensive IT support, network management, and infrastructure maintenance for modern enterprises.',
    icon: 'Server',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    path: '/it',
  },
  {
    id: 'supply',
    title: 'Supply Services',
    description:
      'Reliable supply chain solutions for Corporate Furniture and Garment requirements.',
    icon: 'Truck',
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    path: '/supply',
  },
  {
    id: 'food',
    title: 'Food Supply Services',
    description:
      'Quality-driven food and catering supply services for industrial and commercial establishments.',
    icon: 'Utensils',
    imageUrl:
      'https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=800&auto=format&fit=crop',
    path: '/food',
  },
  {
    id: 'consultancy',
    title: 'Consultancy Services',
    description:
      'Strategic business advice to optimize operations, compliance, and growth trajectories.',
    icon: 'Briefcase',
    imageUrl:
      'https://i.pinimg.com/1200x/88/74/c7/8874c72b420869e2c7efd155bb8985cc.jpg',
    path: '/consultancy',
  },
  {
    id: 'project',
    title: 'Project Management',
    description:
      'End-to-end execution of complex corporate projects with precision and efficiency.',
    icon: 'Layout',
    imageUrl:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    path: '/project',
  },
  {
    id: 'e-commerce',
    title: 'E-commerce Support',
    description:
      'Specialized support services for online businesses, including logistics and customer handling.',
    icon: 'Globe',
    imageUrl:
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop',
    path: '/e-commerce',
  },
  {
    id: 'cleaning',
    title: 'Cleaning & Sanitization',
    description:
      'Professional-grade facility management ensuring clean, safe, and hygienic work environments.',
    icon: 'Wrench',
    imageUrl:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    path: '/cleaning',
  },
];

export const JOB_CATEGORIES: JobCategory[] = [
  {
    title: 'Security & Surveillance',
    description: 'Guards, CCTV monitors, and field supervisors.',
  },
  {
    title: 'Housekeeping & Cleaning',
    description: 'Facility maintenance and industrial cleaning staff.',
  },
  {
    title: 'Office & Administrative Staff',
    description: 'Receptionists, data entry operators, and assistants.',
  },
  {
    title: 'Technical & IT Support',
    description: 'Network engineers, support techs, and field engineers.',
  },
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
};
