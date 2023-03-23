import ProductHeader from "@/components/ProductHeader";

export default function LISLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="pb-20">
      <ProductHeader name="Rely LIS" product="Rely LIS" />

      {children}
    </section>
  );
}
