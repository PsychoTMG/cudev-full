import { ReactNode } from "react";
import { Navigation } from "../components/Nav";


type ChildrenProps = {
  children: ReactNode
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}