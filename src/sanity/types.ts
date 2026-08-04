import type { SanityImageSource } from "@sanity/image-url";

export type { SanityImageSource };

export interface HeroSection {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: SanityImageSource;
}

export interface Testimonial {
  name?: string;
  designation?: string;
  company?: string;
  quote?: string;
  profileImage?: SanityImageSource;
}

export interface ThoughtLeadershipPost {
  title?: string;
  body?: unknown[];
  coverImage?: SanityImageSource;
  publishedAt?: string;
  excerpt?: string;
}

export interface NewsItem {
  title?: string;
  description?: string;
  coverImage?: SanityImageSource;
  externalLink?: string;
  publishedAt?: string;
}

export interface Video {
  title?: string;
  youtubeUrl?: string;
  thumbnail?: SanityImageSource;
}

export interface Brochure {
  title?: string;
  description?: string;
  buttonText?: string;
  downloadLink?: string;
  image?: SanityImageSource;
  file?: { asset?: { _ref?: string; _type?: string } | null } | null;
  fileUrl?: string;
}
