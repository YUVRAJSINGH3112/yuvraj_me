import Navbar from "@/components/pages/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bot,
  Braces,
  Database,
  LayoutTemplate,
  Server,
  Wrench,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  FaCss3Alt,
  FaCode,
  FaBolt,
  FaGitAlt,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostman,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const metadata = {
  title: "Skills",
};

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const skillGroups: {
  title: string;
  eyebrow: string;
  description: string;
  icon: React.ElementType;
  skills: Skill[];
}[] = [
  {
    title: "Languages",
    eyebrow: "01 / Foundation",
    description: "The languages I use to think through problems and build reliable software.",
    icon: Braces,
    skills: [
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Python (Basics)", icon: FaPython, color: "text-yellow-500" },
      { name: "SQL", icon: SiMysql, color: "text-sky-500" },
    ],
  },
  {
    title: "Frontend",
    eyebrow: "02 / Interface",
    description: "Tools for crafting fast, responsive, and polished web experiences.",
    icon: LayoutTemplate,
    skills: [
      { name: "React.js", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    ],
  },
  {
    title: "Backend",
    eyebrow: "03 / Systems",
    description: "Server-side technologies for secure APIs and real-time applications.",
    icon: Server,
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-foreground" },
      { name: "REST APIs", icon: FaCode, color: "text-violet-500" },
      { name: "JWT Authentication", icon: SiJsonwebtokens, color: "text-pink-500" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
      { name: "WebSockets", icon: SiWebrtc, color: "text-indigo-500" },
      { name: "tRPC", icon: SiTrpc, color: "text-blue-500" },
    ],
  },
  {
    title: "Databases",
    eyebrow: "04 / Data",
    description: "Datastores for persisting, querying, and caching application data.",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-sky-500" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
    ],
  },
  {
    title: "AI / GenAI",
    eyebrow: "05 / Intelligent apps",
    description: "SDKs and orchestration tools for building AI-powered product features.",
    icon: Bot,
    skills: [
      { name: "LangChain", icon: SiLangchain, color: "text-green-500" },
      { name: "Gemini SDK", icon: SiGooglegemini, color: "text-blue-500" },
      { name: "OpenAI SDK", icon: SiOpenai, color: "text-foreground" },
      { name: "Inngest", icon: FaBolt, color: "text-fuchsia-500" },
    ],
  },
  {
    title: "Tools",
    eyebrow: "Everyday workflow",
    description: "The tools that support my daily development workflow and collaboration.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-foreground" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
    ],
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen pb-12 pt-24 lg:px-90 lg:pt-30">
      <Navbar />

      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-10 animate-in fade-in slide-in-from-bottom-2 border-b border-border pb-8 duration-500 sm:mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
            Technical toolkit
          </p>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">SKILLS</h1>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                A focused set of technologies I use to take ideas from interface to infrastructure.
              </p>
            </div>
            <span className="w-fit rounded-sm border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-muted-foreground">
              {skillGroups.reduce((total, group) => total + group.skills.length, 0)} technologies
            </span>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <Card
                key={group.title}
                aria-labelledby={`skill-group-${index}`}
                className="animate-in fade-in zoom-in-95 gap-0 border border-border py-0 duration-500 fill-mode-both hover:border-foreground/25 hover:bg-secondary/40"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <CardHeader className="mb-6 px-5 pt-5 sm:px-6 sm:pt-6">
                  <div className="pr-14">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {group.eyebrow}
                    </p>
                    <CardTitle id={`skill-group-${index}`} className="text-2xl font-bold tracking-tight">
                      {group.title}
                    </CardTitle>
                    <CardDescription className="mt-2 max-w-md leading-relaxed">
                      {group.description}
                    </CardDescription>
                  </div>
                  <CardAction className="grid size-10 place-items-center rounded-xl border border-border bg-background text-blue-500 transition-transform duration-300 group-hover/card:-rotate-6">
                    <GroupIcon size={19} strokeWidth={2.2} />
                  </CardAction>
                </CardHeader>

                <CardContent className="grid grid-cols-2 gap-2 px-5 pb-5 sm:px-6 sm:pb-6">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <Button
                        key={skill.name}
                        variant="outline"
                        className="h-8 min-w-0 w-full justify-center gap-1.5 overflow-hidden rounded-sm px-2 text-xs"
                      >
                        <SkillIcon className={`size-4 ${skill.color}`} aria-hidden="true" />
                        <span className="truncate">{skill.name}</span>
                      </Button>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </section>
      </div>
    </main>
  );
}
