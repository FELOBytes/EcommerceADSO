import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
      // Obtiene las propiedades iniciales del documento (por ejemplo, los estilos globales)
    const initalProps = await Document.getInitialProps(ctx)

    return initalProps
  }

  render() {
    return (
      <Html>
        <Head>
           {/* Agrega una fuente de Google Fonts al encabezado */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
          />
        </Head>
        <body>
            {/* Renderiza el contenido principal de la aplicación */}
          <Main />
     {/* Incluye los scripts necesarios (por ejemplo, bundles de JavaScript) */}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

// Obtención de propiedades iniciales:
// El método estático getInitialProps se utiliza para obtener las propiedades iniciales del documento (por ejemplo, los estilos globales).
// Encabezado (Head):
// Se agrega una fuente de Google Fonts al encabezado utilizando el componente link.
// Contenido principal y scripts:
// El componente Main renderiza el contenido principal de la aplicación.
// El componente NextScript incluye los scripts necesarios (por ejemplo, bundles de JavaScript).