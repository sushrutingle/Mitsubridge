import type { NextConfig } from "next";

const isDeploy = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  ...(isDeploy && { output: "export" as const }),
  ...(isDeploy && { basePath: "/Mitsubridge" }),
  images: { unoptimized: true },
  ...(isDeploy && { trailingSlash: true }),
};

export default nextConfig;
