import { defineField, defineType } from "sanity";

export default defineType({
  name: "clientCategory",
  title: "Client Category",
  type: "document",
  fields: [
    defineField({
      name: "categoryName",
      title: "Category Name",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "categoryName",
      media: "image",
    },
  },
});
