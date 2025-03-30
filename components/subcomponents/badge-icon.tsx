import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { BadgeIconProps } from "@/lib/types/types";

const technologiesIcons = {
    "JavaScript": "/icons/js.png",
    "TypeScript": "/icons/ts.png",
    "shadcn/ui": "/icons/shadcn-ui.png",
    "Next.js": "/icons/nextjs.png",
    "Tailwind CSS": "/icons/tailwindcss.png",
    "React": "/icons/react.png",
    "Node.js": "/icons/nodejs.png",
    "Python": "/icons/python.png",
    "PostgreSQL": "/icons/postgresql.png",
    "AWS": "/icons/aws.png",
    "Git": "/icons/git.png",
    "Docker": "/icons/docker.png",
    "Jenkins": "/icons/jenkins.png",
    "Recharts": "/icons/recharts.png",
    "Flask": "/icons/flask.png",
    "MongoDB": "/icons/mongodb.svg",
    "MySQL": "/icons/mysql.png",
    "Arduino": "/icons/arduino.png",
    "Raspberry Pi": "/icons/raspberry.webp",
    "Express": "/icons/express.png",
    "Vue.js": "/icons/vuejs.png",
    "Laravel": "/icons/laravel.png",
    "ESP32": "/icons/esp32.png",
    "Wireshark": "/icons/wireshark.png",
    "Postman": "/icons/postman.webp",
    "Cursor": "/icons/cursor.webp",
    "Adobe Premiere": "/icons/abode-premiere.png",
    "Autocad": "/icons/autocad.png",
    "Firebase": "/icons/firebase.webp",
    "Oracle": "/icons/oracle.svg",
    "Pandas": "/icons/pandas.png",
    "Numpy": "/icons/numpy.png",
    "Keras": "/icons/keras.png",
    "TensorFlow": "/icons/tensorflow.png",
    "Flutter": "/icons/flutter.webp",
    "Dart": "/icons/dart.png",
    ".NET": "/icons/net.png",
    "Power BI": "/icons/power-bi.webp",
    "Hugging Face": "/icons/huggingface.png",
    "Ollama": "/icons/ollama.png",
    "OpenAI": "/icons/openai.webp",
    "v0": "/icons/v0.svg",
    "Jupyter Notebook": "/icons/jupyter.webp",
    "Proteus": "/icons/proteus.webp",
    "LTspice": "/icons/ltspice.png",
}

export default function BadgeIcon({
    tech,
    techIndex,
}: BadgeIconProps) {
    return (
        <Badge key={techIndex} variant="secondary" className="flex items-center gap-1">
            {technologiesIcons[tech as keyof typeof technologiesIcons] && (
                <Image
                    src={technologiesIcons[tech as keyof typeof technologiesIcons]}
                    alt={`${tech} icon`}
                    width={16}
                    height={16}
                />
            )}
            {tech}
        </Badge>
    );
}