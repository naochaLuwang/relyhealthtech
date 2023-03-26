import { defineField, defineType } from "sanity";

export default defineType({
  name: "whatsNew",
  title: "Whats New",
  type: "document",
  fields: [
    defineField({
      name: "banner",
      title: "Banner",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "banner",
    },
  },
});
