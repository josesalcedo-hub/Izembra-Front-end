"use client";
import { useUiStore } from "../store/uiStore";
import Header from "./Header";
import Menu from "./Menu";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMenuOpen = useUiStore((state) => state.isMenuOpen);

  return (
    <>
      <main
        className={`${isMenuOpen ? "blur-sm" : ""} bg-[#042544] transition-all duration-300  bg-no-repeat bg-contain w-full h-auto pl-6 pr-6 flex flex-col justify-center items-center gap-4`}
      >
        <Header />
        {children}
      </main>
      <div className="lg:hidden">
        <Menu />
      </div>
    </>
  );
}
