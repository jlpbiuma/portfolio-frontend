import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SkillsProps, Skill } from "@/lib/types/types";
import BadgeIcon from "./subcomponents/badge-icon";
import styles from '@/styles/glass.module.css';
import { cn } from "@/lib/utils";


export default function SkillsSection({ title, categories }: SkillsProps) {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <SkillsItem key={index} {...category} />
                ))}
            </div>
        </section>
    );
}

const SkillsItem = ({ name, items }: Skill) => {
    return (
        <Card
            className={cn(
                "transition-all duration-300 overflow-hidden",
                styles.glass
            )}
        >
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                        <BadgeIcon
                            key={i}
                            tech={skill}
                            techIndex={i}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}