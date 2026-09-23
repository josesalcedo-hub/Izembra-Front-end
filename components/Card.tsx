"use client";

import { useUiStore } from "@/app/store/uiStore";
import { useEffect } from "react";
import Link from "next/link";

export default function Card() {
  const { getData } = useUiStore();

  const data = useUiStore((state) => state.data);

  useEffect(() => {
    getData();

    console.log(data);
  }, []);
  return (
    <>
      {data.map((unidad, index) => (
        <article
          className="w-full bg-white p-2 lg:w-[calc(30%-1rem)] lg:mt-12 shadow-[9px_9px_9px_-4px_rgba(117,117,117,0.37)] rounded-2xl border border-gray-200"
          key={index}
        >
          <header className="bg-[#FFFFFF]/95 pb-3 ">
            <img
              src={unidad.portada}
              alt="#"
              className="w-full rounded-xl p-3"
            />
            <div className="pl-3 pr-3 flex justify-between ">
              <div className="flex flex-col gap-0 lg:gap-1">
                <strong className="text-[18px] text-[#24456F] font-black tracking-[0.4px]">
                  {`${unidad.nombre}`}
                </strong>
                <p className="bg-white text-xs font-normal flex justify-start items-center gap-1 text-[#24456F] leading-2.5 ">
                  <span className="w-fit flex justify-start items-center h-fit ">
                    {" "}
                    <img
                      src="/Icons/ubicacion (2).png"
                      alt=""
                      className="w-3"
                    />
                  </span>
                  {unidad.ubicacion}
                </p>
              </div>
            </div>
          </header>
          <div className="flex flex-col p-3 justify-between ">
            <section className="flex gap-3 justify-start items-center text-[#27656B] font-bold pb-3">
              <p className="font-normal text-xs">Desde</p>{" "}
              <p className=" text-3xl lg:text-4xl">
                {unidad?.unidades?.[0]?.precio_minimo}{" "}
                <span className="text-xl">cop</span>
              </p>
            </section>
            <section className="w-full grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 mt-5 place-items-center ">
              <div className="w-full flex flex-col  justify-start items-start gap-5 lg:gap-4 lg:flex-row lg:justify-center lg:items-center lg:border-b lg:border-black/20 pb-4 ">
                <div className="w-full grid grid-cols-[max-content_max-content] gap-5 lg:gap-1 justify-start lg:justify-center lg:border-r lg:border-black/20 pr-2">
                  <div className="">
                    <img src="/Icons/money.png" alt="" className="w-8" />
                  </div>
                  <div className="text-xs">
                    <h3>Separa con</h3>
                    <p className="font-bold">
                      {unidad?.unidades?.[0]?.valor_separacion}
                    </p>
                  </div>
                </div>

                <div className="w-full grid grid-cols-[max-content_max-content] gap-5 lg:gap-1 justify-start lg:justify-center lg:border-r lg:border-black/20 pr-2 ">
                  <div className="">
                    <img src="/Icons/home.png" alt="" className="w-7 " />
                  </div>
                  <div className="text-xs">
                    <h3>Tipo</h3>
                    <p className="font-bold">
                      {unidad?.unidades?.[0].tipo_inmueble}
                    </p>
                  </div>
                </div>

                <div className="w-full grid grid-cols-[max-content_max-content] gap-5 lg:gap-1 justify-start lg:justify-center ">
                  <div className="">
                    <img src="/Icons/edificio.png" alt="" className="w-7" />
                  </div>
                  <div className="text-xs">
                    <h3>Estado</h3>
                    <p className="font-bold whitespace-normal wrap-break-words">{unidad?.unidades?.[0]?.estado}</p>
                  </div>
                </div>
              </div>
              <div className="w-full pr-6 pl-8 lg:p-0 flex gap-5 lg:gap-0 flex-col lg:flex-row  lg:justify-between lg:items-center lg:mt-5  ">
                <div className="text-xs font-medium  text-end lg:text-start">
                  <h3 className="">Rentabilidad estimada</h3>
                  <p className="text-green-500">12.5% E.A</p>
                </div>

                <div className="text-xs font-medium  text-end lg:text-start">
                  <h3>PLazo estimado</h3>
                  <p className="font-bold">
                    {unidad?.unidades?.[0]?.plazo_entrega}
                  </p>
                </div>

                <div className="text-xs font-medium  text-end lg:text-start">
                  <h3 className="">Financiacion </h3>
                  <p className="text-green-500">
                    {unidad?.unidades?.[0]?.porcentaje_fin}%
                  </p>
                </div>
              </div>
            </section>
          </div>
          <footer className="w-full flex justify-center items-center flex-col">
            <Link
              href={`/property/${unidad.unidades[0].id}`}
              className="flex justify-center gap-3 text-lg lg:text-base w-[95%] bg-[#024e55] text-white p-2 lg:mt-5 lg:p-3 font-medium tracking-[3%] text-center rounded-xl"
            >
              Ver oportunidad{" "}
            </Link>
            <button className="text-xs mt-3 mb-3 text-[#024e55] font-medium tracking-[1]">
              Más detalle
            </button>
          </footer>
        </article>
      ))}
    </>
  );
}
