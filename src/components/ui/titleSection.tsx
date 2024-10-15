import * as React from "react";

const TitleSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-2xl font-bold mb-4 border-b border-dashed pb-2">
      {children}
    </h2>
  );
};

export default TitleSection;
