"use client";

import LayoutWrapper from "@/components/LayoutWrapper";
import { useUiStore } from "@/app/store/uiStore";
import { useEffect, use, useState } from "react";
import { dataImga } from "@/app/models/Property/Domain/Property.interfaces";
import { Slider } from "@/components/ui/slider";

export default function PropertyDetails({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { getProperty, property } = useUiStore();
  const { id } = use(params);
  const [isAcacias, setIsAcacias] = useState<dataImga[]>([]);

  const getData = async () => {
    const res = await (await fetch(property.backimage)).json();
    return res;
  };

  useEffect(() => {
    if (!isNaN(id)) {
      getProperty(id);
    }
  }, [id, getProperty]);

  useEffect(() => {
    // Disparamos el fetch si ya tenemos la URL del proyecto
    if (property?.backimage) {
      const fetchdata = async () => {
        try {
          const data = await getData();
          setIsAcacias(data);
        } catch (error) {
          console.error("Error al cargar imágenes:", error);
        }
      };
      fetchdata();
    }
  }, [property?.backimage]);

  return (
    <LayoutWrapper>
      <section className="w-full flex flex-col items-center bg-[#f2f2f2] lg:pl-22 lg:pr-22 lg:pt-28">
        <header className="w-full flex justify-between items-center ">
          <div>
            <h1 className="text-4xl text-[#2b2b2b] font-semibold">
              {property.nombre}
            </h1>
            <p className="text-xl text-gray-500">{}</p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="flex justify-center items-center border border-[#028989] lg:p-1.5 cursor-pointer rounded-lg">
              <img src="/Icons/icons.png" alt="" className="w-16" />
              <p className="flex flex-col justify-center items-start gap-0 text-[#028989]">
                <span className="m-0 p-0 leading-3 text-lg font-semibold">
                  200
                </span>{" "}
                <span className="text-xs">inversionistas</span>
              </p>
            </div>
            <a
              href="#"
              className="lg:p-3.5 lg:pl-5 lg:pr-5 bg-[#028989] rounded-lg text-white font-semibold"
            >
              Invierte ahora
            </a>
          </div>
        </header>

        <section className="grid grid-cols-2">
          <div className="w-full">
            <div className="w-full flex justify-between pl-6 pr-6 gap-1 relative top-12">
              <button className="bg-[#028989] w-full p-1.5 cursor-pointer text-white font-semibold">
                Amenidades
              </button>
              <button className="bg-[#c1bdbd] w-full p-1.5 cursor-pointer">
                Plano general
              </button>
              <button className="bg-[#c1bdbd] w-full p-1.5 cursor-pointer">
                Ubicación
              </button>
            </div>
            <div>
              <img src="/Project/galeria-03.webp" alt="" className="w-full" />

              <div className="w-full bg-white p-4">
                <p className="text-black font-semibold tracking-[1px]">
                  Calculadora de rentabilidad
                </p>
                <div className="flex justify-start items-center gap-32 mt-5">
                  <p className="flex flex-col gap-0.5">
                    <span className="text-xs">Valor inversión inicial</span>
                    <span className="text-lg font-semibold">
                      $170.000.000 <span className="text-base">cop</span>
                    </span>
                  </p>

                  <p className="flex flex-col gap-0.5">
                    <span className="text-xs">Valor comercial actual</span>
                    <span className="text-lg font-semibold">
                      $236.000.000 <span className="text-base">cop</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-fit lg:ml-5 mt-10 grid grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Conoce el proyecto</h2>
            <p className="w-[80%] text-sm mt-4">{property.descripcion}</p>
          </div>
          <div className="w-full flex justify-center items-end relative bottom-5 ">
            <div className="w-fit h-fit flex gap-20 bg-white p-3 rounded-2xl">
              <div>
                <p className="text-xs">Monto mínimo de inversión</p>
                <p className="text-3xl font-semibold">
                  {property.unidades?.[0]?.precio_minimo}{" "}
                  <span className="text-lg">cop</span>
                </p>
              </div>

              <div>
                <p className="text-xs">Separa desde</p>
                <p className="text-2xl font-semibold">
                  {property.unidades?.[0]?.valor_separacion}{" "}
                  <span className="text-base">cop</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#005f6a] w-full mb-5 text-white mt-32">
          <h2 className="w-full text-center font-semibold tracking-[1px] text-2xl mt-15">
            Simulador de plan de pago
          </h2>
          <div className="grid grid-cols-2">
            <div className="p-20">
              <h3>Cuota inicial</h3>
              <div className="w-[80%] mt-5 ">
                <div className="flex justify-between mb-3">
                  <label htmlFor="initial" className="font-medium text-lg">
                    ${property.unidades?.[0]?.precio_minimo}
                  </label>
                  <label
                    htmlFor=""
                    className=" text-xs flex flex-col font-medium"
                  >
                    $300.000.000 <span>Valor maximo</span>
                  </label>
                </div>
                <Slider />

                <div className="mt-10">
                  <h3>Separación</h3>
                  <div className="flex justify-between mt-2 mb-3">
                    <label htmlFor="initial" className="font-medium text-lg">
                      ${property.unidades?.[0]?.valor_separacion}
                    </label>
                    <label
                      htmlFor=""
                      className=" text-xs flex flex-col font-medium"
                    >
                      $300.000.000 <span>Valor maximo</span>
                    </label>
                  </div>
                  <Slider />
                </div>

                <div className="mt-10">
                  <h3>Cuotas mensuales</h3>
                  <select name="" id="">
                    <option value="">1</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[60%] border border-white rounded-lg p-10">
                  <div className="flex justify-between">
                    <p>Saldo final</p>
                    <p>$351.962.500</p>
                  </div>
              
                  <div className="flex justify-between mt-3 font-medium">
                       <p>Precio total</p>
                    <p>$351.962.500</p>
                  </div>

                  <p className="text-xs mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est animi amet, mollitia eaque necessitatibus </p>

                  <button className="bg-[#028989] w-full p-2.5 mt-8 rounded-lg cursor-pointer">Simular</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Equipo del <br/> <span>Proyecto</span></h2>
        </section>
      </section>
    </LayoutWrapper>
  );
}
