"use client"

// React core imports
import { useState, useEffect } from "react";

// Custom hooks
import { useLanguage } from "@/app/providers/language-provider";

// Page Components
import HeroSection from "@/components/hero-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import Controls from "@/components/controls";
import Background from "@/components/background";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Background />
      <main className="relative min-h-screen p-8 md:p-16 max-w-6xl mx-auto">
        <Controls />
        <HeroSection {...t.hero} />
        <ExperienceSection
          title={t.experience.title}
          items={t.experience.items}
        />
        <ProjectsSection
          title={t.projects.title}
          projects={t.projects.items}
        />
        <EducationSection
          title={t.education.title}
          items={t.education.items}
        />
        <SkillsSection
          title={t.skills.title}
          categories={t.skills.categories}
        />
      </main>
    </>
  );
}
