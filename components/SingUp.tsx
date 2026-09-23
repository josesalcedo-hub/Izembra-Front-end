"use client";

import { SendDataDTO } from "../api/SendData";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { SendData } from "../api/SendData";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["200", "400"] });

export default function SingUp() {
  const [form, setForm] = useState<SendDataDTO>({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await SendData(form);

      if (!res) throw new Error("Algo esta sal");
      setForm({
        name: "",
        lastname: "",
        email: "",
        password:"",
        phone: "",
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return (
    <div
      className={`${montserrat.className} w-full h-screen flex flex-col justify-start items-center pt-5 `}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-full max-w-md h-10/12 flex flex-col items-center pl-6 pr-6 gap-6 "
      >
        <fieldset className="w-full flex flex-col items-center gap-6 mt-4">
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
            className="w-full text-xs tracking-[.8px] text-[#24456F] h-11 pl-4 bg-[#E8E8E8] rounded-sm transition-all duration-150 ease-in focus:ring-2 focus:ring-white/90 focus:outline-none"
            placeholder="Nombre"
            autoComplete="off"
          />
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChanges}
            className="w-full text-xs tracking-[.8px] text-[#24456F] h-11 pl-4 bg-[#E8E8E8] rounded-sm transition-all duration-150 ease-in focus:ring-2 focus:ring-white/90 focus:outline-none"
            placeholder="Apellido"
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChanges}
            className="w-full text-xs tracking-[.8px] text-[#24456F] h-11 pl-4 bg-[#E8E8E8] rounded-sm transition-all duration-150 ease-in focus:ring-2 focus:ring-white/90 focus:outline-none"
            placeholder="Correo electronico"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChanges}
            className="w-full text-xs tracking-[.8px] text-[#24456F] h-11 pl-4 bg-[#E8E8E8] rounded-sm transition-all duration-150 ease-in focus:ring-2 focus:ring-white/90 focus:outline-none"
            placeholder="Contraseña"
            autoComplete="off"
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChanges}
            className="w-full text-xs tracking-[.8px] text-[#24456F] h-11 pl-4 bg-[#E8E8E8] rounded-sm transition-all duration-150 ease-in focus:ring-2 focus:ring-white/90 focus:outline-none"
            placeholder="Teléfono"
            autoComplete="off"
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
