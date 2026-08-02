import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client, isSanityConfigured } from "./client";

const builder = isSanityConfigured && client ? createImageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource | null | undefined) {
  if (!source || !builder) return null;
  return builder.image(source);
}

export function imageUrl(
  source: SanityImageSource | null | undefined,
  { width, quality = 75 }: { width?: number; quality?: number } = {}
) {
  const base = urlFor(source);
  if (!base) return null;
  if (width) base.width(width);
  return base.auto("format").quality(quality).url();
}

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}

export function youtubeEmbedUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/watch\?.*v=|youtu\.be\/)([\w-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export function formatDate(
  date: string | null | undefined,
  locale = "en-GB"
): string {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
