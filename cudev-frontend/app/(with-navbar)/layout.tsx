import { ReactNode } from "react";
import { Navigation } from "../components/Nav";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
      <>
        <Navigation />
        {children}
      </>
  );
}