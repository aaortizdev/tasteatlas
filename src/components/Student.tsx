import Typography from '@mui/material/Typography'

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface StudentProps {
  apellidos: string
  nombres: string
  paralelo: number | string
}

export default function Student({ apellidos, nombres, paralelo }: StudentProps) {
  return (
    <>
      <Typography component="p" variant="h4" className="student-name">
        {/* PENDIENTE: Renderice los props apellidos y nombres */}
        {apellidos}, {nombres}
      </Typography>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {/* PENDIENTE: Renderice el paralelo */}
        Paralelo #{paralelo}
      </Typography>
    </>
  )
}
