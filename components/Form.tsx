export default function Form() {
  return (
    <section className="w-full flex justify-center bg-[#f2f2f2] p-4 lg:p-0 ">
      <form
        action=""
        className="text-[#424444] bg-white p-5 lg:p-8 font-medium mt-6 lg:mt-0 lg:relative lg:bottom-3 flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-4 lg:items-center lg:flex-wrap lg:w-[90%] rounded-2xl lg:shadow-[-1px_6px_17px_0px_rgba(0,0,0,0.2  )]"
      >
        <div className=" lg:flex lg:flex-col lg:items-center  ">
          <label htmlFor="investment" className="text-sm">Monto minimo de inversión</label>
          <select
            name="investment"
            id="investment"
            className="bg-transparent w-full pt-2  rounded-lg  mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none text-2xl font-bold text-[#424444]"
          >
            <option value="">$ 236.000.000</option>
            <option value="">$ 100.000</option>
            <option value="">$ 150.000</option>
          </select>
        </div>

        <div className="lg:w-[20%] lg:flex lg:flex-col lg:items-center lg:pl-10 lg:border-l lg:border-gray-400 ">
          <label htmlFor="location" className="text-sm">Ubicación</label>
          <select
            name="location"
            id="location"
            className="bg-[#d5d2d2] rounded-lg  w-full p-2 mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none text-black/80 "
          >
            <option value="">Cartagena</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
          </select>
        </div>

        <div className="lg:w-[20%] lg:flex lg:flex-col lg:items-center lg:pl-10 lg:pr-10 lg:border-l lg:border-r lg:border-gray-400">
          <label htmlFor="projectType" className="text-sm">Tipo de proyecto</label>
          <select
            name="projectType"
            id="projectType"
            className="bg-[#d5d2d2] rounded-lg  w-full p-2 mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none text-black/80"
          >
            <option value="">Vivienda</option>
            <option value="">Lorem</option>
          </select>
        </div>

        <div className="lg:w-[20%] lg:flex lg:flex-col lg:items-center ">
          <label htmlFor="goal" className="text-sm">¿Qué estas buscando?</label>
          <select
            name="goal"
            id="goal"
            className="bg-[#d5d2d2] rounded-lg  w-full p-2 mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none text-black/80"
          >
            <option value="">Renta</option>
            <option value="">Valorización</option>
          </select>
        </div>

        <div className="w-full lg:w-[15%] flex justify-center p-2">
          <button
            type="submit"
            className="w-[80%] lg:w-full text-base p-2 lg:p-5 bg-linear-90 from-[#028989] to-[#048a8a] font-semibold text-white tracking-[1px] rounded-lg lg:text-xs "
          >
            Ver oportunidades
          </button>
        </div>
      </form>
    </section>
  );
}
