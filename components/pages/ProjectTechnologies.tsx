import type { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiOpenai, SiRazorpay, SiTailwindcss, SiTypescript } from "react-icons/si";

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
