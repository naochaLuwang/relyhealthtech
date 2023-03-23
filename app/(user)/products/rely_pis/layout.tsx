import ProductHeader from "@/components/ProductHeader";

export const metadata = {
  title: "Rely PIS",
};

export default function LISLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="pb-20">
      <ProductHeader name="Rely PIS" product="Rely PIS" />

      {children}
    </section>
  );
}
