"use client";

import dynamic from "next/dynamic";
import config from "@/sanity/config";

const NextStudio = dynamic(
  () =>
    import("next-sanity/studio/client-component").then(
      (mod) => mod.NextStudio
    ),
  { ssr: false }
);

export default function StudioClient() {
  if (!config) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          fontFamily: "Inter, system-ui, sans-serif",
          textAlign: "center",
        }}
      >
        <p>
          Sanity Studio is not configured. Set{" "}
          <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
          <code>NEXT_PUBLIC_SANITY_DATASET</code> in your environment, then
          restart the dev server.
        </p>
      </div>
    );
  }

  return <NextStudio config={config} history="hash" />;
}
