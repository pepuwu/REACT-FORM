import React from 'react'
import { Box, Card, Grid, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  navBuscarEmpleado: {
    width: '900px',
    margin: 'auto',
    marginTop: '20px',
    backgroundColor: '#FEFBEA',
    borderRadius: '10px'
  },
  cardEmpleado: {
    backgroundColor: '#FEFBEA',
    maxWidth: '350px',
    margin: 'auto',
    marginTop: '30px',
    padding: '25px 70px 25px 70px',
    borderRadius: '10px'
  }

})

const SearchEmployed = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Box component='form' className={classes.navBuscarEmpleado}>
        <TextField
          id='search-input'
          label='Buscar empleado'
          variant='outlined'
          fullWidth
        />
      </Box>
    </Grid>
  )
}

export const CardEmployed = ({ listaEmpleados }) => {
  const classes = useStyles()

  if (listaEmpleados.length > 0) {
    return (
      <Grid container>
        {listaEmpleados.map((empleado) => (
          <Card key={empleado.id} className={classes.cardEmpleado}>
            <div>
              <Typography variant='h4' component='h1'>
                {empleado.nombre} {empleado.apellido}
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='body1' component='p'>
                  {empleado.rol}
                </Typography>
                <Typography variant='body1' component='p' color={empleado.estado === 'Activo' ? 'green' : 'red'}>
                  ◉{empleado.estado}
                </Typography>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    )
  } else { return (null) }
}

export default SearchEmployed
