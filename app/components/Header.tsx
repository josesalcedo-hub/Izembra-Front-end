import Image from "next/image"
export default function Header(){
    return <header className="bg-[url(/bg/fondo.webp)] flex justify-between items-center p-6 pt-10">
        <button>
            <Image
            src={"/icons/Menu.png"}
            alt="Menu"
            width={31}
            height={31}
            />
        </button>

        <Image
        src={"/Logo/Logo-mobile.png"}
        alt="logo principal"
        width={100}
        height={100}
        />

        <Image
        src={"/Icons/Frame.png"}
        alt="user"
        width={25}
        height={25}
        />
    </header>
}