import { Grid, Typography } from '@mui/material'
import React from 'react'

export function OrderSummary() {
  return (
    <Grid container>
        {/* Muestra la cantidad total de productos en el resumen del pedido */}
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>3. Productos</Typography>
      </Grid>
        {/* Muestra el costo total antes de aplicar el IVA */}
      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$${207.000}`}</Typography>
      </Grid>
        {/* Muestra el monto del impuesto al valor agregado (IVA) calculado como el 19% del subtotal */}
      <Grid item xs={6}>
        <Typography>Iva (19%)</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$${39.330}`}</Typography>
      </Grid>
        {/* Muestra el costo total final, incluyendo el IVA */}
      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant='subtitle1'>Total:</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display='flex' justifyContent='end'>
        <Typography variant='subtitle1'>{`$${246.300}`}</Typography>
      </Grid>
    </Grid>
  )
}
