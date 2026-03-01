import { Outlet } from "react-router";
import { ScrollToTop } from "./ScrollToTop.tsx";

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
