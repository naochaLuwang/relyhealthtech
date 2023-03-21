import ProductHeader from "@/components/ProductHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ProductHeader name="Rely HIS" product="Rely HIS" />

      {children}
    </section>
  );
}
