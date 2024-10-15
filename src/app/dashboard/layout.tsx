import * as React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container px-2 mx-auto max-w-6xl">
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col flex-1 md:ml-4 md:pl-[11.5rem] lg:pl-[13rem] xl:pl-[13.5rem] md:pt-[56px]">
            <main className="pt-20 md:p-4 md:pr-0 md:pb-10">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
