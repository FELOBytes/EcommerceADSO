
import NextLink from 'next/link'
import { ShopLayout } from '../../components/layouts'
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link } from '@mui/material'

import { CartList, OrderSummary } from '../../components/cart'


const SummaryPage = () => {
  return (
    <ShopLayout title={'resumen de orden'} pageDescription={'Resumen de la orden'}>
            {/* Título de la página */}
      <Typography component='h1' variant='h1'>Resumen de la orden</Typography>

      <Grid container>
        <Grid item xs={12} sm={7}> 
          {/* CartList */}   {/* Lista de productos en el carrito */}
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
           {/* Tarjeta de resumen */}
          <Card className='summary-card'>
            <CardContent>       
              {/* Título del resumen */}
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my: 2 }} />
              {/* Sección de dirección de entrega */}
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Direccion de entrega</Typography>
                {/* Enlace para editar la dirección */}
                <NextLink href='/checkout/address' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>
                               {/* Detalles de la dirección */}
              <Typography>Felipe Lopez</Typography>
              <Typography>Carrera 68B</Typography>
              <Typography>Rionegro </Typography>
              <Typography>Colombia</Typography>
              <Typography>+57 311 311 0984</Typography>

              <Divider sx={{ my: 1 }} />
               {/* Enlace para editar el carrito */}
              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>
                          {/* Resumen de la orden */}
              <OrderSummary />
                                      {/* Botón para confirmar la orden */}
              <Button color='secondary' className='circular-btn' fullWidth>
                Confirmar Orden
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage


// Título de la página:
// El componente Typography muestra el título “Resumen de la orden”.
// Lista de productos en el carrito:
// Se utiliza el componente CartList para mostrar los productos en el carrito.
// Tarjeta de resumen:
// La tarjeta de resumen contiene detalles importantes:
// Título “Resumen (3 productos)”.
// Sección de dirección de entrega con un enlace para editar la dirección.
// Detalles de la dirección (nombre, dirección, ciudad, país y teléfono).
// Enlace para editar el carrito.
// Resumen de la orden (probablemente el total y otros detalles).
// Botón para confirmar la orden.