import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../interfaces';

// Definición del esquema para los productos
const productSchema = new Schema(
  {
    description: { type: String, required: true, default: '' }, // Descripción del producto
    images: [{ type: String }],                                  // Arreglo de rutas a las imágenes del producto 
    inStock: { type: Number, required: true, default: 0 },      // Cantidad disponible en stock
    price: { type: Number, required: true, default: 0 },        // Precio del producto
    sizes: [
      {
        type: String,
        enum: {
          values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
          message: '{VALUE} no es un tamaño válido',
        },
      },
    ],           // Tallas válidas para el producto
    slug: { type: String, reuqired: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
      type: String,
      enum: {
        values: ['camisetas', 'buzos', 'gorras'],
        message: '{VALUE} no es un tipo válido',
      },
      default: 'camisetas',
    },
    gender: {
      type: String,
      enum: {
        values: ['hombre', 'mujer', 'unisex'],
        message: '{VALUE} no es un genero válido',
      },
      default: 'hombre',
    },
  },
  {
    timestamps: true,           // Agrega campos de fecha de creación y actualización automáticamente
  }
);

 productSchema.index({ title: 'text', tags: 'text' });
// Modelo de datos para los productos
const Product: Model<IProduct> =
  mongoose.models.Product || model('Product', productSchema);

export default Product;
