import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import type { ContactSectionProps, Contact } from "@/lib/types/types";
import styles from '@/styles/glass.module.css';
import { cn } from "@/lib/utils";

export default function ContactSection({ title, items }: ContactSectionProps) {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                    <ContactItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
}

const ContactItem = ({ type, label, value, link }: Contact) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
        >
            <Card
                className={cn(
                    "transition-all duration-300 overflow-hidden",
                    styles.glass
                )}
            >
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        {getContactIcon(type)}
                        <span>{label}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {value}
                </CardContent>
            </Card>
        </a>
    )
}

function getContactIcon(type: string) {
    switch (type) {
        case 'email':
            return <Mail className="h-5 w-5" />;
        case 'phone':
            return <Phone className="h-5 w-5" />;
        case 'location':
            return <MapPin className="h-5 w-5" />;
        case 'linkedin':
            return <Linkedin className="h-5 w-5" />;
        case 'github':
            return <Github className="h-5 w-5" />;
        default:
            return null;
    }
} 