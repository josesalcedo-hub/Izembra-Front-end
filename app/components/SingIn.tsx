"use client";
import { useState } from "react";

export default function SingIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <main className="bg-[url(/bg/fondo.webp)]">

    </main>
  )
}
