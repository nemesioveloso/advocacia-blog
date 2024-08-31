import { Box } from '@mui/material'
import { Inicio } from '../../components/Inicio'
import { Sobre } from '../../components/Sobre'
import { Servicos } from '../../components/Servicos'
import { Contato } from '../../components/Contato'

export const Home = () => {
  return (
    <Box>
      <Box id="inicio">
        <Inicio />
      </Box>

      <Box id="sobre">
        <Sobre />
      </Box>

      <Box id="servicos">
        <Servicos />
      </Box>

      <Box id="contato">
        <Contato />
      </Box>
    </Box>
  )
}
