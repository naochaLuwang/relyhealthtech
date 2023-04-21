import urlFor from "@/lib/urlFor";
import Image from "next/image";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full m-10 mx-auto h-96">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="banner"
            fill
          />
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }: any) => (
      <div className="flex max-w-6xl mx-auto">
        <ul className="py-5 ml-10 space-y-5 text-justify list-[square] ">
          {children}
        </ul>
      </div>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal mt-lg">{children}</ol>
    ),
  },
};
