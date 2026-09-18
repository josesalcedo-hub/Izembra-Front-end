export default function Invercolombia() {
  return (
    <section className="w-full text-[#424444] flex flex-col items-center bg-[#f2f2f2] lg:pt-10  lg:pb-15">
      <div className="w-[85%]">
        <h2 className="text-5xl font-bold">
          INVIERTE CON <br />
          CONFIANZA
        </h2>

        <div className="grid grid-cols-2 mt-10  ">
          <div className="flex flex-col gap-6">
            <img src="/Icons/recurso_logo.png" alt="" className="w-[65%]" />

            <div className="flex flex-col  justify-start items-start bg-white p-4 rounded-2xl">
              <h3 className="text-sm">Proyectos entregados</h3>
              <div className="flex justify-center items-center gap-8">
                <img src="/Icons/Recurso 40xxxhdpi.png" alt="Alejandria" />
                <img
                  src="/Icons/Recurso 44xxxhdpi.png"
                  alt="Mirador de los alpes"
                />
                <img src="/Icons/Recurso 45xxxhdpi.png" alt="Doral cartagena" />
                <img src="/Icons/Recurso 46xxxhdpi.png" alt="Doral Suites" />
              </div>
            </div>

            <div className="flex flex-col  justify-start items-start bg-white p-4 rounded-2xl">
              <h3 className="text-sm">Proyectos habitados / en construcción</h3>
              <div className="flex justify-center items-center gap-8">
                <img src="/Icons/Recurso 47xxxhdpi.png" alt="Alejandria" />
                <img
                  src="/Icons/Recurso 48xxxhdpi.png"
                  alt="Mirador de los alpes"
                />
                <img src="/Icons/Recurso 49xxxhdpi.png" alt="Doral cartagena" />
              </div>
            </div>

            <div className="flex flex-col  justify-start items-start bg-white p-4 rounded-2xl">
              <h3 className="text-sm">Proyectos sobre plano</h3>
              <div className="flex justify-center items-center gap-8">
                <img src="/Icons/Recurso 50xxxhdpi.png" alt="Alejandria" />
                <img
                  src="/Icons/Recurso 51xxxhdpi.png"
                  alt="Mirador de los alpes"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center ml-20 text-[#424444] gap-15">
            <h2 className="text-4xl font-semibold ml-6">
              Reconocimientos y <br />
              certificaciones.
            </h2>
            <div>
              <div className="flex justify-between items-center">
                <img
                  src="/Icons/Recurso 52xxxhdpi.png"
                  alt=""
                  className="w-32"
                />
                <img
                  src="/Icons/Recurso 53xxxhdpi.png"
                  alt=""
                  className="w-32"
                />
                <img src="/Icons/10.png" alt="" className="w-32" />
              </div>
            </div>
            <p className="text-sm ml-6">
              Invercolombia es una empresa dedicada a generar desarrollo y
              bienestar para la comunidad, ofreciendo soluciones inmobiliarias
              que atienden las necesidades de nuestros clientes a nivel local y
              nacional. Nuestro propósito es lograr su satisfacción mientras
              impulsamos un crecimiento rentable y sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
