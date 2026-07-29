import type { IconType } from "react-icons";
import { FaAws, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiGithubactions,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiOpenai,
  SiRazorpay,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

const technologiesByProject: Record<string, Technology[]> = {
  alertx: [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  ],
  voxera: [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "OpenAI", icon: SiOpenai, color: "text-emerald-500" },
  ],
  foodease: [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-foreground" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-500" },
    { name: "AWS", icon: FaAws, color: "text-orange-400" },
    { name: "Nginx", icon: SiNginx, color: "text-green-600" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-500" },
  ],
  "developer-portfolio": [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  ],
  donatehub: [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Razorpay", icon: SiRazorpay, color: "text-blue-600" },
  ],
};

export default function ProjectTechnologies({ slug }: { slug: string }) {
  const technologies = technologiesByProject[slug] ?? [];

  if (!technologies.length) return null;

  return (
    <div className="px-6 pb-2">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Technologies used
      </p>
      <div className="flex items-center gap-3" aria-label="Technologies used">
        {technologies.map((technology) => {
          const Icon = technology.icon;

          return (
            <span key={technology.name} title={technology.name} aria-label={technology.name}>
              <Icon className={`size-5 ${technology.color}`} aria-hidden="true" />
            </span>
          );
        })}
      </div>
    </div>
  );
}
