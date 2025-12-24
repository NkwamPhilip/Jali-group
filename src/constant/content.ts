import { Mic, TrendingUp, BookOpen } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  image: string;
  aspectRatio: "landscape" | "portrait";
  category: string;
}

export interface CommunityMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  company?: string;
}

export const SERVICES: Service[] = [
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Transformational talks that inspire action and create lasting impact. From keynotes to workshops, we deliver messages that resonate.",
    href: "/services#speaking"
  },
  {
    icon: TrendingUp,
    title: "Business Growth Consulting",
    description: "Strategic consulting to scale your business through proven systems, story-driven marketing, and sustainable growth frameworks.",
    href: "/services#consulting"
  },
  {
    icon: BookOpen,
    title: "Online Courses",
    description: "Comprehensive learning experiences that transform mindsets and build practical skills for personal and professional growth.",
    href: "/courses"
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: "1",
    title: "The Power of Storytelling in Business",
    description: "Discover how narrative-driven strategies can transform your brand and connect with your audience on a deeper level.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    aspectRatio: "landscape",
    category: "Business Strategy"
  },
  {
    id: "2",
    title: "Building Resilient Teams",
    description: "Learn the frameworks for creating teams that thrive under pressure and adapt to change seamlessly.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1200&fit=crop",
    aspectRatio: "portrait",
    category: "Leadership"
  },
  {
    id: "3",
    title: "Growth Through Connection",
    description: "Explore how meaningful relationships drive sustainable business growth and personal transformation.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop",
    aspectRatio: "landscape",
    category: "Growth"
  },
  {
    id: "4",
    title: "Transforming Mindsets",
    description: "Unlock the potential within your organization by shifting perspectives and embracing new possibilities.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=1200&fit=crop",
    aspectRatio: "portrait",
    category: "Transformation"
  },
  {
    id: "5",
    title: "Strategic Communication",
    description: "Master the art of delivering messages that inspire action and create lasting impact in your industry.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop",
    aspectRatio: "landscape",
    category: "Communication"
  },
  {
    id: "6",
    title: "Innovation in Practice",
    description: "Practical approaches to fostering innovation and driving change in traditional business environments.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=1200&fit=crop",
    aspectRatio: "portrait",
    category: "Innovation"
  }
];

export const COMMUNITY_MEMBERS: CommunityMember[] = [
  {
    id: "1",
    name: "Victor Okafor",
    role: "Founder",
    avatar: "https://i.pravatar.cc/300?img=1",
    company: "Jali Africa"
  },
  {
    id: "2",
    name: "Omoge Campus",
    role: "Head of operations",
    avatar: "https://i.pravatar.cc/300?img=2",
    company: "Jali Africa"
  },
  {
    id: "3",
    name: "Tife Matt",
    role: "CEO",
    avatar: "https://i.pravatar.cc/300?img=3",
    company: "Glidex Technologies"
  },
  {
    id: "4",
    name: "Oloruntoba Akinwale",
    role: "Executive",
    avatar: "https://i.pravatar.cc/300?img=4",
    company: "Enterprise Solutions"
  },
  {
    id: "5",
    name: "Olajumoke Afolabi",
    role: "VP Strategy",
    avatar: "https://i.pravatar.cc/300?img=5",
    company: "Global Ventures"
  },
  {
    id: "6",
    name: "Adebayo Olaoluwa",
    role: "Consultant",
    avatar: "https://i.pravatar.cc/300?img=6",
    company: "Strategic Advisors"
  },
  {
    id: "7",
    name: "Olaoluwa Oyediran",
    role: "Head of Growth",
    avatar: "https://i.pravatar.cc/300?img=7",
    company: "ScaleUp Inc"
  },
  {
    id: "8",
    name: "Olatunji Adebayo",
    role: "CEO",
    avatar: "https://i.pravatar.cc/300?img=8",
    company: "Innovation Labs"
  }
];

export const STATS = [
  { value: "500+", label: "Speaking Engagements" },
  { value: "50+", label: "Companies Served" },
  { value: "10K+", label: "Students Trained" },
  { value: "98%", label: "Client Satisfaction" }
];

