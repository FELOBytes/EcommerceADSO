import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import { FC } from "react"

// Props: El componente ItemCounter no recibe ninguna propiedad en este caso.

interface Props {

}

export const ItemCounter: FC<Props> = () => {
  return (
    <Box display='flex' alignItems='center'>
        {/* Botón para restar */}
      <IconButton>
        <RemoveCircleOutline />
      </IconButton>
            {/* Contador de cantidad (actualmente fijo en 1) */}
      <Typography sx={{ width: 40, textAlign: 'center' }}>1</Typography>
        {/* Botón para sumar */}
      <IconButton>
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
