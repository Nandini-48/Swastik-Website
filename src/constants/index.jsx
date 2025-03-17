import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Website Development",
    description:
      "We create modern, fast, and SEO-friendly websites for local businesses.",
  },
  {
    icon: <Fingerprint />,
    text: " E-commerce Solutions",
    description:
      "We build complete online stores for retailers and distributors.",
  },
  {
    icon: <ShieldHalf />,
    text: "SaaS Platforms",
    description:
      "We develop powerful SaaS tools to automate business operations.",
  },
  {
    icon: <BatteryCharging />,
    text: "Cybersecurity & Penetration Testing",
    description:
      "We secure digital assets through ethical hacking and security audits.",
  },
  {
    icon: <PlugZap />,
    text: " Custom Software Development",
    description:
      "We provide tailored software solutions based on business needs.",
  },
  {
    icon: <GlobeLock />,
    text: "Video Editing & Digital Marketing",
    description:
      "We enhance brand growth through professional video editing and marketing."

  },
];

export const checklistItems = [
  {
    title: "Hassle-Free Digital Presence",
    description:
      "We handle everything from website development to SEO, ensuring businesses get an online presence without any technical headaches.",
  },
  {
    title: "Automated Business Operations",
    description:
      "Our AI and automation solutions reduce manual work, streamline workflows, and save time, allowing businesses to focus on growth.",
  },
  {
    title: "Scalable & Secure Infrastructure",
    description:
      "With cloud and DevOps services, we ensure businesses have a reliable, scalable, and secure tech foundation that grows with them.",
  },
  {
    title: "End-to-End IT Support",
    description:
      "From consultation to troubleshooting, we provide continuous IT support, ensuring businesses run smoothly without tech disruptions.",
  },
];

export const pricingOptions = [
  {
    title: "Website Development",
    price: "Price : ",
    features: [
      "Modern",
      "Fast",
      "SEO-friendly",
      "Private Mode",
    ],
  },
  {
    title: "SaaS Platforms",
    price: "Price : ",
    features: [
      "APIs & Integrations",
      "Cloud-Based",
      "Subscription Model",
      "Customization",
    ],
  },
  {
    title: "Custom Software Development",
    price: "Price : ",
    features: [
      "Unique UI/UX",
      "Security & Compliance",
      "High Performance",
      "Scalability",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
