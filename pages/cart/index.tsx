
import { CartList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'
import { Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const CartPage = () => {   // Esta función es un componente funcional de React que representa la página del carrito de compras.
  const router = useRouter();
  return (
    <ShopLayout title={'carrito'} pageDescription={'carrito de compras de la tienda'}>  
    {/* Utiliza el componente ShopLayout para establecer el título y la descripción de la página. */}
      <Typography component='h1' variant='h1'>Carrito</Typography>
      {/* Se divide en dos columnas utilizando el componente Grid. */}
      <Grid container>
      {/* muestra el componente CartList con la propiedad editable para permitir la edición del carrito. */}
        <Grid item xs={12} sm={7}>
          {/* CartList */}
          <CartList editable />
        </Grid>
        {/* contiene un resumen de la orden: */}
        <Grid item xs={12} sm={5}>
        {/* Utiliza el componente Card con una sección de contenido (CardContent). */}
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Orden</Typography>
              <Divider sx={{ my: 2 }} />
              <OrderSummary />
              {/* Incluye un botón de pago con el texto “Pagar”. */}
              <Button
                color='secondary'
                className='circular-btn'
                fullWidth
                onClick={() => router.push('/checkout/address')}
              >
                Pagar
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default CartPage

// Función CartPage:


// Muestra un encabezado con el texto “Carrito” utilizando el componente Typography.
// Diseño de la página:

// La columna izquierda (xs={12}, sm={7}) 
// La columna derecha (xs={12}, sm={5}) 

// Muestra el título “Orden” con el componente Typography.
// Agrega una línea divisoria con el componente Divider.
// Renderiza el componente OrderSummary.
//
