const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { ImageResponse } = require("next/og");
const h = React.createElement;
const root = path.resolve(__dirname, "..");
async function main() {
  const font = fs.readFileSync(
    path.join(root, "public/fonts/manrope-bold.ttf"),
  );
  const image = new ImageResponse(
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "52px 64px",
          background: "#f2f1ed",
          color: "#181818",
          fontFamily: "Manrope",
          fontWeight: 800,
        },
      },
      h(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 25,
            borderBottom: "1px solid #181818",
            fontSize: 35,
            letterSpacing: "-1.5px",
          },
        },
        "Evan Camire.",
        h(
          "span",
          { style: { color: "#2849cc", fontSize: 27 } },
          "Builder & operator",
        ),
      ),
      h(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            marginTop: 55,
            fontSize: 77,
            lineHeight: 1.08,
            letterSpacing: "-5px",
          },
        },
        h("div", { style: { display: "flex" } }, "I build AI for real work"),
        h(
          "div",
          { style: { display: "flex" } },
          "and real people",
          h("span", { style: { color: "#2849cc" } }, "."),
        ),
      ),
      h(
        "div",
        {
          style: {
            display: "flex",
            marginTop: "auto",
            paddingTop: 30,
            borderTop: "1px solid #cfcdc7",
            fontSize: 23,
            letterSpacing: "-.5px",
            color: "#575653",
          },
        },
        "Selected work · Experience · Writing",
      ),
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Manrope", data: font, weight: 800, style: "normal" }],
    },
  );
  fs.writeFileSync(
    path.join(root, "public/social-preview.png"),
    Buffer.from(await image.arrayBuffer()),
  );
  console.log("Generated 1200 × 630 social preview.");
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
