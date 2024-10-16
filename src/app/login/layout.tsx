import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Login",
};

const LoginLayout: React.FC<LayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default LoginLayout;
