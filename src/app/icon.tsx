import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          background: "#05070b",
          color: "#3de0ff",
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: -0.5,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        {/* corner brackets */}
        <div
          style={{
            position: "absolute",
            top: 3,
            left: 3,
            width: 6,
            height: 6,
            borderTop: "1.5px solid #3de0ff",
            borderLeft: "1.5px solid #3de0ff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 3,
            right: 3,
            width: 6,
            height: 6,
            borderTop: "1.5px solid #7dffb3",
            borderRight: "1.5px solid #7dffb3",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 3,
            left: 3,
            width: 6,
            height: 6,
            borderBottom: "1.5px solid #7dffb3",
            borderLeft: "1.5px solid #7dffb3",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 3,
            right: 3,
            width: 6,
            height: 6,
            borderBottom: "1.5px solid #3de0ff",
            borderRight: "1.5px solid #3de0ff",
          }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>AR</div>
      </div>
    ),
    { ...size },
  );
}
