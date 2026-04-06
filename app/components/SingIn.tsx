"use client";
import { useState } from "react";
import { Login } from "../api/SendData";

export default function SingIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };


  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault();

    try{
      const res = await Login(formData);

      if(!res) throw new Error("Algo va mal");
      setFormData({
        email: "",
        password: ""
      });

    }catch(error:any){
      throw new Error(error.message)
    }
  };

  return (
    <main className="w-full h-screen flex flex-col justify-start items-center pt-5">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-full max-w-md h-10/12 flex flex-col items-center pl-6 pr-6 gap-6 "
      >
        <fieldset className="w-full flex flex-col items-center gap-6 mt-4">
          <legend className="w-full text-center text-white font-bold tracking-[1px] mb-8 text-xl">
            Iniciar sesión
          </legend>
          <input
            type="email"
            name="email"
            defaultValue={formData.email}
            onChange={handleChange}
            placeholder="Correo Electro"
            className="w-full text-xs tracking-[.8px] text-[#24456F] h-11 pl-4 bg-[#E8E8E8] rounded-sm"
          />
          <input
            type="password"
            name="password"
            defaultValue={formData.password}
            onChange={handleChange}
            className="w-full text-xs tracking-[.8px] text-[#24456F] h-11 pl-4 bg-[#E8E8E8] rounded-sm"
            placeholder="Contraseña"
          />
        </fieldset>
        <button
          type="submit"
          className="w-1/2 p-2 bg-linear-to-r from-[#7EBD4F] from-20% to-[#1AAA60] to-61% text-white rounded-sm"
        >
          Continuar
        </button>
      </form>
    </main>
  );
}
