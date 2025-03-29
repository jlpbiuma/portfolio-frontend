import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SkillsProps } from "@/lib/types/types";
import BadgeIcon from "./subcomponents/badge-icon";


export default function SkillsSection({ title, categories }: SkillsProps) {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{category.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill, i) => (
                                    <BadgeIcon
                                        key={i}
                                        tech={skill}
                                        techIndex={i}
                                    />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
} 