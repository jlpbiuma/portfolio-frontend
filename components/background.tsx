"use client"

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Background() {
    const { theme } = useTheme();

    return (
        <div className="fixed inset-0 -z-10 h-full w-full">
            <div className={cn(
                "absolute inset-0 bg-[size:20px_20px] opacity-25",
                theme === "dark" ? "bg-grid-white/[0.2]" : "bg-grid-black/[0.2]",
            )} />
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