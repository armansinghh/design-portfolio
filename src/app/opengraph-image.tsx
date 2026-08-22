import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Arman Singh — Video Editing, Design & Motion Graphics";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage() {
  const ericaOne = await fetch(
    "https://raw.githubusercontent.com/google/fonts/main/ofl/ericaone/EricaOne-Regular.ttf",
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          backgroundColor: "#080808",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.04) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
          position: "relative",
        }}
      >
        {/* top row: tiny tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "8px 20px",
              backgroundColor: "#b72b2b",
              color: "#f0f0f0",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              transform: "rotate(-2deg)",
            }}
          >
            .ae &amp; .ps
          </div>
        </div>

        {/* main title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 118,
              fontFamily: "Erica",
              color: "#fbf8ec",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            arman singh
          </div>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            {["video editing", "graphic design", "motion graphics"].map(
              (tag, i) => {
                const colors = ["#d97736", "#e2c140", "#7ba05b"];
                return (
                  <div
                    key={tag}
                    style={{
                      display: "flex",
                      padding: "10px 22px",
                      backgroundColor: colors[i % colors.length],
                      color: "#161616",
                      fontSize: 26,
                      fontWeight: 700,
                      borderRadius: "6px",
                      transform: i % 2 === 0 ? "rotate(-1.5deg)" : "rotate(1.5deg)",
                    }}
                  >
                    {tag}
                  </div>
                );
              },
            )}
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid rgba(240,240,240,0.15)",
            paddingTop: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "rgba(240,240,240,0.5)",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            design.armansingh.me
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "rgba(240,240,240,0.5)",
              fontWeight: 500,
            }}
          >
            freelance since 2021
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Erica",
          data: ericaOne,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}