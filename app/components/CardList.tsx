import Card from "./Card";
export default function CardList() {
  return (
    <section
      className="w-full h-full flex flex-col
     gap-8 bg-white pb-8"
    >
      <fieldset className="border-0 lg:mt-28 relative">
        <legend className="mx-auto px-2 text-[#005f6a] lg:text-4xl lg:text-center font-light lg:tracking-[1.6px]">
          OPORTUNIDADES <br/> DE <span className="font-medium">INVERSION.</span>
        </legend>
      </fieldset>{" "}
      <div className="w-full flex flex-col justify-center items-center lg:flex-row gap-4 lg:gap-6 flex-wrap p-4 ">
        <Card />
      </div>
    </section>
  );
}
