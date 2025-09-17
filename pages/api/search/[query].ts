import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Product } from '../../../models';
import { IProduct } from '../../../interfaces';

type Data = { name: string } | IProduct[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return searchProducts(req, res);
    default:
      return res.status(400).json({
        name: 'Bad request',
      });
  }
}
const searchProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  let { query = '' } = req.query;    // Obtención del valor del parámetro 'query'
 
  if (query.length === 0) {
    return res.status(400).json({
      name: 'Debe de especificar la búsqueda',    // Respuesta si no se especifica una búsqueda
    });
  }

  query = query.toString().toLowerCase();   // Convertir la búsqueda a minúsculas

  await db.connect();         // Conexión a la base de datos
  const products = await Product.find({
    $text: { $search: query },    // Consulta de productos que coinciden con la búsqueda
  })
    .select('title images price inStock slug -_id')  // Selecciona solo ciertos campos
    .lean();      // Devuelve los resultados como objetos simples (sin métodos de Mongoose)
  await db.disconnect();

  return res.status(200).json(products);       // Respuesta con los datos de los productos
};  
