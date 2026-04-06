export interface SendDataDTO {
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
}

export const SendData = async (payload: SendDataDTO) => {
  try {
    const response = await fetch("http://localhost:3001/api/SingUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Error al enviar los datos");
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error en sendData:", error);
    throw error;
  }
};

export const Login = async (payload: object) => {
  try {
    const response = await fetch("http://localhost:3001/api/singIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: "include",
    });

   if (!response.ok) {
  // Esto te dirá qué dice el servidor (ej: "Usuario no encontrado" o "Ruta no existe")
  const errorData = await response.json().catch(() => ({})); 
  console.error("Detalle del error del servidor:", errorData);
  throw new Error(errorData.message || "Error con los datos");
}

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error en sendData:", error);
    throw error;
  }
};
