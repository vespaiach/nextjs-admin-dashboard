import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="drawer md:drawer-open">
      <input id="sidebar-toggler" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200">
        <Header />
        <main className="flex-1 p-4 px-1">{children}</main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="sidebar-toggler"
          className="drawer-overlay"
          aria-label="Toggle drawer"></label>
        <Sidebar />
      </div>
    </div>
  );
}
