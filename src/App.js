import { Grid } from '@mui/material'
import './App.css'
import Formulario from './components/form/'
import SearchEmployed, { CardEmployed } from './components/employed'
import { useState } from 'react'

const App = () => {
  const [listaEmpleados, setListaEmpleados] = useState([])
  return (
    <div className='wallpaper'>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Formulario guardarEmpleado={setListaEmpleados} props={listaEmpleados} />
        </Grid>
        <Grid item xs={6}>
          <SearchEmployed />
          <CardEmployed listaEmpleados={listaEmpleados} />
        </Grid>
      </Grid>

    </div>
  )
}
export default App
