import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Creación del tema de luz (light theme)
export const lightTheme = createTheme({
  palette: {
    mode: 'light',  // Modo de color claro
    primary: {
      main: '#1E1E1E',  // Color principal
    },
    secondary: {
      main: '#30d680',   // Color secundario
    },
    info: {
      main: '#fff',   // Color de información
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',  // Sin subrayado para los enlaces
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,    // Sin sombra
        position: 'fixed',   // Posición fija en la parte superior
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',   // Fondo blanco
          height: 60,       // Altura de la barra de navegación
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,    // Tamaño de fuente para h1
          fontWeight: 600,  // Peso de fuente para h1
        },
        h2: {
          fontSize: 20,   // Tamaño de fuente para h2
          fontWeight: 400,   // Peso de fuente para h2
        },
        subtitle1: {
          fontSize: 18,    // Tamaño de fuente para subtítulos
          fontWeight: 600,    // Peso de fuente para subtítulos
        }, 
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',  // Estilo de botón: contenido
        size: 'small',       // Tamaño pequeño
        disableElevation: true,   // Sin elevación
        color: 'info',       // Color de información
      },
      styleOverrides: {
        root: {
          textTransform: 'none',   // Sin transformación de texto 
          boxShadow: 'none',  // Sin sombra
          borderRadius: 10,   // Bordes redondeados
          ':hover': {
            backgroundColor: 'rgba(0,0,0,0.05)',   // Color de fondo 
            transition: 'all 0.3s ease-in-out',    // Transición suave
          },
        },
      },
    },

    MuiCard: {
      defaultProps: {
        elevation: 0,   // Sin sombra
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',  // Sombra 
          borderRadius: '10px',   // Bordes redondeados
        },
      },
    },
  },
});


// Paleta de colores (palette):
// mode: 'light': Define el modo de color claro.
// primary: Establece el color principal.
// secondary: Define el color secundario.
// info: Define el color para elementos informativos.
// Componentes personalizados (components):
// MuiLink: Sin subrayado para los enlaces.
// MuiAppBar: Barra de navegación con fondo blanco y posición fija en la parte superior.
// MuiTypography: Estilos de fuente para encabezados y subtítulos.
// MuiButton: Botones con estilo de contenido, sin sombra, bordes redondeados y transición suave al pasar el ratón.
// MuiCard: Tarjetas sin sombra y con bordes redondeados.