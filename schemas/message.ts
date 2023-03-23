import { defineField, defineType } from "sanity";

export default defineType({
  name: "message",
  title: "Message",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "firstName",
      media: "image",
    },
  },
});