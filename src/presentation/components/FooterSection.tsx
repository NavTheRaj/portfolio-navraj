import { Button, Space, Typography } from "antd";
import { LinkedinOutlined, GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import type { SocialLink } from "@domain/entities/portfolio";

type FooterSectionProps = {
  fullName: string;
  socials: SocialLink[];
};

export function FooterSection({ fullName, socials }: FooterSectionProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Space wrap>
        {socials.map((social) => (
          <Button
            key={social.label}
            href={social.href}
            target="_blank"
            icon={
              social.label === "LinkedIn" ? (
                <LinkedinOutlined />
              ) : social.label === "GitHub" ? (
                <GithubOutlined />
              ) : (
                <GlobalOutlined />
              )
            }
          >
            {social.label}
          </Button>
        ))}
      </Space>
      <Typography.Text className="footer-copy">
        @{year} {fullName}. Built with coffee, curiosity, and late-night debug wins.
      </Typography.Text>
    </footer>
  );
}
