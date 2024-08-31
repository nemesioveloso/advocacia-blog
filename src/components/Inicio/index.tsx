import { Box, Button, Typography } from '@mui/material'
import imgAdv from '../../imagens/adv.jpeg'
import imgAdv2 from '../../imagens/advPerfil.png'

export const Inicio = () => {
  const handleNavigation = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${imgAdv})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '100%',
          backgroundImage: `url(${imgAdv2})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: {
            xs: 'bottom',
            sm: 'center right',
            md: 'center right',
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          width: '80%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
          Rafael Fonseca
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Advogado
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Especialistas em Direito Médico, oferecendo consultoria jurídica e
          suporte em ética médica, responsabilidade civil, e direitos dos
          pacientes.
        </Typography>
        <Button
          onClick={() => handleNavigation('servicos')}
          variant="contained"
          sx={{
            backgroundColor: '#ffffff',
            fontWeight: 'bold',
            color: 'black',
            '&:hover': {
              backgroundColor: '#dedede',
              color: 'black',
            },
          }}
        >
          Ver Serviços
        </Button>
      </Box>
    </Box>
  )
}
