import SideNav from "@/components/side-nav";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-4 h-screen ">
      <SideNav />
      <div className=" flex-1 rounded-3xl overflow-hidden">{children}</div>
    </div>
  );
}

export default DashboardLayout;
