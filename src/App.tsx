import { ToastContainer } from 'react-toastify'
import { Box } from '@mui/material'
import { Router } from './routes/router'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import DrawerAppBar from './components/AppBar'

export const App = () => {
  return (
    <Box className="container" sx={{ minHeight: '100dvh' }}>
      <DrawerAppBar />
      <ToastContainer theme="colored" />
      <Router />
    </Box>
  )
}
