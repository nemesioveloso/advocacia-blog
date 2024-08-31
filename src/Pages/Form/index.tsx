import { Button, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import { useState } from 'react'

export function Form() {
  const [values, setValues] = useState({
    nome: '',
    endereco: '',
    email: '',
  })

  const [errors, setErrors] = useState({
    nome: false,
    endereco: false,
    email: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const validateFields = () => {
    const newErrors = {
      nome: !values.nome,
      endereco: !values.endereco,
      email: !values.email,
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
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            fullWidth
            error={errors.nome}
            id="outlined-nome"
            name="nome"
            label="Nome"
            value={values.nome}
            onChange={handleChange}
            helperText={errors.nome ? 'Nome é obrigatório.' : ''}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            error={errors.endereco}
            id="outlined-endereco"
            name="endereco"
            label="Endereço"
            value={values.endereco}
            onChange={handleChange}
            helperText={errors.endereco ? 'Endereço é obrigatório.' : ''}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            error={errors.email}
            id="filled-email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            helperText={errors.email ? 'Email é obrigatório.' : ''}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ m: 1 }}>
        Enviar
      </Button>
    </Box>
  )
}
