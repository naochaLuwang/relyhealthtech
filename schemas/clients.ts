import { defineField, defineType } from "sanity";

export default defineType({
  name: "clients",
  title: "Clients",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
    }),
    defineField({
      name: "clientCategory",
      title: "Client Category",
      type: "reference",
      to: { type: "clientCategory" },
    }),
    defineField({
      name: "clientImage",
      title: "Client Image",
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
