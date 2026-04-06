export default function Form() {
  return (
    <form
      action=""
      className="text-[#24456F] bg-[#E8E8E8] p-5 font-medium mt-6 lg:mt-8 flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-4 lg:items-center lg:flex-wrap lg:w-[90%]"
    >
      <div className=" lg:flex lg:flex-col lg:items-center  ">
        <label htmlFor="investment">Monto minimo de inversión</label>
        <select
          name="investment"
          id="investment"
          className="bg-[#E8E8E8]/66 w-full pt-2  mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none text-2xl font-semibold"
        >
          <option value="">$ 236.000.000</option>
          <option value="">$ 100.000</option>
          <option value="">$ 150.000</option>
        </select>
      </div>

      <div className="lg:w-[20%] lg:flex lg:flex-col lg:items-center lg:pl-10 lg:border-l lg:border-gray-400 ">
        <label htmlFor="location">Ubicación</label>
        <select
          name="location"
          id="location"
          className="bg-[#c1bdbd]/40  w-full p-2 mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none "
        >
          <option value="">Cartagena</option>
          <option value="">Lorem</option>
          <option value="">Lorem</option>
        </select>
      </div>

      <div className="lg:w-[20%] lg:flex lg:flex-col lg:items-center lg:pl-10 lg:pr-10 lg:border-l lg:border-r lg:border-gray-400">
        <label htmlFor="projectType">Tipo de proyecto</label>
        <select
          name="projectType"
          id="projectType"
          className="bg-[#c1bdbd]/40  w-full p-2  mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none"
        >
          <option value="">Vivienda</option>
          <option value="">Lorem</option>
        </select>
      </div>

      <div className="lg:w-[20%] lg:flex lg:flex-col lg:items-center ">
        <label htmlFor="goal">¿Qué estas buscando?</label>
        <select
          name="goal"
          id="goal"
          className="bg-[#c1bdbd]/40  w-full p-2  mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none"
        >
          <option value="">Renta</option>
          <option value="">Valorización</option>
        </select>
      </div>

      <div className="w-full lg:w-[12%] flex justify-center p-2">
        <button
          type="submit"
          className="w-[80%] lg:w-full text-[22px] p-2 lg:p-2 bg-linear-90 from-[#7EBD4F] to-[#1AAA60] font-semibold text-white tracking-[1px] "
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
