import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Debe de especificar el query de búsqueda' });
}


// El archivo index.ts es un controlador de API en Next.js.
// Maneja solicitudes HTTP y responde con un mensaje JSON que indica que se debe especificar el término de búsqueda.