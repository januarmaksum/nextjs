"use client";

import { LogOut } from "lucide-react";
import Image from "next/image";
import Logo from "@/app/favicon.ico";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const onSignOut = () => {
    Cookies.remove("token");
    router.refresh();
    router.replace("/login");
  };

  return (
    <header className="w-full bg-gray-100 py-2 border-b border-gray-300 fixed top-0 left-0 right-0 z-50">
      <div className="container px-2 mx-auto max-w-6xl flex justify-between items-center">
        <div className="text-xl font-semibold flex gap-3 items-center">
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <span className="uppercase font-extrabold">Next Admin</span>
        </div>
        <div className="space-x-4">
          <button
            onClick={onSignOut}
            className="px-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1 text-sm"
          >
            <LogOut size={"18px"} />
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
