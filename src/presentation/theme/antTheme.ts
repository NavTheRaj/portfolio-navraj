import type { ThemeConfig } from "antd";

export const antTheme: ThemeConfig = {
  token: {
    colorPrimary: "#ff6f3c",
    colorInfo: "#00a8cc",
    colorSuccess: "#17b978",
    colorWarning: "#f3c623",
    colorError: "#f05454",
    colorTextBase: "#f7f4ea",
    colorBgBase: "#09090b",
    borderRadius: 12,
    fontFamily:
      "'Space Grotesk', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif"
  },
  components: {
    Card: {
      colorBgContainer: "rgba(15, 18, 24, 0.8)"
    },
    Timeline: {
      tailColor: "rgba(255, 255, 255, 0.18)"
    }
  }
};
