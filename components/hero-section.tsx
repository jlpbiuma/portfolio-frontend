// Add the HeroSection component here
import Image from "next/image";
import type { HeroSectionProps } from "@/lib/types/types";

export default function HeroSection({ name, role, welcome }: HeroSectionProps) {
    return (
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                    src="/imagen_perfil.jpeg"
                    alt="Profile Picture"
                    fill
                    className="rounded-full object-cover border-4 border-primary shadow-lg"
                    priority
                />
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                    {role}
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    {welcome}
                </p>
            </div>
        </section>
    )
}