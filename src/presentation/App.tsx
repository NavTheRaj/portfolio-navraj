import { useEffect, useState } from "react";
import { Alert, Button, Layout, Segmented, Skeleton, Space, Typography } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
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
const themeModeOptions = [
  { label: "Future", value: "future" },
  { label: "Retro", value: "retro" },
  { label: "Classic", value: "classic" },
  { label: "Paper", value: "paper" },
  { label: "Noir", value: "noir" }
] as const;
type ThemeMode = (typeof themeModeOptions)[number]["value"];
const THEME_STORAGE_KEY = "portfolio_theme_mode";

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
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const savedMode = window.localStorage.getItem(THEME_STORAGE_KEY);
    const isValid = themeModeOptions.some((mode) => mode.value === savedMode);
    return isValid ? (savedMode as ThemeMode) : "future";
  });

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode]);

  const onNavClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

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
      <div className="grain-overlay" />
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
              onClick={() => onNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </div>
        <Segmented
          className="theme-switch"
          options={themeModeOptions}
          value={themeMode}
          onChange={(value) => setThemeMode(value as ThemeMode)}
        />
        <Button
          type="text"
          className="mobile-menu-btn"
          icon={<MenuOutlined />}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        />
      </Header>
      {menuOpen ? (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="mobile-menu-panel"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-menu-top">
              <Typography.Title level={5} className="mobile-menu-title">
                Navigate
              </Typography.Title>
              <Button
                type="text"
                className="mobile-menu-close"
                icon={<CloseOutlined />}
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              />
            </div>
            <div className="mobile-menu-links">
              {navItems.map((item) => (
                <Button
                  key={item}
                  type="text"
                  className={`mobile-link ${activeSection === item ? "mobile-link-active" : ""}`}
                  onClick={() => onNavClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              ))}
            </div>
            <Typography.Text className="mobile-theme-label">View mode</Typography.Text>
            <Segmented
              className="mobile-theme-switch"
              options={themeModeOptions}
              value={themeMode}
              onChange={(value) => setThemeMode(value as ThemeMode)}
            />
          </motion.div>
        </motion.div>
      ) : null}
      <Content className="app-content">
        <motion.div
          className="content-shell"
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
