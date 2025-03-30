"use client"
import "./background-particle.css";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ParticlesBackground() {
    const { theme, resolvedTheme } = useTheme();

    useEffect(() => {
        // Load particles.js script properly
        const loadParticlesJS = async () => {
            // First, load the particles.js library if it's not already loaded
            if (!window.particlesJS) {
                const particlesScript = document.createElement('script');
                particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
                particlesScript.async = true;

                // Wait for the script to load
                await new Promise((resolve, reject) => {
                    particlesScript.onload = resolve;
                    particlesScript.onerror = reject;
                    document.head.appendChild(particlesScript);
                });
            }

            // Determine if dark mode is active
            const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';

            // Colors for particles based on theme
            const particleColors = isDarkMode
                ? ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"] // Dark mode colors
                : ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]; // Light mode colors (can be changed)

            // Line colors based on theme    
            const lineColor = isDarkMode ? "#ffffff" : "#000000";

            // Background color applied via CSS

            // Initialize particles once the library is loaded
            window.particlesJS("particles-js", {
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: particleColors
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: isDarkMode ? "#fff" : "#000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: isDarkMode ? 0.6 : 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 2,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 120,
                        color: lineColor,
                        opacity: isDarkMode ? 0.4 : 0.3,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "grab"
                        },
                        onclick: {
                            enable: false
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        };

        // Only run after the component is mounted and theme is available
        if (typeof window !== 'undefined' && (theme || resolvedTheme)) {
            loadParticlesJS().catch(console.error);
        }

        // Cleanup function
        return () => {
            // If there was a particles instance, we could destroy it here
            if (window.pJSDom && window.pJSDom.length > 0) {
                // This attempts to clean up particles properly
                window.pJSDom = [];
                const canvas = document.querySelector('#particles-js canvas');
                if (canvas) {
                    canvas.remove();
                }
            }
        };
    }, [theme, resolvedTheme]); // Re-run when theme changes

    return (
        <div id="particles-js" className="fixed inset-0 -z-10 h-full w-full bg-background transition-colors duration-300" />
    );
}