import Header from "@/components/layouts/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mt-[40px]">{children}</main>
    </>
  );
}
