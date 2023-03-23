import ProductHeader from "@/components/ProductHeader";

export default function HRMLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="pb-20">
      <ProductHeader name="Rely HRM" product="Rely HRM" />

      {children}
    </section>
  );
}
