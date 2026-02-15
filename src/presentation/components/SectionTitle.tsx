import { Typography } from "antd";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
};

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="section-title">
      <Typography.Text className="section-eyebrow">{eyebrow}</Typography.Text>
      <Typography.Title level={2} className="section-heading">
        {title}
      </Typography.Title>
    </div>
  );
}
