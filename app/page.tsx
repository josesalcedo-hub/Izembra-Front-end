import LayoutWrapper from "./components/LayoutWrapper";
import Form from "./components/Form";
import CardList from "./components/CardList";
import Section from "./components/Section";
import Invercolombia from "./components/Invercolombia";

export default async function Home() {
  return (
    <LayoutWrapper>
      <section className="w-full h-screen bg-[url(/bg/Banner.png)] bg-no-repeat bg-cover flex flex-col items-end m-0 p-0">
        <div className="lg:p-[0rem_6rem_0rem_0rem]">
          <p className="text-white font-medium lg:text-6xl lg:mt-40 lg:tracking-[1.6px] ">
            <span className="font-bold">Invierte</span>
            <br /> con estrategia
          </p>
          <p className="text-white text-lg lg:p-[0rem_8rem_0rem_0rem] leading-6">
            Cartagena, crecimiento patrimonial,
            <br /> respaldado por la experiencia.
          </p>
        </div>
        <div className="w-full flex justify-center mt-44">
          <div className="w-[80%]">
            <Section />
          </div>
        </div>
      </section>
      <Form/>
      <Invercolombia/>
      <CardList />
    </LayoutWrapper>
  );
}
