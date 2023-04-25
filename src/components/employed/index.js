import React from 'react'
import { Box, Card, Chip, Grid, Stack, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  navBuscarEmpleado: {
    width: '900px',
    marginLeft: '10px',
    marginTop: '20px',
    backgroundColor: '#FEFBEA',
    borderRadius: '10px'
  },
  cardEmpleado: {
    backgroundColor: '#FEFBEA',
    textAlign: 'center',
    width: '250px',
    marginLeft: '50px',
    marginTop: '30px',
    padding: '25px 70px 25px 70px',
    borderRadius: '10px',
    minHeight: '80px'
  }
})

const SearchEmployee = ({ searchChange }) => {
  const classes = useStyles()

  const handleChange = (e) => {
    const { value } = e.target
    searchChange(value)
  }

  return (
    <Grid container>
      <Box component='form' className={classes.navBuscarEmpleado}>
        <TextField
          id='search-input'
          label='Buscar empleado'
          variant='outlined'
          fullWidth
          onChange={handleChange}
        />
      </Box>
    </Grid>
  )
}
export const CardEmployed = ({ listaEmpleados, search }) => {
  const classes = useStyles()
  const filteredList = listaEmpleados.filter((empleado) => (((empleado.nombre + ' ' + empleado.apellido).includes(search.toLowerCase()))))

  if (listaEmpleados.length > 0) {
    return (
      <Grid container>
        {filteredList.map((empleado) => (
          <Card key={empleado.id} className={classes.cardEmpleado}>
            <div className={classes.cardContent}>
              <Typography variant='h5' component='h1' style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                {empleado.nombre} {empleado.apellido}
              </Typography>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '15px' }}>
                <Typography variant='body1' component='p'>
                  {empleado.rol}
                </Typography>
                <Stack direction='row' spacing={1}>
                  <Chip label={empleado.estado} color={empleado.estado === 'Activo' ? 'success' : 'error'} />
                </Stack>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    )
  } else {
    return null
  }
}

export default SearchEmployee
