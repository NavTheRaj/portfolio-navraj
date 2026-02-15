import { Button, Space, Tag, Typography } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  ReadOutlined
} from "@ant-design/icons";
import { motion } from "framer-motion";
import type { Profile } from "@domain/entities/portfolio";

type HeroSectionProps = {
  profile: Profile;
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="hero">
      <motion.div
        className="hero-content-glass"
        variants={rise}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
      >
        <Tag color="gold" className="hero-tag">
          OPEN FOR COLLABORATIONS
        </Tag>
        <Typography.Title className="hero-name">{profile.fullName}</Typography.Title>
        <Typography.Title level={3} className="hero-headline">
          {profile.headline}
        </Typography.Title>
        <Typography.Paragraph className="hero-summary">
          {profile.summary}
        </Typography.Paragraph>
        <div className="hero-meta">
          <span>{profile.location}</span>
          <span>{profile.industry}</span>
        </div>
        <Space wrap size="middle">
          <Button
            type="primary"
            icon={<LinkedinOutlined />}
            href="https://www.linkedin.com/in/navrajkhanal/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            icon={<GithubOutlined />}
            href="https://github.com/NavTheRaj"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            icon={<ReadOutlined />}
            href="https://navrajkhanal.medium.com"
            target="_blank"
          >
            Medium
          </Button>
        </Space>
      </motion.div>
      <motion.div
        className="hero-orb"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="hero-orb-core" />
      </motion.div>
    </section>
  );
}
