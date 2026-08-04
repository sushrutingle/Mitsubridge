import groq from "groq";
import { sanityFetch } from "./utils";
import type {
  HeroSection,
  Testimonial,
  ThoughtLeadershipPost,
  NewsItem,
  Video,
  Brochure,
} from "./types";

export const heroSectionQuery = groq`*[_type == "heroSection"][0]{
  heading,
  subheading,
  ctaText,
  ctaLink,
  backgroundImage
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt asc){
  name,
  designation,
  company,
  quote,
  profileImage
}`;

export const thoughtLeadershipQuery = groq`*[_type == "thoughtLeadership"] | order(publishedAt desc){
  title,
  publishedAt,
  coverImage,
  "excerpt": pt::text(body)[0..240]
}`;

export const newsQuery = groq`*[_type == "news"] | order(publishedAt desc){
  title,
  description,
  externalLink,
  publishedAt,
  coverImage
}`;

export const videosQuery = groq`*[_type == "video"] | order(_createdAt asc){
  title,
  youtubeUrl,
  thumbnail
}`;

export const brochuresQuery = groq`*[_type == "brochure"] | order(_createdAt asc){
  title,
  description,
  buttonText,
  downloadLink,
  image,
  file,
  "fileUrl": file.asset->url
}`;

export async function getHeroSection() {
  return sanityFetch<HeroSection>(heroSectionQuery);
}

export async function getTestimonials() {
  return (await sanityFetch<Testimonial[]>(testimonialsQuery)) ?? [];
}

export async function getThoughtLeadership() {
  return (
    (await sanityFetch<ThoughtLeadershipPost[]>(thoughtLeadershipQuery)) ?? []
  );
}

export async function getNews() {
  return (await sanityFetch<NewsItem[]>(newsQuery)) ?? [];
}

export async function getVideos() {
  return (await sanityFetch<Video[]>(videosQuery)) ?? [];
}

export async function getBrochures() {
  return (await sanityFetch<Brochure[]>(brochuresQuery)) ?? [];
}

export async function getHomePageContent() {
  const [hero, testimonials] = await Promise.all([
    getHeroSection(),
    getTestimonials(),
  ]);

  return { hero, testimonials };
}
