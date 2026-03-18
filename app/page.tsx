"use client";
import Menu from "./components/Menu";
import Header from "./components/Header";
import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

export default function Home() {
  const [open, isOpen] = useState(false);
  return (
    <>
      <Header open={open} setOpen={isOpen} />
      <main
        className={`${open ? "blur-xs" : ""} bg-[url(/bg/fondo.webp)] bg-no-repeat  w-full h-full pl-6 pr-6 flex flex-col gap-4`}
      >
        <p className="text-white font-light text-center">
          <span className="font-medium">Invierte</span> con estrategia
        </p>
        <Form/>
        <Card/>
      </main>
      {<Menu open={open} setOpen={isOpen} />}
    </>
  );
}
