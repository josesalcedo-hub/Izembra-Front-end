import LayoutWrapper from "./components/LayoutWrapper";
import Form from "./components/Form";
import CardList from "./components/CardList";

export default async function Home() {
  return (
    <LayoutWrapper>
      <p className="text-white font-light text-center lg:text-3xl lg:mt-40 lg:tracking-[1.6px]">
        <span className="font-medium">Invierte</span> con estrategia
      </p>
      <Form />
      <CardList/>
    </LayoutWrapper>
  );
}
