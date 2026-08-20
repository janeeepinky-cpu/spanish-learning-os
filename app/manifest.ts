import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBasePath = (path: string) => `${basePath}${path}`;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Spanish Learning OS",
    short_name: "Spanish OS",
    description: "A daily Spanish learning app for Chinese-speaking adults.",
    start_url: withBasePath("/today/"),
    scope: withBasePath("/"),
    display: "standalone",
    orientation: "portrait",
    background_color: "#f7f4ed",
    theme_color: "#f7f4ed",
    categories: ["education", "productivity"],
    icons: [
      {
        src: withBasePath("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      },
      {
        src: withBasePath("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable"
      }
    ]
  };
}
