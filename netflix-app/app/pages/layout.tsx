'use client';
import Footer from "@/assets/components/Common/Footer";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
      <Footer></Footer>
    </section>
  );
}