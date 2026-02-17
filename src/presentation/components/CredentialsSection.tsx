import { Card, Col, Row, Tag, Typography } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import type { Certification, Language } from "@domain/entities/portfolio";
import { SectionTitle } from "./SectionTitle";

type CredentialsSectionProps = {
  certifications: Certification[];
  languages: Language[];
};

export function CredentialsSection({
  certifications,
  languages
}: CredentialsSectionProps) {
  return (
    <section id="credentials" className="page-section">
      <SectionTitle eyebrow="Proof" title="Credentials" />
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card bordered={false}>
            <Typography.Title level={4} className="card-title">
              Certifications
            </Typography.Title>
            <Row gutter={[12, 12]}>
              {certifications.map((certification, index) => (
                <Col key={certification.name} xs={24} md={12}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    viewport={{ once: true }}
                  >
                    <Card bordered={false} className="uniform-card">
                      <Typography.Text className="card-subtitle">
                        <SafetyCertificateOutlined /> {certification.authority}
                      </Typography.Text>
                      <Typography.Title level={5} className="card-title">
                        {certification.name}
                      </Typography.Title>
                      <Typography.Text className="card-body">
                        Issued {certification.startedOn}
                      </Typography.Text>
                      {certification.url ? (
                        <Typography.Paragraph className="card-body">
                          <a href={certification.url} target="_blank" rel="noreferrer">
                            View credential
                          </a>
                        </Typography.Paragraph>
                      ) : null}
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card bordered={false}>
            <Typography.Title level={4} className="card-title">
              Languages
            </Typography.Title>
            {languages.map((language) => (
              <div key={language.name} className="language-item">
                <Tag className="skill-tag">{language.name}</Tag>
                <Typography.Text className="card-body">
                  {language.proficiency}
                </Typography.Text>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </section>
  );
}
