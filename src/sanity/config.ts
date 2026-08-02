import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { isSanityConfigured } from "./client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const config = isSanityConfigured
  ? defineConfig({
      name: "mitsubridge",
      title: "MitsuBridge Studio",
      projectId: projectId as string,
      dataset: dataset as string,
      basePath: "/studio",
      plugins: [structureTool(), visionTool()],
      schema: { types: schemaTypes },
    })
  : null;

export default config;
