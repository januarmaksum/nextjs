import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Create an Account",
};

const RegisterLayout: React.FC<LayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default RegisterLayout;
