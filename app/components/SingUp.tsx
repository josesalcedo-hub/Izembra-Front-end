"use client";

import { SendDataDTO } from "../api/SendData";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { SendData } from "../api/SendData";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["200", "400"] });

export default function SingUp() {
  const [form, setForm] = useState<SendDataDTO>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await SendData(form);

      if (!res) throw new Error("Algo esta sal");

      setForm({
        name: "",
        lastname: "",
        email: "",
        phone: "",
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return (
    <div
      className={`${montserrat.className} w-full h-screen fixed backdrop-blur-xs flex flex-col justify-center items-center`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-[#254672] w-full max-w-md h-10/12 flex flex-col items-center p-10 gap-6"
      >
        <div className="w-full flex justify-end">
          <button
            type="button"
            aria-label="Cerrar modal"
            className="hover:opacity-70 transition-opacity cursor-pointer   "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
        <Image
          src={"/Icons/Logo Izembra.png"}
          width={60}
          height={60}
          alt="Logo Izembra"
        />
        <fieldset className="w-full flex flex-col items-center gap-4 mt-4">
          <legend className="w-full text-center text-white font-bold tracking-[1px] mb-2 text-xl">
            Registrate
          </legend>
          <p className="w-full text-center text-white mb-6">
            Regístrate y encuentra tu
            <br /> inversión ideal ahora
          </p>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChanges}
            className="w-full text-xs tracking-[.8px] text-[#24456F] h-10 pl-4 bg-[#E8E8E8] rounded-sm"
            placeholder="Nombre"
          />
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChanges}
            className="w-full text-xs tracking-[.8px] text-[#24456F] h-10 pl-4 bg-[#E8E8E8] rounded-sm"
            placeholder="Apellido"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChanges}
            className="w-full text-xs tracking-[.8px] text-[#24456F] h-10 pl-4 bg-[#E8E8E8] rounded-sm"
            placeholder="Correo electronico"
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChanges}
            className="w-full text-xs tracking-[.8px] text-[#24456F] h-10 pl-4 bg-[#E8E8E8] rounded-sm"
            placeholder="Teléfono"
          />
        </fieldset>
        <button
          type="submit"
          className="w-1/2 p-2 bg-linear-to-r from-[#7EBD4F] from-20% to-[#1AAA60] to-61% text-white rounded-sm"
        >
          Continuar
        </button>
      </form>
    </div>
  );
}
