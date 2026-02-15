import { Card, Timeline, Typography } from "antd";
import { motion } from "framer-motion";
import type { Experience } from "@domain/entities/portfolio";
import { SectionTitle } from "./SectionTitle";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="page-section">
      <SectionTitle eyebrow="Career" title="Professional Experience" />
      <Card bordered={false}>
        <Timeline
          mode="left"
          items={experiences.map((experience) => ({
            label: `${experience.startedOn} - ${experience.finishedOn}`,
            children: (
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Typography.Title level={4} className="card-title">
                  {experience.title}
                </Typography.Title>
                <Typography.Text className="card-subtitle">
                  {experience.company} | {experience.location}
                </Typography.Text>
                <Typography.Paragraph className="card-body">
                  {experience.description}
                </Typography.Paragraph>
              </motion.div>
            )
          }))}
        />
      </Card>
    </section>
  );
}
