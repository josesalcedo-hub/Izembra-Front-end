export default function Form() {
  return (
    <form
      action=""
      className="text-[#24456F] bg-[#E8E8E8]/78 p-5 rounded-xl font-semibold mt-6 lg:flex lg:justify-center lg:gap-4 lg:items-center lg:flex-wrap lg:w-[80%]"
    >
      <div className="mb-5 lg:flex lg:flex-col lg:items-center">
        <label htmlFor="investment">¿Cuánto quieres invertir?</label>
        <select
          name="investment"
          id="investment"
          className="bg-[#E8E8E8]/66 w-full p-2 rounded-md mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none"
        >
          <option value="">$ 50.000</option>
          <option value="">$ 100.000</option>
          <option value="">$ 150.000</option>
        </select>
      </div>

      <div className="mb-5 lg:flex lg:flex-col lg:items-center">
        <label htmlFor="location">Ubicación</label>
        <select
          name="location"
          id="location"
          className="bg-[#E8E8E8]/66 w-full p-2 rounded-md mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none"
        >
          <option value="">Cartagena</option>
          <option value="">Lorem</option>
          <option value="">Lorem</option>
        </select>
      </div>

      <div className="mb-5 lg:flex lg:flex-col lg:items-center">
        <label htmlFor="projectType">Tipo de proyecto</label>
        <select
          name="projectType"
          id="projectType"
          className="bg-[#E8E8E8]/66 w-full p-2 rounded-md mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none"
        >
          <option value="">Vivienda</option>
          <option value="">Lorem</option>
        </select>
      </div>

      <div className="mb-5 lg:flex lg:flex-col lg:items-center">
        <label htmlFor="goal">¿Qué estas buscando?</label>
        <select
          name="goal"
          id="goal"
          className="bg-[#E8E8E8]/66 w-full p-2 rounded-md mt-2 transition-all duration-150 ease-in focus:ring-1 focus:ring-[#24456F] focus:outline-none"
        >
          <option value="">Renta</option>
          <option value="">Valorización</option>
        </select>
      </div>

      <div className="w-full lg:w-[15%] flex justify-center p-2">
        <button
          type="submit"
          className="w-full p-3 bg-linear-90 from-[#7EBD4F] to-[#1AAA60] text-white rounded-lg"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
