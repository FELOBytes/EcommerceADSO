import { Box, Grid, Typography, Button, Chip } from "@mui/material";
import { ShopLayout } from "../../components/layouts"
import { ProductSlidesShow, SizeSelector } from "../../components/products";
import { initialData } from '../../database/products';
import { ItemCounter } from "../../components/ui";


const product = initialData.products[0] 

const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
           {/* Slides de imágenes del producto */}
          <ProductSlidesShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* titulos */}
            <Typography variant="h1" component='h1'>{product.title}</Typography>
            <Typography variant="subtitle1" component='h2'>{`$${product.price}`}</Typography>
            {/* cantidad */}
            <Box sx={{ my: 2 }} >
              <Typography variant="subtitle2">Cantidad</Typography>
              {/* itemCounter */}
              <ItemCounter />
              <SizeSelector
                // selectedSize={product.sizes[0]} 
                sizes={product.sizes} />
            </Box>
            <Button color="secondary" className='circular-btn'>
              Agregar a carrito
            </Button>
            {/* <Chip label='No hay disponibles' color='error' variant='outlined' /> */}
            {/* Descripcion */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default ProductPage

// Slides de imágenes del producto:
// Se utiliza el componente ProductSlidesShow para mostrar las imágenes del producto.
// Títulos y precio:
// Se muestran el título y el precio del producto utilizando los componentes Typography.
// Cantidad y selector de tallas:
// Se muestra la sección de cantidad con un contador (ItemCounter) y un selector de tallas (SizeSelector).
// Botón para agregar al carrito:
// El botón “Agregar a carrito” permite al usuario añadir el producto al carrito.
// Descripción del producto:
// Se muestra la descripción del producto utilizando los componentes Typography.