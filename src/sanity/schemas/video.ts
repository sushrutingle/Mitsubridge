import { defineType, defineField } from "sanity";

export default defineType({
  name: "video",
  title: "Videos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "youtubeUrl",
      title: "Embedded YouTube URL",
      type: "url",
      description:
        "e.g. https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail (optional)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
