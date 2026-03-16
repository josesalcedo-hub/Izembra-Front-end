export default function Card() {
  return (
    <article className="bg-[#E8E8E8] p-4 rounded-xl">
      <span className="text-[10px] p-1 pl-2 pr-2 bg-linear-to-r from-[#7EBD4F] from-20% to-[#1AAA60] to-61% text-white rounded-xl">
        Disponible
      </span>
      <header className="bg-[#FFFFFF]/95 mt-3 pb-3 rounded-lg ">
        <img src="/Project/Project-example.png" alt="#" className="w-full"/>
        <div className="pl-3 pr-3 flex justify-between ">
          <div>
            <p className="text-[10px] text-black">Monto mínimo de inversión</p>
            <strong className="text-[#24456F] font-bold">$360.000.000 cop</strong>
          </div>
          <p className="bg-white text-[9px] flex justify-end items-center gap-1 text-[#24456F] leading-2.5">
            <span className="w-fit bg-[#24456F] flex justify-center items-center h-fit p-0.5 rounded-md">
              {" "}
              <img src="/Icons/Location2.png" alt="" className="w-4" />
            </span>
            Troncal
            <br />
            Cartagena de Indias
          </p>
        </div>
      </header>
      <div className="flex p-3 justify-between">
        <section>
          <h3 className="text-[12px] font-medium text-black">Acacias Campestre</h3>
          <p className="text-[#234670] font-bold">Apartamentos</p>
          <div>
            <div className="leading-5">
              <p className="w-fit h-fit text-[12px] font-medium mt-2 text-black ">
                Separa desde
              </p>
              <span className="w-fit h-fit text-[#234670] font-bold">
                $3.000.000 cop
              </span>
            </div>
            <div className="leading-4">
              <p className="text-[12px] font-medium mt-2 text-black">Plazo estimado</p>
              <span className="text-[10px] text-[#234670] font-medium">
                Junio/2027
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
                Financiación <br/>70%
              </p>
            </li>
            <li>
              <p className="text-[9px] flex justify-end items-center gap-1">
                <span className="w-fit bg-[#24456F] flex justify-center items-center h-fit p-0.5 rounded-md">
                  {" "}
                  <img src="/Icons/Bounce-Up.png" alt="" className="w-4" />
                </span>
                Valorización <br /> estimada anual <br/> 8%
              </p>
            </li>
          </ul>
        </section>
      </div>
      <footer className="w-full flex justify-center items-center flex-col">
        <button className="w-full bg-linear-to-r from-[#7EBD4F] from-20% to-[#1AAA60] to-61% text-white rounded-lg p-2 font-medium tracking-[3%]">
          Más información
        </button>
        
        <a href="" className="text-xs mt-2 text-[#234670] font-medium tracking-[1]">Reservar</a>
      </footer>
    </article>
  );
}
