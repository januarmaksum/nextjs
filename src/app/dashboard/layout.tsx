import * as React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Header />
      <div className="container px-2 mx-auto max-w-6xl">
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col flex-1 md:ml-8 md:pt-[56px]">
            <main className="pt-20 md:p-4 h-screen overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
