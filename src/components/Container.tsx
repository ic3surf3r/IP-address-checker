import React from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

function Container({ children }: ChildrenProps) {
  return (
    <div className="flex flex-col h-screen w-screen justify-start items-center">
      {children}
    </div>
  );
}

export default Container;
