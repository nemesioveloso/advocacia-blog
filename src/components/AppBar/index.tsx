import * as React from 'react'

import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Theme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { SocialMedia } from '../SocialMedia'

const drawerWidth = 240
const navItems = [
  { label: 'INíCIO', id: 'inicio' },
  { label: 'SOBRE', id: 'sobre' },
  { label: 'SERVIÇOS', id: 'servicos' },
  { label: 'CONTATO', id: 'contato' },
]

export default function DrawerAppBar() {
  const medio = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const handleNavigation = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    if (medio) {
      setMobileOpen(true) // Fechar o drawer no mobile após clicar
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RAFAEL FONSECA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => handleNavigation(item.id)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    typeof window !== 'undefined' ? () => window.document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: '#131921' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              lg={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                component="div"
                ml={5}
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'none', md: 'block' },
                }}
              >
                RAFAEL FONSECA
              </Typography>
              <SocialMedia />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              lg={4}
              sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
            >
              <Grid container spacing={1}>
                {navItems.map((item) => (
                  <Grid item key={item.id}>
                    <Button
                      sx={{
                        color: '#f7f7f7',
                        '&:hover': {
                          border: '1px solid #f7f7f7',
                        },
                      }}
                      variant="text"
                      onClick={() => handleNavigation(item.id)}
                    >
                      {item.label}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#303030f7',
              color: '#f7f7f7',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
