import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap } from "lucide-react";
import Image from "next/image";
import type { EducationProps } from "@/lib/types/types";
import styles from '@/styles/glass.module.css';
import { cn } from "@/lib/utils";

export default function EducationSection({ title, items }: EducationProps) {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            <div className="space-y-6">
                {items.map((item, index) => (
                    <Card key={index} className={cn("transition-all duration-300 overflow-hidden", styles.glass)}>
                        <CardHeader className="pb-3">
                            <CardTitle className="flex flex-col gap-4">
                                {/* Top section with image and degree */}
                                <div className="flex gap-3">
                                    {item.image ? (
                                        <div className="relative h-12 w-12 flex-shrink-0 mt-1">
                                            <Image src={item.image || "/placeholder.svg"} alt={item.institution} fill className="object-contain" />
                                        </div>
                                    ) : (
                                        <GraduationCap className="h-12 w-12 flex-shrink-0 mt-1" />
                                    )}
                                    <div className="min-w-0 flex-grow">
                                        <h3 className="text-xl font-bold leading-tight break-words">{item.degree}</h3>
                                        <p className="text-lg text-muted-foreground break-words mt-1">{item.institution}</p>
                                    </div>
                                </div>

                                {/* Metadata section */}
                                <div className="flex flex-wrap gap-y-2 gap-x-4 text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 flex-shrink-0" />
                                        <span>{item.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 flex-shrink-0" />
                                        <span className="break-words">{item.location}</span>
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>

                        {item.achievements.length > 0 && (
                            <CardContent>
                                <ul
                                    className={cn(
                                        "list-disc list-inside space-y-2",
                                        "md:block", // Always visible on medium screens and up
                                    )}
                                >
                                    {item.achievements.map((achievement, i) => (
                                        <li key={i} className="break-words pl-1">
                                            <span className="pl-2">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        )}
                    </Card>
                ))}
            </div>
        </section>
    );
} 