import NextLink from 'next/link'
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { initialData } from "../../database/products"
import { ItemCounter } from '../ui'
import { FC } from 'react'

// Datos de productos en el carrito (pueden provenir de una API o base de datos)
const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  editable?: boolean
}

export const CartList: FC<Props> = ({ editable = false }) => {
  return (
    <>
      {
        productInCart.map(product => (
          <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
            <Grid item xs={3}>
                 {/* Enlace a la página del producto */}
              <NextLink href='/product/slug' passHref legacyBehavior>
                <Link>
                  <CardActionArea>
                     {/* Imagen del producto */}
                    <CardMedia
                      image={`/products/${product.images[0]}`}
                      component='img'
                      sx={{ borderRadius: '5px' }}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display='flex' flexDirection='column'>
                  {/* Título del producto */}
                <Typography variant='body1'>{product.title}</Typography>
                 {/* Talla (puede ser dinámica según el producto) */}
                <Typography variant='body1'>Talla: <strong>M</strong></Typography>
                {/* TODO: Condicional */}
                {/* Mostrar contador de cantidad si es editable, de lo contrario mostrar cantidad fija */}
                {
                  editable ? <ItemCounter /> : <Typography variant='h5'>3 productos</Typography>
                }

              </Box>
            </Grid>
            <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
               {/* Precio del producto */}
              <Typography variant='subtitle1'>{`$${product.price}`}</Typography>
              {/* Botón de eliminación (solo si es editable) */}
              {
                editable && (
                  <Button color='secondary' variant='text'>
                    Eliminar
                  </Button>
                )
              }

            </Grid>

          </Grid>
        ))
      }
    </>
  )
}
