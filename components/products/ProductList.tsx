import { Grid } from "@mui/material"
import { FC } from "react"
import { IProduct } from "../../interfaces"
import { ProductCard } from "./ProductCard"

// Props: El componente ProductList recibe un objeto 'products' como propiedad.
interface Props {
  products: IProduct[]
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    // El componente Grid de Material-UI se utiliza para crear un contenedor de productos.
    <Grid container spacing={4}>  
      {/* Mapeo de productos:
Se utiliza el método map para iterar sobre la lista de productos (products).
Por cada producto, se renderiza un componente ProductCard.
Se pasa la propiedad key con el valor del slug del producto para ayudar a React a identificar los elementos de manera única.
Se pasa la propiedad product con el objeto de producto correspondiente. */}
      {
        products.map(product => (
          <ProductCard
            key={product.slug}
            product={product}
          />
        ))
      }
    </Grid>
  )
}
