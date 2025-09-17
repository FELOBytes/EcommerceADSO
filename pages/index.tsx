import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { ShopLayout } from '../components/layouts'
import { ProductList } from '../components/products'

import { initialData } from '../database/products'


export default function Home() {
  return (
    <ShopLayout title={'Ecommerce Sena - Home'} pageDescription={'Encuentra los mejores articulos para tu setup'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Articulos</Typography>

      <ProductList products={initialData.products as any}
      />
    </ShopLayout>
  )
}


// Importaciones:
// Importamos componentes como Card, CardActionArea, CardMedia, Grid y Typography de la biblioteca Material-UI (@mui/material).
// Definición de la función Home:
// La función Home es el componente predeterminado de esta página.
// Devuelve JSX que se renderiza como HTML en el navegador.
// Composición de componentes:
// El componente Home está compuesto por:
// <ShopLayout>: Controla el diseño general de tu sitio de comercio electrónico. Recibe las propiedades title y pageDescription.
// <Typography>: Renderiza elementos de texto (encabezados) con diferentes variantes.
// <ProductList>: Muestra una lista de productos. Recibe la propiedad products.
// Propiedades y datos:
// ShopLayout recibe las propiedades title y pageDescription.
// ProductList recibe la propiedad products, que es un array con datos de productos (initialData.products).
// Conexión a la base de datos:
// El objeto initialData se importa desde '../database/products'. Contiene datos de productos.
// Renderizado:
// El JSX dentro de la declaración return define la estructura de la página de inicio.