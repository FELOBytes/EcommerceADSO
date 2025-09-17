export interface IProduct { // Definición de la interfaz IProduct
  _id: string;            // Definición de la interfaz IProduct
  description: string;    // Descripción del producto
  images: string[];       // Arreglo de rutas a las imágenes del producto
  inStock: number;        // Cantidad disponible en stock
  price: number;          // Precio del producto
  sizes: ISize[];         // Tallas válidas para el producto (por ejemplo, 'XS', 'S', etc.)
  slug: string;           // Identificador único del producto (puede ser una URL amigable)
  tags: string[];         // Etiquetas asociadas al producto
  title: string;          // Título del producto
  type: IType;            // Tipo de producto (por ejemplo, 'camisetas', 'buzos', 'gorras')
  gender: 'hombre' | 'mujer' | 'unisex';  // Género al que está dirigido el producto

  createdAt: string;    // Fecha de creación del producto
  updatedAt: string;    // Fecha de última actualización del producto
}
// Definición de los tipos ISize e IType
export type ISize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | '3XL';
export type IType = 'camisetas' | 'buzos' | 'gorras';
