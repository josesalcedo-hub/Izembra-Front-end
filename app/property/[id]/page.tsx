"use client";

import Link from "next/link";
import LayoutWrapper from "@/app/components/LayoutWrapper";
import { useUiStore } from "@/app/store/uiStore";
import { useEffect, use, useState } from "react";

export default function PropertyDetails({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { getProperty, property } = useUiStore();
  const { id } = use(params);
  const [isAcacias, setIsAcacias] = useState([]);

  const getData = async () => {
    const res = await fetch(property.url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    if (!isNaN(id)) {
      getProperty(id);
    }
  }, [id, getProperty]);

  useEffect(() => {
    // Disparamos el fetch si ya tenemos la URL del proyecto
    if (property?.url) {
      const fetchdata = async () => {
        try {
          const data = await getData();
          setIsAcacias(data);
          console.log(data);
        } catch (error) {
          console.error("Error al cargar imágenes:", error);
        }
      };
      fetchdata();
    }
  }, [property?.url]);

  return (
    <LayoutWrapper>
      <section className="flex flex-col justify-center items-center gap-4 pl-1.5 pr-1.5 lg:p-28">
        <header className="w-full text-start pt-8 pb-8 ">
          <h1 className="text-white font-semibold lg:text-2xl">
            {property.nombre}
          </h1>
          <p className="text-white text-xs mt-1.5 lg:text-base">
            {property?.unidades?.[0]?.tipo_inmueble} | {property?.ubicacion}
          </p>
        </header>
        <figure className={`w-full flex gap-2 flex-nowrap overflow-hidden overflow-x-auto [scrollbar-width:none]`}>
          {isAcacias.map((data, index) => (
            <img key={index} src={data.url} alt="" className="w-[90%] h-[90%]" />
          ))}
        </figure>
        <section className="text-start text-white pt-8 pb-6 lg:grid lg:grid-cols-2 ">
          <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-4">
            <h2 className=" font-bold">Lorem ipsum dolor sit amet</h2>
            <p className="text-xs mt-4 pr-5 lg:pr-20">
              {property?.descripcion}
            </p>
            <figure>
              <img src="/Icons/Example.png" alt="" className="w-10/12" />
            </figure>
          </div>
          <figure className="hidden lg:flex w-full justify-end ">
            <img src="/bg/image.png" alt="" className="w-1/2 h-full" />
          </figure>
        </section>
        <section
          aria-label="Detalles de inversión"
          className="w-full text-white lg:grid lg:grid-cols-2"
        >
          <div className="bg-[#0E345B] p-2 flex justify-start items-center gap-2 w-full">
            <article className="w-fit lg:w-1/2 text-start pr-2 border-r ">
              <h3 className="text-xs">Monto mínimo de inversión</h3>
              <data className="font-extrabold lg:text-2xl" value="236000000">
                {property?.unidades?.[0]?.precio_minimo} cop
              </data>
            </article>
            <article className="w-fit lg:w-1/2 text-start pl-2">
              <h3 className="text-xs ">Separa desde</h3>
              <data className="font-extrabold lg:text-2xl" value="3000000">
                {property?.unidades?.[0]?.valor_separacion} cop
              </data>
            </article>
          </div>
          <div className="w-full h-14 mt-2 lg:mt-0 lg:flex lg:justify-end">
            <button className="w-full lg:w-[70%] h-full bg-linear-90 from-[#51B456]  to-[#11A961] text-center text-white tracking-[0.5px] font-bold">
              <Link href={"#"} className="lg:text-xl">
                Quiero invertir
              </Link>
            </button>
          </div>
        </section>

        <section>
          {" "}
          <figure className="lg:hidden">
            <img src="/bg/image.png" alt="" />
          </figure>
        </section>
      </section>

      <footer className="w-full h-screen bg-[#0E345B]"></footer>
    </LayoutWrapper>
  );
}
