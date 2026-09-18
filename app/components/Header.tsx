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
        className={`w-full ${isMenuOpen ? "blur-xs" : ""}  flex justify-between items-center p-4 lg:pt-10 lg:pl-22 lg:pr-22  bg-[#005f6a]`}
      >
        <button onClick={toogle} className="lg:hidden">
          <Image src={"/icons/Menu.png"} alt="Menu" width={31} height={31} />
        </button>

        <Image
          src={"/Logo/Recurso 29xxxhdpi.png"}
          alt="logo principal"
          width={100}
          height={100}
          className="w-14 lg:w-15"
        />

        <Link href={"/SingUp"} className="lg:hidden">
          <Image src={"/Icons/Frame.png"} alt="user" width={25} height={25} />
        </Link>

        <div className="hidden lg:flex w-fit  ">
          <Menu />
        </div>
      </header>
     
    </>
  );
}
