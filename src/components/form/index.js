import React, { useState } from 'react'
import { Box, Button, Card, CardContent, Grid, TextField, Typography, MenuItem } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  cardEmpleado: {
    maxWidth: '500px',
    margin: 'auto',
    marginTop: '30%',
    paddingTop: '25px',
    borderRadius: '15px'
  },
  empleadoTitle: {
    textAlign: 'center',
    paddingTop: '20px'
  },
  camposTexto: {
    paddingBottom: '9px',
    margin: 'auto'
  },
  cardButton: {
    content: ''
  },
  navBuscarEmpleado: {
    maxWidth: '500px',
    margin: 'auto',
    backgroundColor: '#FEFBEA'
  }
})
const Formulario = ({ guardarEmpleado, props }) => {
  const [errorMessage, setErrorMessage] = useState(false)

  // const [campoVacio, setCampoVacio] = useState('')

  const [empleado, setEmpleado] = useState({
    nombre: '',
    apellido: '',
    rol: '',
    estado: ''
  })
  const handleChange = (event) => {
    const { value, name } = event.target
    setEmpleado({ ...empleado, [name]: value })
  }
  const onSave = () => {
    if (empleado.nombre !== '' && empleado.apellido !== '' && empleado.rol !== '' && empleado.estado !== null) {
      guardarEmpleado([...props, empleado])
      setEmpleado({ nombre: '', apellido: '', rol: '', estado: '' })
      setErrorMessage(false)
    } else {
      setErrorMessage(true)
    }
  }
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card variant='outlined' className={classes.cardEmpleado} sx={{ borderRadius: '15px', backgroundColor: '#FEFBEA' }}>
        <Typography className={classes.empleadoTitle} variant='h3'>Empleado</Typography>
        <CardContent>
          <Box component='form'>
            <Grid container>
              <Grid item sm={12}>
                <TextField
                  id='nombre'
                  name='nombre'
                  label='nombre'
                  type='text'
                  variant='outlined'
                  fullWidth
                  required
                  className={classes.camposTexto}
                  error={errorMessage && empleado.nombre === ''}
                  onChange={handleChange}
                  value={empleado.nombre}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id='apellido'
                  name='apellido'
                  label='apellido'
                  type='text'
                  variant='outlined'
                  fullWidth
                  className={classes.camposTexto}
                  onChange={handleChange}
                  error={errorMessage && empleado.apellido === ''}
                  value={empleado.apellido}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id='rol'
                  name='rol'
                  label='rol'
                  type='text'
                  variant='outlined'
                  fullWidth
                  required
                  className={classes.camposTexto}
                  onChange={handleChange}
                  error={errorMessage && empleado.rol === ''}
                  value={empleado.rol}
                />
                {empleado.rol === ''}
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id='estado'
                  name='estado'
                  label='estado'
                  variant='outlined'
                  fullWidth
                  required
                  select
                  helperText='Ingrese datos'
                  className={classes.camposTexto}
                  onChange={handleChange}
                  error={errorMessage && empleado.estado === ''}
                  value={empleado.estado}
                >
                  <MenuItem value='Activo'>Activo</MenuItem>
                  <MenuItem value='Inactivo'>Inactivo</MenuItem>
                </TextField>
                {errorMessage && (<p className='error'> {errorMessage} </p>)}
              </Grid>
              <Grid item sm={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button type='button' variant='outlined' sx={{ mt: 2 }} className={classes.cardButton} onClick={onSave}>Enviar</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}

export default Formulario
