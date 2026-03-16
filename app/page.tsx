
import Card from "./components/Card";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[url(/bg/fondo.webp)] bg-no-repeat  w-full h-full pl-6 pr-6">
        <p className="text-white font-light text-center">
          <span className="font-medium">Invierte</span> con estrategia
        </p>
      </main>
    </>
  );
}
