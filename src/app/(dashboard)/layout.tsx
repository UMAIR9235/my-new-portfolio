import SideNav from "@/components/side-nav";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-4 h-screen overflow-hidden">
      <SideNav />
      <div className="bg-[#141414] flex-1 rounded-3xl">{children}</div>
    </div>
  );
}

export default DashboardLayout;
