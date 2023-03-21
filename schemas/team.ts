import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "reference",
      to: { type: "department" },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "profileImage",
      title: "Profile image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "name",

      media: "mainImage",
    },
    // prepare(selection) {
    //   const { author } = selection;
    //   return { ...selection, subtitle: author && `by ${author}` };
    // },
  },
});
