import { Card, Flex, Tag } from "antd";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

type SkillsSectionProps = {
  skills: string[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="page-section">
      <SectionTitle eyebrow="Stack" title="Skills & Tooling" />
      <Card bordered={false}>
        <Flex gap={10} wrap>
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.015 }}
              viewport={{ once: true }}
            >
              <Tag className="skill-tag">{skill}</Tag>
            </motion.div>
          ))}
        </Flex>
      </Card>
    </section>
  );
}
