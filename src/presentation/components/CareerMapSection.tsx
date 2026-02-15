import { Card, Col, Row, Statistic, Typography } from "antd";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import type { Experience } from "@domain/entities/portfolio";
import { SectionTitle } from "./SectionTitle";

type GeoPoint = {
  key: string;
  label: string;
  country: string;
  coordinates: [number, number];
  roles: string[];
  period: string;
};

const cityCoordinates: Record<string, [number, number]> = {
  "Oklahoma City, OK": [-97.5164, 35.4676],
  "Kathmandu, Nepal": [85.324, 27.7172],
  "Kathmandu, Bāgmatī, Nepal": [85.324, 27.7172]
};

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function parseMonthYear(value: string): number | null {
  if (!value || value.trim().length === 0 || value.toLowerCase() === "present") {
    return Date.now();
  }
  const parsed = Date.parse(`${value} 1`);
  return Number.isNaN(parsed) ? null : parsed;
}

function formatRange(minTs: number | null, maxTs: number | null): string {
  if (!minTs || !maxTs) {
    return "Timeline unavailable";
  }
  const min = new Date(minTs).getFullYear();
  const max = new Date(maxTs).getFullYear();
  return min === max ? `${min}` : `${min} - ${max}`;
}

function mapExperiencesToGeoPoints(experiences: Experience[]): GeoPoint[] {
  const grouped = new Map<
    string,
    {
      label: string;
      country: string;
      coordinates: [number, number];
      roles: string[];
      minTs: number | null;
      maxTs: number | null;
    }
  >();

  experiences.forEach((experience) => {
    const coordinates = cityCoordinates[experience.location];
    if (!coordinates) {
      return;
    }

    const existing = grouped.get(experience.location);
    const startTs = parseMonthYear(experience.startedOn);
    const endTs = parseMonthYear(experience.finishedOn || "Present");
    const roleName = `${experience.title} @ ${experience.company}`;
    const country = experience.location.split(",").at(-1)?.trim() ?? experience.location;

    if (!existing) {
      grouped.set(experience.location, {
        label: experience.location,
        country,
        coordinates,
        roles: [roleName],
        minTs: startTs,
        maxTs: endTs
      });
      return;
    }

    existing.roles.push(roleName);
    if (startTs && (!existing.minTs || startTs < existing.minTs)) {
      existing.minTs = startTs;
    }
    if (endTs && (!existing.maxTs || endTs > existing.maxTs)) {
      existing.maxTs = endTs;
    }
  });

  return [...grouped.entries()].map(([key, value]) => ({
    key,
    label: value.label,
    country: value.country,
    coordinates: value.coordinates,
    roles: value.roles,
    period: formatRange(value.minTs, value.maxTs)
  }));
}

export function CareerMapSection({ experiences }: { experiences: Experience[] }) {
  const geoPoints = mapExperiencesToGeoPoints(experiences);
  const countriesCount = new Set(geoPoints.map((point) => point.country)).size;

  return (
    <section id="map" className="page-section">
      <SectionTitle eyebrow="Journey" title="Career Map" />
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card bordered={false} className="map-card">
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{ scale: 150 }}
              className="world-map"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} className="map-geo" />
                  ))
                }
              </Geographies>
              {geoPoints.map((point, index) => (
                <Marker key={point.key} coordinates={point.coordinates}>
                  <motion.g
                    initial={{ opacity: 0, scale: 0.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <circle className="map-dot-pulse" r={11} />
                    <circle className="map-dot-core" r={5} />
                    <text className="map-dot-label" y={-14}>
                      {point.country}
                    </text>
                  </motion.g>
                </Marker>
              ))}
            </ComposableMap>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <div className="map-stats">
            <Card bordered={false}>
              <Statistic title="Cities Worked In" value={geoPoints.length} />
            </Card>
            <Card bordered={false}>
              <Statistic title="Countries" value={countriesCount} />
            </Card>
            {geoPoints.map((point) => (
              <Card key={point.key} bordered={false} className="map-location-card">
                <Typography.Title level={5} className="card-title">
                  {point.country}
                </Typography.Title>
                <Typography.Text className="card-subtitle">{point.period}</Typography.Text>
                <Typography.Paragraph className="card-body">
                  {point.roles.join(" • ")}
                </Typography.Paragraph>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
}
