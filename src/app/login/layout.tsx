import * as React from "react";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Login",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      {children}
      <Toaster />
    </main>
  );
};

export default Layout;
