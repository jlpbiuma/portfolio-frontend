import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { BadgeIconProps } from "@/lib/types/types";

const technologiesIcons = {
    // Languages
    "JavaScript": "/icons/js.png",
    "TypeScript": "/icons/ts.png",
    "Python": "/icons/python.png",
    "Java": "/icons/java.png",
    "C": "/icons/c.png",
    "C++": "/icons/cpp.png",
    "C#": "/icons/csharp.png",
    "PHP": "/icons/php.png",
    "Dart": "/icons/dart.png",
    "R": "/icons/r.png",

    // Frontend
    "React": "/icons/react.png",
    "Next.js": "/icons/nextjs.png",
    "Vue.js": "/icons/vuejs.png",
    "VueJS": "/icons/vuejs.png",
    "Tailwind CSS": "/icons/tailwindcss.png",
    "Tailwind": "/icons/tailwindcss.png",
    "shadcn/ui": "/icons/shadcn-ui.png",
    "Shadcn": "/icons/shadcn-ui.png",
    "Axios": "/icons/axios.png",
    "Flutter": "/icons/flutter.webp",

    // Backend
    "Node.js": "/icons/nodejs.png",
    "NodeJS": "/icons/nodejs.png",
    "Flask": "/icons/flask.png",
    "FastAPI": "/icons/fastapi.svg",
    "Laravel": "/icons/laravel.png",
    "Django": "/icons/django.png",
    "SpringBoot": "/icons/springboot.svg",
    ".NET": "/icons/net.png",
    "Express": "/icons/express.png",

    // Databases
    "PostgreSQL": "/icons/postgresql.png",
    "MySQL": "/icons/mysql.png",
    "MongoDB": "/icons/mongodb.svg",
    "Firebase": "/icons/firebase.webp",
    "Oracle": "/icons/oracle.svg",

    // Cloud & DevOps
    "AWS": "/icons/aws.png",
    "Azure": "/icons/azure.png",
    "GCP": "/icons/gcp.png",
    "Docker": "/icons/docker.png",
    "Docker compose": "/icons/docker.png",
    "Docker Compose": "/icons/docker.png",
    "Jenkins": "/icons/jenkins.png",
    "GitHub Actions": "/icons/github.png",
    "Pytest": "/icons/pytest.png",

    // Tools & Engineering
    "Git": "/icons/git.png",
    "GitHub": "/icons/github.png",
    "BitBucket": "/icons/bitbucket.webp",
    "Wireshark": "/icons/wireshark.png",
    "Postman": "/icons/postman.webp",
    "Autocad": "/icons/autocad.png",
    "AutoCAD": "/icons/autocad.png",
    "Wokwi": "/icons/wokwi.png",
    "Adobe Premiere": "/icons/abode-premiere.png",

    // Hardware
    "Arduino": "/icons/arduino.png",
    "Raspberry Pi": "/icons/raspberry.webp",
    "ESP32": "/icons/esp32.png",
    "Proteus": "/icons/proteus.webp",
    "LTspice": "/icons/ltspice.png",

    // AI & Data
    "Keras": "/icons/keras.png",
    "TensorFlow": "/icons/tensorflow.png",
    "Tensorflow": "/icons/tensorflow.png",
    "PyTorch": "/icons/pytorch.png",
    "Hugging Face": "/icons/huggingface.png",
    "OpenAI": "/icons/openai.webp",
    "Power BI": "/icons/power-bi.webp",
    "PowerBI": "/icons/power-bi.webp",
    "Scikit-Learn": "/icons/sklearn.png",
    "Sklearn": "/icons/sklearn.png",
    "Pandas": "/icons/pandas.png",
    "Numpy": "/icons/numpy.png",
    "Jupyter Notebook": "/icons/jupyter.webp",
    "PaddleOCR": "/icons/paddleocr.jfif",
    
    // LLMs & Automation
    "N8N": "/icons/n8n.webp",
    "OpenRouter": "/icons/openrouter.webp",
    "Ollama": "/icons/ollama.png",
    "LangGraph": "/icons/langgraph.png",
    "LangChain": "/icons/langchain.png",

    // IDEs
    "Cursor": "/icons/cursor.webp",
    "Visual Studio Code": "/icons/vscode.png",
    "Android Studio": "/icons/androidstudio.webp",
    "v0": "/icons/v0.svg",
    "Google Antigravity": "/icons/googleantigrativity.png",

    // Ofimática
    "Word": "/icons/word.png",
    "Excel": "/icons/excel.png",
    "Power Point": "/icons/powerpoint.png",
    "OneDrive": "/icons/onedrive.png",
    "Google Drive": "/icons/googledrive.png"
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
                    height={16}
                    width={16}
                />
            )}
            {tech}
        </Badge>
    );
}