import { ReactNode } from "react";
import BottomNav from "./BottomNav";

type PageShellProps = {
  children: ReactNode;
  activeNav?: "home" | "categories" | "saved" | "references";
};

export default function PageShell({
  children,
  activeNav = "home",
}: PageShellProps) {
  return (
    <div className="nh-shell">
      <main>{children}</main>
      <BottomNav active={activeNav} />
    </div>
  );
}