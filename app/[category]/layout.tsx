import AboutSection from "@/components/AboutSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main id="maincontent">
      {children}
      <AboutSection />
    </main>
  );
}
