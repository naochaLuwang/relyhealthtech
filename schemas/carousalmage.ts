import { defineField, defineType } from "sanity";

export default defineType({
  name: "carousalImage",
  title: "CarousalImage",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Image Name",
      type: "string",
    }),
    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
