import NextLink from 'next/link'
import { Box, Link, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'

const EmptyPage = () => {
  return (                      // Utiliza el componente ShopLayout para establecer el diseño de la página
    <ShopLayout title='Carrito de compras vacio' pageDescription='Carrito de compras sin productos'>
      {/* Contenedor principal */}
      <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
         {/* Icono de carrito vacío */}
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        {/* Contenedor de texto */}
        <Box display='flex' flexDirection='column' alignItems='center'>
          {/* Mensaje de carrito vacío */}
          <Typography>Su carrito de compras está vació</Typography>
           {/* Enlace para regresar */}
          <NextLink href='/' passHref legacyBehavior>
            <Link typography='h4' color='secondary'>
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )


//   Definición de la página EmptyPage: Esta función es un componente funcional que representa la página de carrito de compras vacío.
// Utilización de ShopLayout: El componente ShopLayout se utiliza para establecer el diseño general de la página. Se le pasa el título “Carrito de compras vacío” y una descripción adicional.
// Contenedor principal: El contenedor principal utiliza flexbox para centrar su contenido verticalmente y horizontalmente. La dirección de flexión cambia según el tamaño de la pantalla (columna en dispositivos móviles y fila en pantallas más grandes).
// Icono de carrito vacío: Se muestra un ícono de carrito de compras vacío utilizando el componente RemoveShoppingCartOutlined de Material-UI.
// Contenedor de texto: Este contenedor alberga el mensaje “Su carrito de compras está vacío” y un enlace para regresar a la página principal.
// Enlace para regresar: El componente NextLink crea un enlace que redirige al usuario a la página principal ('/'). El texto del enlace se muestra en un tamaño de fuente grande (h4) y utiliza el color secundario definido en el tema.
}

export default EmptyPage