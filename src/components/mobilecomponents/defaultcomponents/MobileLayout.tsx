import { PropsWithChildren } from "react";
import { MobileMenu } from "./MobileMenu";

export function MobileLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <main>{children}</main>
      <MobileMenu />
    </div>
  );
}
