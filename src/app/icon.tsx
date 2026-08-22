import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 256,
  height: 256,
};
export const contentType = "image/png";

export default async function Icon() {
  const ericaOne = await fetch(
    "https://raw.githubusercontent.com/google/fonts/main/ofl/ericaone/EricaOne-Regular.ttf",
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b72b2b",
        borderRadius: "22%",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 180,
          fontFamily: "Erica",
          color: "#fbf8ec",
          transform: "translateY(14px)",
        }}
      >
        A
      </div>
    </div>,
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
