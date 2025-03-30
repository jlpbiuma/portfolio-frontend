// Add the HeroSection component here
import Image from "next/image";
import type { HeroSectionProps } from "@/lib/types/types";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react"

export default function HeroSection({ name, role, welcome, download }: HeroSectionProps) {
    return (
        <section className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-4">
                <div className="w-full md:w-[40%] flex justify-center md:justify-start">
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                        <Image
                            src="/imagen_perfil.jpeg"
                            alt="Profile Picture"
                            fill
                            className="rounded-full object-cover border-4 border-primary shadow-lg"
                            priority
                        />
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                        {role}
                    </p>
                    <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                        {welcome}
                    </p>
                    <Button asChild className="gap-2 mt-2">
                        <a href="/cv.pdf" download className="inline-flex items-center">
                            <Download className="h-4 w-4 mr-2" />
                            <span>{download}</span>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}