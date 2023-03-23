import ProductHeader from "@/components/ProductHeader";

export default function AISLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <ProductHeader name="Rely AIS" product="Rely AIS" />

      {children}
    </section>
  );
}
