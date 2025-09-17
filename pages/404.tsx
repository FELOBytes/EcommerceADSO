import { Typography, Box } from '@mui/material';
import { ShopLayout } from '../components/layouts/ShopLayout';

const Custom404 = () => {
  return (
    <ShopLayout title='Pagina no encontrada' pageDescription='No hay nada que mostrar'>
       {/* Contenedor centralizado */}
      <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
         {/* Título 404 */}
        <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
        <Typography marginLeft={2}>No se encuentra lo que estas buscando</Typography>
      </Box>
    </ShopLayout >
  )
}

export default Custom404

// Contenedor centralizado:
// Se utiliza el componente Box para crear un contenedor centralizado.
// El contenido se alinea verticalmente en el centro (justifyContent='center' y alignItems='center').
// La altura del contenedor se ajusta al 100% de la vista menos 200 píxeles (height='calc(100vh - 200px)').
// Título 404 y mensaje de no encontrada:
// Se utiliza el componente Typography para mostrar el título “404” con un estilo personalizado (fuente, tamaño y peso).
// Se muestra un mensaje indicando que no se encuentra lo que el usuario está buscando.

