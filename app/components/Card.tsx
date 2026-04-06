"use client";

import { useUiStore } from "../store/uiStore";
import { useEffect } from "react";
import Link from "next/link";

export default function Card() {
  const { getData } = useUiStore();

  const data = useUiStore((state) => state.data);

  useEffect(() => {
    getData();

    console.log(data)
  }, []);
  return (
    <>
      {data.map((unidad, index) => (
        <article
          className="w-full bg-white p-4 lg:w-[calc(30%-1rem)] lg:mt-12"
          key={index}
        >
          <span className="text-[12px] p-1 pl-2 pr-2 text-[#24456F] font-medium">
            {unidad.unidades.length > 0 && `${unidad.unidades[0].estado}`}
          </span>
          <header className="bg-[#FFFFFF]/95 mt-3 pb-3 ">
            <img
              src="/Project/Project-example-2.png"
              alt="#"
              className="w-full mb-5"
            />
            <div className="pl-3 pr-3 flex justify-between ">
              <div className="">
                <p className="text-[10px] text-black">
                  Monto mínimo de inversión
                </p>
                <strong className="text-[18px] text-[#24456F] font-black tracking-[0.4px]">
                  {unidad.unidades.length > 0 &&
                    `${unidad.unidades[0].valor_separacion}`}{" "}
                  <span className="text-sm">cop</span>
                </strong>
              </div>
              <p className="bg-white text-[9px] flex justify-end items-center gap-1 text-[#24456F] leading-2.5">
                <span className="w-fit bg-[#24456F] flex justify-center items-center h-fit p-0.5 ">
                  {" "}
                  <img src="/Icons/Location2.png" alt="" className="w-4" />
                </span>
                Troncal
                <br />
                Cartagena de Indias
              </p>
            </div>
          </header>
          <span className="w-full">
            <hr className="m-auto w-[80%] h-px border-0 bg-[#c6c6c6]" />
          </span>
          <div className="flex p-3 justify-between">
            <section>
              <h3 className="text-[14px] font-semibold text-black">
                {unidad.nombre}
              </h3>
              <Link
                href={"#"}
                className="text-[14px] text-[#234670] font-normal underline"
              >
                {unidad.unidades.length > 0 &&
                  `${unidad.unidades[0].tipo_inmueble}`}
              </Link>
              <div>
                <div className="leading-5 mt-3">
                  <p className="w-fit h-fit text-[12px] font-normal mt-2 text-black ">
                    Separa desde
                  </p>
                  <span className="w-fit h-fit text-[#234670] font-semibold ">
                    {unidad.unidades.length > 0 &&
                      `${unidad.unidades[0].valor_separacion}`}{" "}
                    <span className="text-xs">cop</span>
                  </span>
                </div>
                <div className="leading-4 mt-3">
                  <p className="text-[12px] font-normal mt-2 text-black">
                    Plazo estimado
                  </p>
                  <span className="text-[12px] text-[#234670] font-normal italic">
                    {unidad.unidades.length > 0 &&
                      `${unidad.unidades[0].plazo_entrega}`}
                  </span>
                </div>
              </div>
            </section>
            <section className="mr-5">
              <ul className=" text-[10px] flex flex-col justify-start items-start gap-4 font-medium text-black">
                <li>
                  {" "}
                  <p className="text-[9px] flex justify-end items-center gap-1">
                    <span className="w-fit bg-[#24456F] flex justify-center items-center h-fit p-0.5 rounded-md">
                      {" "}
                      <img src="/Icons/Key.png" alt="" className="w-4" />
                    </span>
                    Renta corta
                  </p>
                </li>
                <li>
                  {" "}
                  <p className="text-[9px] flex justify-end items-center gap-1">
                    <span className="w-fit bg-[#24456F] flex justify-center items-center h-fit p-0.5 rounded-md">
                      {" "}
                      <img src="/Icons/Percentage.png" alt="" className="w-4" />
                    </span>
                    Financiación <br />
                    70%
                  </p>
                </li>
                <li>
                  <p className="text-[9px] flex justify-end items-center gap-1">
                    <span className="w-fit bg-[#24456F] flex justify-center items-center h-fit p-0.5 rounded-md">
                      {" "}
                      <img src="/Icons/Bounce-Up.png" alt="" className="w-4" />
                    </span>
                    Valorización <br /> estimada anual <br /> 8%
                  </p>
                </li>
              </ul>
            </section>
          </div>
          <footer className="w-full flex justify-center items-center flex-col">
            <Link
              href={`/property/${unidad.unidades[0].id}`}
              className="text-xl w-[80%] bg-linear-to-r from-[#4fb457] from-10% to-[#14a961] to-50% text-white p-2 font-medium tracking-[3%] mt-4 text-center"
            >
              Más información
            </Link>

            <a
              href=""
              className="text-xs mt-2 text-[#234670] font-medium tracking-[1]"
            >
              Reservar
            </a>
          </footer>
        </article>
      ))}
    </>
  );
}
