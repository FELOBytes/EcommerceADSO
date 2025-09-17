
import { FC } from 'react'
import Head from 'next/head'
import { Navbar, SideMenu } from '../ui';



// Props: El componente ShopLayout recibe varias propiedades:
// children: El contenido que se renderizará dentro del diseño.
// title: El título de la página (se muestra en la pestaña del navegador).
// pageDescription: Una descripción de la página para metadatos (por ejemplo, para motores de búsqueda).
// imageFullUrl (opcional): Una URL completa para una imagen (se utiliza en los metadatos de Open Graph).

interface Props {
  children: any;
  title: string;
  pageDescription: string;
  imageFullUrl?: string
}

export const ShopLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
    {/* Sección Head: El componente <Head> de Next.js se utiliza para configurar metadatos de la página. Incluye:
El título de la página (<title>).
Una descripción (<meta name='description'>) para motores de búsqueda.
Metadatos de Open Graph (<meta name='og:title'> y <meta name='og:description'>). */}
      <Head>
        <title>{title}</title>
        <meta name='description' content={pageDescription} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />
        {
          imageFullUrl && (
            <meta name='og:title' content={imageFullUrl} />
          )
        }
      </Head>

      {/* Navegación:
El componente SideMenu representa un menú lateral (TODO: Implementar esto).
El componente Navbar representa la barra de navegación superior. */}
      <nav>
        {/* TODO: Navbar */}
        <SideMenu />
        <Navbar />

        {/* Contenido principal:
El contenido principal está envuelto en un elemento <main>.
Tiene un ancho máximo de 1440px, centrado horizontalmente y con relleno en los lados.
El contenido real se renderiza utilizando la prop {children}. */}
      </nav>
      {/* TODO: Sidbar */}
      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px'

      }}>
        {children}
      </main>
      {/* TODO: Footer */}
      <footer>
        {/* TODO: custom Footer */}
        
      </footer>
    </>
  )
}
