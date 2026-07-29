import Navbar from "@/components/pages/Navbar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Sparkles,
  Mic2,
  Trophy,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Achievements",
};

const achievements = [
  {
    title: "Technical Lead",
    organization: "Google Developer Groups on Campus",
    description:
      "Organized and conducted technical workshops, mentored students, and led community-driven learning initiatives on modern web development and cloud technologies.",
    year: "2026",
    icon: Users,
    label: "Leadership",
  },
  {
    title: "Top 10 Finalist",
    organization: "Samadhan Hackathon",
    description:
      "Built an AI-powered web testing automation solution and secured a Top 10 position among 150+ participating teams.",
    year: "2026",
    icon: Trophy,
    label: "Hackathon",
  },
  {
    title: "Freelance Frontend Developer",
    organization: "Client Projects",
    description:
      "Designed and developed high-converting responsive landing pages for clients, focusing on performance, modern UI/UX, and business-driven user experience.",
    year: "2025",
    icon: BriefcaseBusiness,
    label: "Experience",
  },
  {
    title: "Technical Workshop Speaker",
    organization: "Developer Community",
    description:
      "Conducted hands-on workshops on React, JavaScript, Git/GitHub, and modern web development, helping students build real-world development skills.",
    year: "2026",
    icon: Mic2,
    label: "Community",
  },
];

export default function Achievements() {
  return (
    <main className="page-shell pb-12 pt-24 lg:pt-30">
      <Navbar />

      <div className="content-wrap">
        <section className="section-frame overflow-hidden px-5 py-6 sm:px-7 sm:py-8">
          <header className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="section-heading-kicker">Milestones and impact</p>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Achievements</h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                  A sharper look at leadership, hackathon results, freelance delivery, and community work without the usual stacked-box feel.
                </p>
              </div>

              <div className="grid gap-3 rounded-md border border-border/70 bg-secondary/40 p-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Snapshot
                  </p>
                  <p className="mt-2 text-3xl font-extrabold">{achievements.length}</p>
                  <p className="text-sm text-muted-foreground">key milestones highlighted</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-blue-500/10 text-blue-500">
                    <Sparkles size={18} />
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Inspired by timeline and staggered portfolio layouts that feel more editorial and less repetitive.
                  </p>
                </div>
              </div>
            </div>
          </header>
        </section>

        <section className="relative mt-8 pl-6 sm:pl-8">
          <div className="absolute bottom-0 left-2 top-2 w-px bg-gradient-to-b from-blue-500/60 via-border to-transparent sm:left-3" />
          {achievements.map((achievement, index) => {
            const AchievementIcon = achievement.icon;
            const isOffset = index % 2 === 1;

            return (
              <article
                key={achievement.title}
                className="group relative mb-5 animate-in fade-in slide-in-from-bottom-3 duration-500"
                style={{ animationDelay: `${index * 85}ms` }}
              >
                <div className="absolute left-[-1.05rem] top-8 grid size-6 place-items-center rounded-full border border-blue-500/30 bg-background text-blue-500 shadow-sm sm:left-[-1.35rem]">
                  <span className="block size-2 rounded-full bg-blue-500" />
                </div>
                <Card
                  className={[
                    "section-frame gap-0 rounded-md border-border/70 py-0 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/35 hover:shadow-[0_24px_50px_-36px_rgba(59,130,246,0.45)]",
                    isOffset ? "lg:ml-20" : "lg:mr-20",
                  ].join(" ")}
                >
                  <CardHeader className="px-5 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6">
                    <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {achievement.label} / {achievement.year}
                        </p>
                        <CardTitle className="text-2xl font-bold tracking-tight sm:text-[1.75rem]">
                          {achievement.title}
                        </CardTitle>
                        <p className="mt-2 text-sm font-medium text-blue-500">
                          {achievement.organization}
                        </p>
                        <CardDescription className="mt-5 max-w-2xl text-sm leading-7 sm:text-[0.97rem]">
                          {achievement.description}
                        </CardDescription>
                      </div>

                      <div className="flex flex-col justify-between gap-5 rounded-md border border-border/70 bg-secondary/40 p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="grid size-12 place-items-center rounded-2xl bg-background text-blue-500 ring-1 ring-border">
                            <AchievementIcon size={21} strokeWidth={2.2} />
                          </div>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            size={18}
                          />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            Outcome
                          </p>
                          <p className="mt-2 text-sm leading-6 text-foreground/85">
                            Stronger proof of execution through real leadership, delivery, and public-facing contributions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
