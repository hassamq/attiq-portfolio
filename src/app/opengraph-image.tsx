import { ImageResponse } from "next/og";
import { profile, siteConfig } from "@/lib/site";

export const alt = `${profile.fullName} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #f7f9f7 0%, #eef2ef 50%, #d7efe3 100%)",
          color: "#14241c",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#1f7a52", marginBottom: 20 }}>
          {profile.title}
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.5 }}>
          {profile.fullName}
        </div>
        <div style={{ marginTop: 24, fontSize: 24, color: "#4d5f55", maxWidth: 900 }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
