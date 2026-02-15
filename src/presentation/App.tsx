import { useEffect, useState } from "react";
import { Alert, Button, Layout, Skeleton, Space, Typography } from "antd";
import { motion } from "framer-motion";
import { usePortfolio } from "./hooks/usePortfolio";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { FooterSection } from "./components/FooterSection";
import { AnimeGameSection } from "./components/AnimeGameSection";

const { Header, Content } = Layout;
const navItems = ["experience", "education", "projects", "skills", "game"] as const;

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) {
    return;
  }
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function App() {
  const { data, isLoading, error } = usePortfolio();
  const [activeSection, setActiveSection] = useState<string>("experience");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.3, 0.6] }
    );

    navItems.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-shell">
        <Skeleton active paragraph={{ rows: 8 }} />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="loading-shell">
        <Alert type="error" message="Portfolio failed to load" description={error} />
      </div>
    );
  }

  return (
    <Layout className="app-layout">
      <div className="aurora-bg" />
      <Header className="app-header">
        <Typography.Title level={4} className="brand">
          {data.profile.fullName}
        </Typography.Title>
        <div className="top-nav">
          {navItems.map((item) => (
            <Button
              key={item}
              type="text"
              className={`top-nav-btn ${activeSection === item ? "top-nav-btn-active" : ""}`}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </div>
      </Header>
      <Content className="app-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <HeroSection profile={data.profile} />
          <Space direction="vertical" size={28} className="sections-stack">
            <ExperienceSection experiences={data.experiences} />
            <EducationSection educations={data.educations} />
            <ProjectsSection projects={data.projects} />
            <SkillsSection skills={data.skills} />
            <AnimeGameSection />
          </Space>
          <FooterSection fullName={data.profile.fullName} socials={data.profile.socials} />
        </motion.div>
      </Content>
    </Layout>
  );
}
