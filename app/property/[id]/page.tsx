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
  const [isAcacias, setIsAcacias] = useState(false);

  useEffect(() => {
    if (!isNaN(id)) {
      getProperty(id);
    }

    if (id == 0) {
      setIsAcacias(!isAcacias);
    }
    console.log(id);
  }, [id, getProperty]);

  return (
    <LayoutWrapper>
      <section className="flex flex-col justify-center items-center gap-4 pl-1.5 pr-1.5">
        <header className="w-full text-start pt-8 pb-8 ">
          <h1 className="text-white font-semibold">{property.nombre}</h1>
          <p className="text-white text-xs mt-1.5">
            {property?.unidades?.[0]?.tipo_inmueble} | {property?.ubicacion}
          </p>
        </header>
        <figure
          className={`${isAcacias ? "flex" : "hidden"} flex w-full overflow-hidden gap-2 overflow-x-scroll`}
        >
          <img
            src="/Project/Project-example-2.png"
            alt=""
            className="border-3 border-white"
          />
          <img src="/Project/Project-example-2.png" alt="" />
        </figure>
        <section className="text-start text-white pt-8 pb-6">
          <h2 className=" font-bold">Lorem ipsum dolor sit amet</h2>
          <p className="text-xs mt-4 pr-5">{property?.descripcion}</p>
        </section>
        <section
          aria-label="Detalles de inversión"
          className="w-full text-white bg-[#0E345B] p-2"
        >
          <div className="flex justify-center items-center gap-2 w-full">
            <article className="w-fit text-center pr-2 border-r border-white">
              <h3 className="text-xs">Monto mínimo de inversión</h3>
              <data className="font-extrabold " value="236000000">
                {property?.unidades?.[0]?.precio_minimo}
              </data>
            </article>
            <article className="w-fit text-center pl-2">
              <h3 className="text-xs ">Separa desde</h3>
              <data className="font-extrabold" value="3000000">
                {property?.unidades?.[0]?.valor_separacion}
              </data>
            </article>
          </div>
        </section>
        <Link
          href={"#"}
          className="w-full bg-linear-90 from-[#51B456]  to-[#11A961] p-2.5 text-center text-white tracking-[0.5px] mt-2 font-bold"
        >
          Quiero invertir
        </Link>
        <section>
          <h2>Ubicación</h2>
          <figure>
            <img src="/bg/image.png" alt="" />
          </figure>
        </section>
      </section>
    </LayoutWrapper>
  );
}
