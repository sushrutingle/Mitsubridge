import { defineType, defineField } from "sanity";

export default defineType({
  name: "brochure",
  title: "Brochures",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      description: "Optional cover image for the brochure",
    }),
    defineField({
      name: "file",
      title: "PDF File",
      type: "file",
      options: { accept: "application/pdf" },
      description: "Optional PDF upload hosted by Sanity",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      description:
        "External download URL (used when no PDF is uploaded to Sanity)",
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
