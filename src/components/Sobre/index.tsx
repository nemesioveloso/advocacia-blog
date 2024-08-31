import { Button, Grid, Typography } from '@mui/material'
import imgAdv from '../../imagens/adv.jpeg'

export const Sobre = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ background: '#f7f7f7' }}
      p={4}
    >
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Typography variant="h6" color="text.secondary">
          Sua saúde, nosso compromisso jurídico
        </Typography>
        <Typography variant="body2" color="text.secondary">
          No escritório Rafael Fonseca, nos dedicamos à proteção dos direitos na
          área da saúde. Localizado em Place, oferecemos serviços jurídicos
          especializados em direito médico, hospitalar e bioética. Nosso
          compromisso é assegurar a justiça para profissionais de saúde e
          pacientes, garantindo que suas necessidades e direitos sejam sempre
          atendidos.
        </Typography>

        <Button size="small">Entre em contato</Button>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <img
          style={{ borderRadius: '6px' }}
          height={350}
          src={imgAdv}
          alt="advogados"
        />
      </Grid>
    </Grid>
  )
}
