export interface SendDataDTO {
  name: string;
  lastname: string;
  email: string;
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
