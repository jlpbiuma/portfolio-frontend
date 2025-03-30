"use client"

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Background() {
    const { theme } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
            setTrail((prev) => [
                { x: event.clientX, y: event.clientY },
                ...prev.slice(0, 9), // Mantener solo los últimos 10 puntos
            ]);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
            <div className={cn(
                "absolute inset-0 bg-[size:20px_20px] opacity-25",
                theme === "dark" ? "bg-grid-white/[0.2]" : "bg-grid-black/[0.2]",
            )} />

            {/* Efecto de estela del cursor */}
            {trail.map((point, index) => (
                <div
                    key={index}
                    className={cn(
                        "absolute rounded-full",
                        theme === "dark"
                            ? "bg-gradient-radial from-purple-500/50 to-transparent"
                            : "bg-gradient-radial from-blue-300/50 to-transparent",
                        "h-8 w-8 blur-[20px] transition-opacity duration-300 ease-out",
                        "opacity-100"
                    )}
                    style={{
                        left: `${point.x}px`,
                        top: `${point.y}px`,
                        opacity: 1 - index * 0.1, // Hacer que la opacidad disminuya con la distancia
                    }}
                />
            ))}

            {/* Fondos originales */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={cn(
                    "h-[50vh] w-[50vh] rounded-full",
                    theme === "dark"
                        ? "bg-gradient-to-r from-violet-500/30 to-purple-500/30"
                        : "bg-gradient-to-r from-blue-300/30 to-cyan-300/30",
                    "blur-[100px] animate-pulse"
                )} />
                <div className={cn(
                    "absolute h-[40vh] w-[40vh] rounded-full",
                    theme === "dark"
                        ? "bg-gradient-to-r from-indigo-500/40 to-blue-500/40"
                        : "bg-gradient-to-r from-orange-300/40 to-rose-300/40",
                    "blur-[100px] animate-pulse delay-1000"
                )} />
            </div>
        </div>
    );
} 