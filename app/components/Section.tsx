import Image from "next/image";

export default function Section() {
  return (
    <section className="w-full h-fit bg-[#f2f2f2]/90 flex flex-col lg:flex-row justify-center p-4  rounded-2xl">
      <div className="w-full flex flex-col lg:flex-row lg:justify-evenly lg:items-center  rounded-2xl mt-6 lg:mt-0">
        <div className="flex flex-col-reverse justify-center items-center gap-5 p-4">
          <Image
            src={"/Icons/recurso.png"}
            alt={"Primer icono"}
            width={80}
            height={80}
          />
          <div>
            <p className="text-xs text-center">
              Crecimiento del mercado <br/> <b>inmobiliario</b>
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-center items-center gap-5 p-4">
          <Image
            src={"/Icons/Recurso 33xxxhdpi.png"}
            alt={"Primer icono"}
            width={80}
            height={80}
          />
          <div>
            <p className="text-xs text-center">
              Potencial de <br /> <b>valorización</b>
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-center items-center gap-5 p-4">
          <Image
            src={"/Icons/Recurso 32xxxhdpi.png"}
            alt={"Primer icono"}
            width={80}
            height={80}
          />
          <div>
            <p className="text-xs text-center">Calidad de vida</p>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-center items-center gap-5 p-4">
          <Image
            src={"/Icons/Recurso 30xxxhdpi.png"}
            alt={"Primer icono"}
            width={80}
            height={80}
          />
          <div>
            <p className="text-xs text-center">
              Comportamiento histórico <br /> <b>de la inversión inmobiliaria</b>
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-center items-center gap-5 p-4">
          <Image
            src={"/Icons/Recurso 31xxxhdpi.png"}
            alt={"Primer icono"}
            width={80}
            height={80}
          />
          <div>
            <p className="text-xs text-center">Desarrollo urbano </p>
          </div>
        </div>
      </div>
    </section>
  );
}
