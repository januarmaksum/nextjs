"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ChartPie,
  MessageCircleWarning,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Analytics", href: "/analytics", icon: ChartPie },
    { name: "Reports", href: "/reports", icon: MessageCircleWarning },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="hidden md:flex w-52 h-screen flex-col pt-[56px] border-r border-gray-200 justify-between fixed left-[max(0px,calc(50%-35rem))] pl-3 xl:pl-0 overflow-y-auto">
      <nav className="flex flex-col py-4 pr-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href} legacyBehavior>
              <a className={`flex items-center py-2 pr-4 group`}>
                <Icon
                  className={`mr-2 flex items-center p-1 rounded ${
                    isActive
                      ? "bg-blue-800 text-white"
                      : "bg-gray-200 group-hover:bg-blue-800 group-hover:text-white"
                  }`}
                />
                <span className={`font-bold`}>{item.name}</span>
              </a>
            </Link>
          );
        })}
      </nav>
      <footer className="pb-3 text-sm">&copy; nextAdmin 2024</footer>
    </div>
  );
};

export default Sidebar;
