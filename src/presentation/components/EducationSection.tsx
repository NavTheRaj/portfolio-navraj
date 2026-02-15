import { Card, Col, Row, Typography } from "antd";
import { motion } from "framer-motion";
import type { Education } from "@domain/entities/portfolio";
import { SectionTitle } from "./SectionTitle";

type EducationSectionProps = {
  educations: Education[];
};

export function EducationSection({ educations }: EducationSectionProps) {
  return (
    <section id="education" className="page-section">
      <SectionTitle eyebrow="Academics" title="Education" />
      <Row gutter={[16, 16]} className="equal-height-row">
        {educations.map((education) => (
          <Col key={`${education.school}-${education.startDate}`} xs={24} md={12}>
            <motion.div
              className="card-motion-shell"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card bordered={false} className="uniform-card">
                <Typography.Title level={4} className="card-title">
                  {education.school}
                </Typography.Title>
                <Typography.Text className="card-subtitle">
                  {education.degree} | {education.startDate} - {education.endDate}
                </Typography.Text>
                <Typography.Paragraph className="card-body">
                  {education.notes}
                </Typography.Paragraph>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
