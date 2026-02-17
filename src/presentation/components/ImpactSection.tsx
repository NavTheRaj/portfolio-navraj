import { Card, Col, Row, Statistic } from "antd";
import type { CommunityStats } from "@domain/entities/portfolio";
import { SectionTitle } from "./SectionTitle";

export function ImpactSection({ stats }: { stats: CommunityStats }) {
  return (
    <section id="impact" className="page-section">
      <SectionTitle eyebrow="Presence" title="LinkedIn Impact" />
      <Row gutter={[12, 12]}>
        <Col xs={12} md={8} lg={4}>
          <Card bordered={false}>
            <Statistic title="Connections" value={stats.connections} />
          </Card>
        </Col>
        <Col xs={12} md={8} lg={4}>
          <Card bordered={false}>
            <Statistic title="Reactions" value={stats.reactions} />
          </Card>
        </Col>
        <Col xs={12} md={8} lg={4}>
          <Card bordered={false}>
            <Statistic title="Comments" value={stats.comments} />
          </Card>
        </Col>
        <Col xs={12} md={8} lg={4}>
          <Card bordered={false}>
            <Statistic title="Shares" value={stats.shares} />
          </Card>
        </Col>
        <Col xs={12} md={8} lg={4}>
          <Card bordered={false}>
            <Statistic title="Certifications" value={stats.certifications} />
          </Card>
        </Col>
        <Col xs={12} md={8} lg={4}>
          <Card bordered={false}>
            <Statistic title="Recommendations" value={stats.recommendations} />
          </Card>
        </Col>
      </Row>
    </section>
  );
}
