import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { BadgeIconProps } from "@/lib/types/types";

const technologiesIcons = {
    "JavaScript": "/icons/js.png",
    "TypeScript": "/icons/ts.png",
    "shadcn/ui": "/icons/shadcn-ui.png",
    "Next.js": "/icons/nextjs.png",
    "Tailwind CSS": "/icons/tailwindcss.png",
    "React": "/icons/react.png",
    "Node.js": "/icons/nodejs.png",
    "Python": "/icons/python.png",
    "PostgreSQL": "/icons/postgresql.png",
    "AWS": "/icons/aws.png",
    "Git": "/icons/git.png",
    "Docker": "/icons/docker.png",
    "Jenkins": "/icons/jenkins.png",
}

export default function BadgeIcon({
    tech,
    techIndex,
}: BadgeIconProps) {
    return (
        <Badge key={techIndex} variant="secondary" className="flex items-center gap-1">
            {technologiesIcons[tech as keyof typeof technologiesIcons] && (
                <Image
                    src={technologiesIcons[tech as keyof typeof technologiesIcons]}
                    alt={`${tech} icon`}
                    width={16}
                    height={16}
                />
            )}
            {tech}
        </Badge>
    );
}