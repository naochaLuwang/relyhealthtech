import ProductHeader from "@/components/ProductHeader";

export const metadata = {
  title: "Rely IVF",
};

export default function LISLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="pb-20">
      <ProductHeader name="Rely IVF" product="Rely IVF" />

      {children}
    </section>
  );
}
