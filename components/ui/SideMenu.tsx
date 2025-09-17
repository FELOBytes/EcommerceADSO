import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined, WcOutlined } from "@mui/icons-material"


export const SideMenu = () => {
  return (
    <Drawer
      open={false}   // El cajón está cerrado por defecto
      anchor='right'  // Se encuentra en el lado derecho
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}  // Estilos del cajón
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
         {/* Contenido del cajón */}

        <List>
         {/* Barra de búsqueda */}
          <ListItem>
            <Input
              type='text'
              placeholder="Buscar..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                  >
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>
           {/* Opciones de usuario */}

          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText primary={'Perfil'} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={'Mis Ordenes'} />
          </ListItem>

                 {/* Categorías (visible en pantallas pequeñas) */}
          <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
            <ListItemIcon>
              <MaleOutlined />
            </ListItemIcon>
            <ListItemText primary={'Hombres'} />
          </ListItem>

          <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
            <ListItemIcon>
              <FemaleOutlined />
            </ListItemIcon>
            <ListItemText primary={'Mujeres'} />
          </ListItem>

          <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
            <ListItemIcon>
              <WcOutlined />
            </ListItemIcon>
            <ListItemText primary={'Unisex'} />
          </ListItem>

                 {/* Acciones de autenticación */}
          <ListItem button>
            <ListItemIcon>
              <VpnKeyOutlined />
            </ListItemIcon>
            <ListItemText primary={'Ingresar'} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary={'Salir'} />
          </ListItem>


         {/* Sección de administración */}
          <Divider />
          <ListSubheader>Admin Panel</ListSubheader>

          <ListItem button>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={'Productos'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={'Ordenes'} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AdminPanelSettings />
            </ListItemIcon>
            <ListItemText primary={'Usuarios'} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}

// Contenido del cajón:
// Se utiliza el componente List para agrupar las opciones.
// Se muestran opciones de búsqueda, perfil, órdenes, categorías, autenticación y administración.
// Categorías (visible en pantallas pequeñas):
// Las opciones de categorías están ocultas en pantallas grandes (sm) y visibles en pantallas pequeñas (xs).
// Sección de administración:
// Se muestra una sección separada para las opciones de administración.
// Se utiliza Divider para separar visualmente las secciones.