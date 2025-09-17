import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedDatabase } from '../../database';    // Importación de la conexión a la base de datos y la semilla de datos
import { Product } from '../../models';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ name: 'No tienes acceso a esta API' });
  }

  await db.connect();        // Conexión a la base de datos
  await Product.deleteMany();   // Eliminación de todos los registros de productos
  await Product.insertMany(seedDatabase.initialData.products);   // Inserción de datos iniciales desde la semilla

  await db.disconnect();   // Desconexión de la base de datos

  res.status(200).json({ name: 'Proceso realizado correctamente' });
}
