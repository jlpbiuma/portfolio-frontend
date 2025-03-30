import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Building2 } from "lucide-react";
import Image from "next/image";
import styles from '@/styles/glass.module.css';
import { cn } from "@/lib/utils";
import type { ExperienceProps, Experience } from "@/lib/types/types";

export default function ExperienceSection({ title, items }: ExperienceProps) {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            <div className="space-y-6">
                {items.map((item, index) => (
                    <ExperienceItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
}

const ExperienceItem = ({ role, company, period, location, description, achievements, image }: Experience) => {
    return (
        <Card className={cn("transition-all duration-300 overflow-hidden", styles.glass)}>
            <CardHeader className="pb-3">
                <CardTitle className="flex flex-col gap-4">
                    {/* Top section with image, role and company */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                        <div className="flex gap-4 items-start">
                            {image ? (
                                <div className="relative h-12 w-12 flex-shrink-0 mt-1">
                                    <Image src={image || "/placeholder.svg"} alt={company} fill className="object-contain" />
                                </div>
                            ) : (
                                <Building2 className="h-12 w-12 flex-shrink-0 mt-1" />
                            )}
                            <div className="min-w-0 flex-grow">
                                <h3 className="text-xl font-bold leading-tight break-words">{role}</h3>
                                <p className="text-lg text-muted-foreground break-words mt-1">{company}</p>
                            </div>
                        </div>

                        {/* Metadata section */}
                        <div className="flex flex-wrap gap-y-2 gap-x-4 text-muted-foreground sm:text-right sm:flex-col sm:flex-nowrap">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 flex-shrink-0" />
                                <span>{period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                <span className="break-words">{location}</span>
                            </div>
                        </div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-4 break-words">{description}</p>
                <ul className="list-disc list-inside space-y-2">
                    {achievements.map((achievement, i) => (
                        <li key={i} className="break-words pl-1">
                            <span className="pl-2">{achievement}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}