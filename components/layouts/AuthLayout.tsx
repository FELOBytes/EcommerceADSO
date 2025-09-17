import { Box } from '@mui/material'
import Head from 'next/head'
import React, { FC } from 'react'


// Definición de las propiedades del componente:
// Aquí se define una interfaz llamada Props que especifica las propiedades que el componente AuthLayout puede recibir.
// En este caso, tiene dos propiedades: title (para el título de la página) y children (para el contenido del componente).

interface Props {
  title: string,
  children?: React.ReactNode
}

export const AuthLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
      {/* Contenedor principal: El componente Box se utiliza para crear un contenedor flexible que centra su contenido verticalmente y lo alinea al centro de la pantalla. 
      La altura se calcula como “100vh - 200px”, lo que significa que ocupa el 100% de la altura visible del viewport menos 200 píxeles. El contenido del componente se renderiza dentro de este contenedor. */}
        <Box display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">
          {children}
        </Box>
      </main>
    </>
  )
}
