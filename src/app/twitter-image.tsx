import { ImageResponse } from "next/og";
import { profile, siteConfig } from "@/lib/site";

export const alt = `${profile.fullName} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
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
          background: "linear-gradient(145deg, #e7eef2 0%, #c5d6e0 45%, #7f9aa8 100%)",
          color: "#122033",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            background: "#153042",
            color: "#f2f7f9",
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 36,
          }}
        >
          AR
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.5 }}>
          {profile.fullName}
        </div>
        <div style={{ marginTop: 18, fontSize: 32, fontWeight: 600, color: "#243447" }}>
          {profile.title}
        </div>
        <div style={{ marginTop: 28, fontSize: 22, color: "#243447", maxWidth: 900 }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
