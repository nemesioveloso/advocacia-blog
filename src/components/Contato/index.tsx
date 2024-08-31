import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'

export const Contato = () => {
  const schedule = [
    { day: 'Segunda', hours: '8:00am – 18:00pm' },
    { day: 'Terça', hours: '8:00am – 18:00pm' },
    { day: 'Quarta', hours: '8:00am – 18:00pm' },
    { day: 'Quinta', hours: '8:00am – 18:00pm' },
    { day: 'Sexta', hours: '8:00am – 18:00pm' },
  ]
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const validateFields = () => {
    const newErrors = {
      name: values.name.trim() === '',
      email: !/\S+@\S+\.\S+/.test(values.email),
      phone: values.phone.trim() === '',
      message: values.message.trim() === '',
    }
    setErrors(newErrors)
    return Object.values(newErrors).every((error) => !error)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validateFields()) {
      console.log('Formulário válido', values)
      // Envie os dados aqui
    } else {
      console.log('Formulário inválido')
    }
  }

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ background: '#f7f7f7' }}
      p={4}
    >
      <Grid
        container
        spacing={1}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={5} lg={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" color="text.primary">
                Contate-nos
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                error={errors.name}
                name="name"
                label="Nome"
                value={values.name}
                onChange={handleChange}
                helperText={errors.name ? 'Nome é obrigatório.' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                error={errors.email}
                name="email"
                label="E-mail"
                value={values.email}
                onChange={handleChange}
                helperText={errors.email ? 'Email é invalido.' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                error={errors.phone}
                name="phone"
                label="Telefone"
                value={values.phone}
                onChange={handleChange}
                helperText={errors.phone ? 'Telefone é obrigatório.' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                error={errors.message}
                name="message"
                label="Assunto/Detalhes"
                multiline
                rows={4}
                value={values.message}
                onChange={handleChange}
                helperText={
                  errors.message ? 'Assunto/Detalhes é obrigatório.' : ''
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                label="Eu permito que este site armazene meu envio para que eles possam responder à minha pergunta."
                control={<Checkbox color="primary" />}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={5}>
          <Paper
            sx={{
              padding: 3,
              background: '#dedede',
              textAlign: 'center',
              marginTop: { xs: 5 },
            }}
          >
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  color="text.primary"
                >
                  Entre em contato
                </Typography>
                <Button
                  variant="text"
                  startIcon={<Icon color="primary">email</Icon>}
                >
                  rafael@email.com
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  color="text.primary"
                >
                  Localização
                </Typography>

                <Button
                  variant="text"
                  startIcon={<Icon color="primary">location_on</Icon>}
                >
                  Teresina, PI BR
                </Button>
              </Grid>

              {/* Horário de Funcionamento */}
              <Grid item xs={12}>
                <TableContainer
                  sx={{
                    maxWidth: 500,
                    margin: 'auto',
                    mt: 2,
                    mb: 2,
                    backgroundColor: 'transparent',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ m: 2 }}>
                    Horário de Funcionamento
                  </Typography>
                  <Table aria-label="simple table">
                    <TableBody>
                      {schedule.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {item.day}
                          </TableCell>
                          <TableCell align="right">{item.hours}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
