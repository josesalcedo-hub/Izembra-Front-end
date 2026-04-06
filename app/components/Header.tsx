import { useUiStore } from "../store/uiStore";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
export default function Header() {
  const isMenuOpen = useUiStore((state) => state.isMenuOpen);
  const toogle = useUiStore((state) => state.toggleMenu);

  return (
    <>
      <header
        className={`w-full ${isMenuOpen ? "blur-xs" : ""}  flex justify-between items-center  pt-10 lg:pl-22 lg:pr-22`}
      >
        <button onClick={toogle} className="lg:hidden">
          <Image src={"/icons/Menu.png"} alt="Menu" width={31} height={31} />
        </button>

        <Image
          src={"/Logo/Logo.png"}
          alt="logo principal"
          width={100}
          height={100}
          className="lg:w-40"
        />

        <Link href={"/SingUp"} className="lg:hidden">
          <Image src={"/Icons/Frame.png"} alt="user" width={25} height={25} />
        </Link>

        <div className="hidden lg:flex w-fit  ">
          <Menu />
        </div>
      </header>
      <Image
        src={"/Logo/line.png"}
        alt="Details"
        width={1000}
        height={1}
        className="w-full h-full"
      />
    </>
  );
}
