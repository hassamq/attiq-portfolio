import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(145deg, #05070b 0%, #0b1520 55%, #062018 100%)",
          color: "#3de0ff",
          fontSize: 72,
          fontWeight: 800,
          letterSpacing: -3,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 18,
            width: 28,
            height: 28,
            borderTop: "4px solid #3de0ff",
            borderLeft: "4px solid #3de0ff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            width: 28,
            height: 28,
            borderTop: "4px solid #7dffb3",
            borderRight: "4px solid #7dffb3",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 18,
            width: 28,
            height: 28,
            borderBottom: "4px solid #7dffb3",
            borderLeft: "4px solid #7dffb3",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 18,
            right: 18,
            width: 28,
            height: 28,
            borderBottom: "4px solid #3de0ff",
            borderRight: "4px solid #3de0ff",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textShadow: "0 0 24px rgba(61, 224, 255, 0.55)",
          }}
        >
          AR
        </div>
      </div>
    ),
    { ...size },
  );
}
