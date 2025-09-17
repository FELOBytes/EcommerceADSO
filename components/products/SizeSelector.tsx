import { FC } from "react"
import { ISize } from "../../interfaces"
import { Box, Button } from "@mui/material";



// Props: El componente SizeSelector recibe dos propiedades:
// - selectedSize (opcional): Representa el tamaño seleccionado actualmente.
// - sizes: Una lista de tamaños disponibles.


interface Props {
  selectedSize?: ISize;
  sizes: ISize[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>

{/* Mapeo de tamaños:
Se utiliza el método map para iterar sobre la lista de tamaños (sizes).
Por cada tamaño, se renderiza un botón (<Button>).
El botón muestra el nombre del tamaño ({size}).
El color del botón cambia según si el tamaño está seleccionado o no (color={selectedSize === size ? 'primary' : 'info'}). */}
      {
        sizes.map(size => (
          <Button
            key={size}
            size="small"
            color={selectedSize === size ? 'primary' : 'info'}
          >
            {size}   {/* Muestra el nombre del tamaño */}
          </Button>
        ))
      }
    </Box>
  )
}
