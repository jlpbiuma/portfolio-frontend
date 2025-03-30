export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface HeroSectionProps {
    name: string;
    role: string;
    welcome: string;
}

export interface SkillsProps {
    title: string;
    categories: {
        name: string;
        items: string[];
    }[];
}

export interface ProjectsSectionProps {
    title: string;
    projects: Project[];
}

export interface ContactSectionProps {
    title: string;
    items: {
        type: string;
        label: string;
        value: string;
        link: string;
    }[];
}

export interface EducationProps {
    title: string;
    items: {
        degree: string;
        institution: string;
        period: string;
        location: string;
        achievements: string[];
        image?: string;
    }[];
}

export interface ExperienceProps {
    title: string;
    items: {
        role: string;
        company: string;
        period: string;
        location: string;
        description: string;
        achievements: string[];
        image?: string;
    }[];
}

export interface BadgeIconProps {
    tech: string;
    techIndex: number;
}