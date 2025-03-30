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
                    <Card
                        key={index}
                        className={cn(
                            "transition-all duration-300 overflow-hidden",
                            styles.glass
                        )}
                    >
                        <CardHeader>
                            <CardTitle className="flex justify-between items-start">
                                <div className="flex gap-4 items-center">
                                    {item.image ? (
                                        <div className="relative h-12 w-12 flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.institution}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <GraduationCap className="h-12 w-12" />
                                    )}
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-xl font-bold">{item.degree}</h3>
                                        </div>
                                        <p className="text-lg text-muted-foreground">{item.institution}</p>
                                    </div>
                                </div>
                                <div className="text-right text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{item.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        {item.achievements.length > 0 && (
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2">
                                    {item.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
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