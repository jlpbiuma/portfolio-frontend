import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import type { ProjectsSectionProps } from "@/lib/types/types";
import { useLanguage } from "@/app/providers/language-provider";
import styles from '@/styles/glass.module.css';
import { cn } from "@/lib/utils";
import BadgeIcon from "./subcomponents/badge-icon";



export default function ProjectsSection({ title, projects }: ProjectsSectionProps) {
    const { t } = useLanguage();

    return (
        <section>
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className={cn(
                            "transition-all duration-300",
                            styles.glass
                        )}
                    >
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <BadgeIcon
                                        key={techIndex}
                                        tech={tech}
                                        techIndex={techIndex}
                                    />
                                ))}
                            </div>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline mt-4 inline-block"
                                >
                                    {t.nav.viewProject} →
                                </a>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}