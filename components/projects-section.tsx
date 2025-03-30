import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project, ProjectsSectionProps } from "@/lib/types/types";
import { useLanguage } from "@/app/providers/language-provider";
import styles from '@/styles/glass.module.css';
import { cn } from "@/lib/utils";
import BadgeIcon from "./subcomponents/badge-icon";

export default function ProjectsSection({ title, projects }: ProjectsSectionProps) {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
            </div>
        </section>
    )
}

const ProjectItem = ({ title, description, technologies, link }: Project) => {
    const { t } = useLanguage();

    return (
        <Card
            className={cn(
                "transition-all duration-300",
                styles.glass
            )}
        >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, techIndex) => (
                        <BadgeIcon
                            key={techIndex}
                            tech={tech}
                            techIndex={techIndex}
                        />
                    ))}
                </div>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline mt-4 inline-block"
                    >
                        {t.nav.viewProject} →
                    </a>
                )}
            </CardContent>
        </Card>
    )
}