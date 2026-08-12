import './App.css'

import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'

import DishTable from './components/DishTable'
import Student from './components/Student'
import Summary from './components/Summary'
import { type Dish } from './interface/Dish'

function App() {
  const [dishes, setDishes] = useState<Dish[]>([])
  const url = 'https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json'

  // PENDIENTE: Variable de estado y la función de modificación.
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        // PENDIENTE: 
        // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
        // Al recibir la respuesta, actualice la variable de estado
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`)
        }

        const data: Dish[] = await response.json()
        setDishes(data)
      } catch (error) {
        console.error('No se pudieron cargar los platos:', error)
        setDishes([])
      }
    }

    void fetchDishes()
  }, [url])

  return (
    <Grid container spacing={4} className="app-shell">
      {/* Student */}
      <Grid size={{ xs: 12 }}>
        {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
        <Student apellidos="Ortiz" nombres="Ariel" paralelo={102} />
      </Grid>

      {/* DishTable */}
      <Grid size={{ xs: 12 }}>
        <Summary data={dishes} />
      </Grid>

      <Grid size={{ xs: 12 }}>
        {/* PENDIENTE: Envíe la variable de estado como prop */}
        <DishTable data={dishes} />
      </Grid>
    </Grid>
  )
}

export default App