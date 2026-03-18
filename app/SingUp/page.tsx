"use client";
import { useState } from "react";
import Header from "../components/Header";
import SingUp from "../components/SingUp";
import Menu from "../components/Menu";
export default function Sing_Up() {
  const [open, isOpen] = useState(false);

  return (
    <>
      <Header open={open} setOpen={isOpen} />
      <main>
        <SingUp />
      </main>
      {<Menu open={open} setOpen={isOpen} />}
    </>
  );
}
