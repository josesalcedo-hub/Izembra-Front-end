"use client";
import { useUiStore } from "../store/uiStore";
import Footer from "./Footer";
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
        className={`${isMenuOpen ? "blur-sm" : ""} transition-all duration-300  bg-no-repeat bg-contain w-full h-auto  flex flex-col  justify-center items-center lg:gap-0 lg:p-0 `}
      >
        <Header />
        {children}
        <Footer/>
      </main>
      <div className="lg:hidden">
        <Menu />
      </div>
    </>
  );
}
