import { Card, Col, Row, Typography } from "antd";
import { motion } from "framer-motion";
import type { Project } from "@domain/entities/portfolio";
import { SectionTitle } from "./SectionTitle";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="page-section">
      <SectionTitle eyebrow="Build" title="Highlighted Projects" />
      <Row gutter={[16, 16]} className="equal-height-row">
        {projects.map((project, index) => (
          <Col key={project.title} xs={24} lg={12}>
            <motion.div
              className="card-motion-shell"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <Card bordered={false} className="project-card uniform-card">
                <Typography.Title level={4} className="card-title">
                  {project.title}
                </Typography.Title>
                <Typography.Text className="card-subtitle">
                  {project.startedOn} - {project.finishedOn}
                </Typography.Text>
                <Typography.Paragraph className="card-body">
                  {project.description}
                </Typography.Paragraph>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
