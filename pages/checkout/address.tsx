import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { useRouter } from 'next/router';

const AddressPage = () => {
  const router = useRouter();

  return (
    <ShopLayout title={"Dirección"} pageDescription={"confirmar dirección de destino"}>
      <Typography variant="h1" component='h1'>Dirección</Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>

        <Grid item xs={12} sm={6}>
          {/* Campo de entrada para el nombre */}
          <TextField label='Nombre' variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
           {/* Campo de entrada para el apellido */}
          <TextField label='Apellido' variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='Dirección' variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Dirección (2 opcional)' variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='Código postal' variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Ciudad' variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
            {/* Selector desplegable para el país */}
          <FormControl fullWidth>
            <Select
              variant="filled"
              label='País'
              value={1}
            >
              <MenuItem value={1}>Colombia</MenuItem>
              <MenuItem value={1}>México</MenuItem>
              <MenuItem value={1}>Argentina</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Campo de entrada para el teléfono */}
          <TextField label='Teléfono' variant="filled" fullWidth />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
         {/* Botón para revisar el pedido */}
        <Button color="secondary" className="circular-btn" size="large" onClick={() => router.push('/checkout/summary')}>
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  )
}

export default AddressPage

// Campos de entrada:
// Los campos de entrada para “Nombre”, “Apellido”, “Dirección”, “Dirección (2 opcional)”, “Código postal”, “Ciudad” y “Teléfono” están definidos utilizando el componente TextField.
// Cada campo tiene una etiqueta (label) y utiliza la variante “filled” para mostrar un fondo con relleno.
// Selector desplegable para el país:
// Utilizamos el componente Select dentro de un FormControl para permitir al usuario seleccionar su país.
// Los países disponibles se muestran como elementos de menú (MenuItem).
// Botón para revisar el pedido:
// El botón “Revisar pedido” está definido utilizando el componente Button.
