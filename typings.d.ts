import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { Image, Reference, Slug } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Team extends Base {
  department: Department;
  body: Block[];

  profileImage: Image;
  slug: Slug;
  name: string;
  title: string;
}

interface department extends Base {
  name: string;
}

interface CarousalImage extends Base {
  image: Image;
}

interface Image {
  _type: "image";
  asset: Reference;
}
interface Location extends Base {
  city: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  email: string;
  phone: string;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}
