import type { NextConfig } from "next";

const isDeploy = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  ...(isDeploy && { output: "export" as const }),
  ...(isDeploy && { basePath: "/Mitsubridge" }),
  images: { unoptimized: true },
  ...(isDeploy && { trailingSlash: true }),
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID:
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5sc8og9a",
    NEXT_PUBLIC_SANITY_DATASET:
      process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    NEXT_PUBLIC_SANITY_API_VERSION:
      process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-01",
  },
};

export default nextConfig;
