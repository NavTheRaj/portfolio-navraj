import { Card, Col, Row, Typography } from "antd";
import { motion } from "framer-motion";
import type { Recommendation } from "@domain/entities/portfolio";
import { SectionTitle } from "./SectionTitle";

export function RecommendationsSection({
  recommendations
}: {
  recommendations: Recommendation[];
}) {
  return (
    <section id="testimonials" className="page-section">
      <SectionTitle eyebrow="Trust" title="Recommendations" />
      <Row gutter={[16, 16]}>
        {recommendations.map((recommendation, index) => (
          <Col key={`${recommendation.recommender}-${recommendation.creationDate}`} xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card bordered={false} className="uniform-card">
                <Typography.Paragraph className="quote-text">
                  "{recommendation.text}"
                </Typography.Paragraph>
                <Typography.Title level={5} className="card-title">
                  {recommendation.recommender}
                </Typography.Title>
                <Typography.Text className="card-subtitle">
                  {recommendation.role} | {recommendation.company}
                </Typography.Text>
                <Typography.Paragraph className="card-body">
                  {recommendation.creationDate}
                </Typography.Paragraph>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
