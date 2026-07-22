import HeaderWrapper from "@/components/layouts/HeaderWrapper";
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
      <HeaderWrapper />
      <main className="mt-[60px]">{children}</main>
    </>
  );
}
