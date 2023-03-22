import ProductHeader from "@/components/ProductHeader";

export const metadata = {
  title: "Rely RIS",
};

export default function RISLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="pb-20">
      <ProductHeader name="Rely RIS" product="Rely RIS" />

      {children}
    </section>
  );
}
