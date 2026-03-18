import Link from "next/link";
export default function Menu({ open, setOpen }: any) {
  return (
    <ul
      className={`fixed inset-0 z-50 w-4/5 flex flex-col bg-white/95 p-8 gap-8 transition-transform duration-300 ease-out rounded-tr-xl rounded-br-xl ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex justify-between pb-5 border-b border-[#24456F]/20">
        <img src="/Logo/Prueba3.png" alt="" className="w-1/3" />
        <button onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#24456f"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.707 5.293l5.293 5.292l5.293 -5.292a1 1 0 0 1 1.414 1.414l-5.292 5.293l5.292 5.293a1 1 0 0 1 -1.414 1.414l-5.293 -5.292l-5.293 5.292a1 1 0 1 1 -1.414 -1.414l5.292 -5.293l-5.292 -5.293a1 1 0 0 1 1.414 -1.414" />
          </svg>
        </button>
      </div>
      <nav>
        <ul
          className={`text-lg font-light flex flex-col gap-6 rounded-tr-2xl text-[#24456F] `}
        >
          <Link href={"/"}>
            <li className="rounded-md transition-all duration-150 hover:bg-[#24456F]/10 px-2 py-2">
              Inicio
            </li>
          </Link>
          <Link href={"/Profile"}>
            <li className="rounded-lg transition-all duration-150 hover:bg-[#24456F]/10 px-2 py-2">
              MI portafolio
            </li>
          </Link>
          <li className="rounded-lg transition-all duration-150 hover:bg-[#24456F]/10 px-2 py-2">
            ¿Como funciona?
          </li>
          <li className="rounded-lg transition-all duration-150 hover:bg-[#24456F]/10 px-2 py-2">
            Ayuda
          </li>
          <li className="rounded-lg transition-all duration-150 hover:bg-[#24456F]/10 px-2 py-2">
            Cuenta
          </li>
        </ul>
      </nav>
    </ul>
  );
}
