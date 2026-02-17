
import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Terminal, 
  BrainCircuit, 
  Github, 
  Linkedin, 
  Mail,
  FileCode,
  Layers,
  Container
} from 'lucide-react';
import { Skill, Project, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Python', level: 90, icon: 'python', color: '#3776ab' },
  { name: 'JavaScript', level: 85, icon: 'javascript', color: '#f7df1e' },
  { name: 'Java', level: 75, icon: 'java', color: '#007396' },
  { name: 'Go', level: 65, icon: 'go', color: '#00add8' },
  { name: 'MariaDB/MySQL', level: 80, icon: 'database', color: '#003545' },
  { name: 'MongoDB', level: 70, icon: 'database', color: '#47a248' },
  { name: 'AI/ML Basics', level: 60, icon: 'brain', color: '#ff6f61' },
  { name: 'Linux', level: 75, icon: 'linux', color: '#fcc624' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Neural Network Visualizer',
    description: 'A web-based tool to visualize backpropagation in real-time.',
    longDescription: 'An interactive platform built for students to understand how weights and biases adjust during training cycles. It supports various activation functions and custom architectures.',
    tech: ['React', 'D3.js', 'Python', 'Flask'],
    image: 'https://picsum.photos/seed/nn/800/450',
    github: 'https://github.com/sanjay-ai',
    demo: '#'
  },
  {
    id: 2,
    title: 'Distributed Logger (Go)',
    description: 'High-performance logging system built with Golang.',
    longDescription: 'A robust, distributed system designed for microservices to push logs via gRPC. Features real-time filtering and storage in MongoDB.',
    tech: ['Golang', 'gRPC', 'MongoDB', 'Docker'],
    image: 'https://picsum.photos/seed/go/800/450',
    github: 'https://github.com/sanjay-ai',
  },
  {
    id: 3,
    title: 'E-Commerce REST API',
    description: 'Scalable backend architecture for online retail.',
    longDescription: 'A complete RESTful service featuring JWT authentication, role-based access control, and complex query filtering for product searches.',
    tech: ['Node.js', 'Express', 'MySQL', 'Redis'],
    image: 'https://picsum.photos/seed/api/800/450',
    demo: '#'
  },
];

export const SOCIALS = [
  { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
  { name: 'Email', icon: <Mail size={20} />, url: 'mailto:sanjay@university.edu' },
];

export const TECH_ICONS = [
  { icon: <Code2 className="text-blue-400" />, label: 'Python' },
  { icon: <Terminal className="text-purple-400" />, label: 'Linux' },
  { icon: <Database className="text-green-400" />, label: 'MongoDB' },
  { icon: <BrainCircuit className="text-pink-400" />, label: 'AI/ML' },
  { icon: <Globe className="text-indigo-400" />, label: 'Web' },
  { icon: <Cpu className="text-yellow-400" />, label: 'Embedded' },
  { icon: <FileCode className="text-orange-400" />, label: 'Java' },
  { icon: <Layers className="text-cyan-400" />, label: 'REST APIs' },
];
