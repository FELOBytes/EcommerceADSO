// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Importación de tipos para manejar solicitudes y respuestas en una API de Next.js
import type { NextApiRequest, NextApiResponse } from "next";
// Definición del tipo de datos para la respuesta
type Data = {
  name: string;
};
     // Función controladora para la ruta de la API
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });     // Envío de una respuesta JSON con el nombre "John Doe"
}

