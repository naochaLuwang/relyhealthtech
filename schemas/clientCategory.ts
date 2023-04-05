import { defineField, defineType } from "sanity";

export default defineType({
  name: "clientCategory",
  title: "Client Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
