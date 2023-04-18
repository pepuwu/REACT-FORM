import { Grid } from '@mui/material'
import './App.css'
import Formulario from './components/form/'
import SearchEmployee, { CardEmployed } from './components/employed'
import { useState } from 'react'

const App = () => {
  const [listaEmpleados, setListaEmpleados] = useState([])
  const [search, setSearch] = useState('')

  const handleSearchChange = (value) => {
    setSearch(value)
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Formulario guardarEmpleado={setListaEmpleados} props={listaEmpleados} />
        </Grid>
        <Grid item xs={6}>
          <SearchEmployee searchChange={handleSearchChange} />
          <CardEmployed listaEmpleados={listaEmpleados} search={search} />
        </Grid>
      </Grid>
    </div>
  )
}
export default App
