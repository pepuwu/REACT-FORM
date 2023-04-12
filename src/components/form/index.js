import React from 'react'

import { Box, Button, Card, CardContent, Grid, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  cardEmpleado: {
    maxWidth: '500px',
    margin: 'auto'
  },
  empleadoTitle: {
    textAlign: 'center',
    color: ' '
  },
  camposTexto: {
    paddingBottom: '9px'
  },
  cardButton: {
    marginLeft: '100%'
  }
})

const Formulario = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit')
  }
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card variant='outlined' className={classes.cardEmpleado}>
            <h1 className={classes.empleadoTitle}>Empleado</h1>
            <CardContent>
              <Box component='form' onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item sm={12}>
                    <TextField
                      id='nombre'
                      label='nombre'
                      type='text'
                      variant='outlined'
                      fullWidth
                      required
                      className={classes.camposTexto}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <TextField
                      id='apellido'
                      label='apellido'
                      type='text'
                      variant='outlined'
                      fullWidth
                      className={classes.camposTexto}
                    />
                  </Grid>
                  <Grid item sm={12}>

                    <TextField
                      id='rol'
                      label='rol'
                      type='text'
                      variant='outlined'
                      helperText='Ingrese datos'
                      fullWidth
                      className={classes.camposTexto}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Button type='submit' variant='outlined' sx={{ mt: 2 }} className={classes.cardButton}>Enviar</Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Box component='form'>
            <TextField
              id='search-input'
              label='Buscar empleado'
              variant='outlined'
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
    </>

  )
}

export default Formulario
