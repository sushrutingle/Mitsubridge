import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
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
