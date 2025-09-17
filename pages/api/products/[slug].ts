import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Product } from '../../../models';
import { IProduct } from '../../../interfaces';

type Data = { name: string } | IProduct;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getProductBySlug(req, res);   // Manejo de la solicitud GET
    default:
      return res.status(400).json({ name: 'Baq request' });  // Respuesta para otras solicitudes
  }
}

async function getProductBySlug(   
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await db.connect();    // Conexión a la base de datos
  const { slug } = req.query;     // Obtención del valor del parámetro 'slug'
  const product = await Product.findOne({ slug }).lean();     // Consulta del producto por el 'slug'

  await db.disconnect();      // Desconexión de la base de datos

  if (!product) {
    return res.status(404).json({
      name: 'Producto no entrado',   // Respuesta si el producto no existe
    });
  }

  return res.json(product);    // Respuesta con los datos del producto
}
