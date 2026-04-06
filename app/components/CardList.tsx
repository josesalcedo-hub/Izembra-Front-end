import Card from "./Card";
export default function CardList() {
  return (
    <section
      className="w-full lg:w-[90%] h-full flex flex-col
     gap-8 mt-16 "
    >
      <fieldset className="border-t border-white lg:mt-38 relative">
        <legend className="mx-auto px-2 text-white lg:text-3xl font-light lg:tracking-[1.6px]">
          Oportunidades de <span className="font-medium">inversión.</span>
        </legend>
      </fieldset>{" "}
      <div className="w-full flex flex-col justify-center items-center lg:flex-row gap-4 lg:gap-6">
        <Card />
      </div>
    </section>
  );
}
