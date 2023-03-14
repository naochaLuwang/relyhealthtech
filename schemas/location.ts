import { defineField, defineType } from "sanity";

export default defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({
      name: "city",
      title: "City",
      type: "string",
    }),
    defineField({
      name: "addressLine1",
      title: "Address Line 1",
      type: "string",
    }),
    defineField({
      name: "addressLine2",
      title: "Address Line 2",
      type: "string",
    }),
    defineField({
      name: "addressLine3",
      title: "Address Line 3",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ],
});
