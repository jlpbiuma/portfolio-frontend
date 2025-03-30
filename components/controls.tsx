// Add the controls component here
// UI Components
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Icons
import { Moon, Sun, Languages } from "lucide-react";
// Custom hooks
import { useTheme } from "next-themes";
import { useLanguage } from "../app/providers/language-provider";

export default function Controls() {
    const { setLanguage } = useLanguage();
    const { theme, setTheme } = useTheme();

    return (
        <div className="fixed top-4 right-4 flex gap-2 z-50">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Languages className="h-5 w-5" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLanguage('en')}>
                        English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('es')}>
                        Español
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                ) : (
                    <Moon className="h-5 w-5" />
                )}
            </Button>
        </div>
    )
}