"use client";

import Link from "next/link";
import Image from "next/image";
export default function Header({ open, setOpen }: any) {
  return (
    <header
      className={`${open ? "blur-xs" : ""} bg-[url(/bg/fondo.webp)] flex justify-between items-center p-6 pt-10`}
    >
      <button onClick={() => setOpen(!open)}>
        <Image src={"/icons/Menu.png"} alt="Menu" width={31} height={31} />
      </button>

      <Image
        src={"/Logo/Logo-mobile.png"}
        alt="logo principal"
        width={100}
        height={100}
      />

      <Link href={"/SingUp"}>
        <Image src={"/Icons/Frame.png"} alt="user" width={25} height={25} />
      </Link>
    </header>
  );
}
