import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const metadata = {
  title: "Login",
};

const Layout = ({ children }: LayoutProps) => {
  return <main>{children}</main>;
};

export default Layout;
