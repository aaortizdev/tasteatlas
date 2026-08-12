import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { type Dish } from '../interface/Dish'

interface SummaryProps {
  data: Dish[]
}

export default function Summary({ data }: SummaryProps) {
  const total = data.length
  const promedio = total
    ? (data.reduce((sum, dish) => sum + dish.rating, 0) / total).toFixed(2)
    : '0.00'
  const topDish = data[0]?.title ?? 'Sin datos'

  return (
    <div className="summary">
      <Paper className="summary-card" elevation={2}>
        <Typography variant="overline" color="textSecondary">
          Total de platos
        </Typography>
        <Typography variant="h4">{total}</Typography>
      </Paper>

      <Paper className="summary-card" elevation={2}>
        <Typography variant="overline" color="textSecondary">
          Promedio
        </Typography>
        <Typography variant="h4">{promedio}</Typography>
      </Paper>

      <Paper className="summary-card" elevation={2}>
        <Typography variant="overline" color="textSecondary">
          Top 1
        </Typography>
        <Typography variant="h6">{topDish}</Typography>
      </Paper>
    </div>
  )
}
