import { MonthlyTabPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

// TOOD: Implementare colori della nuova palette qui, per ora usiamo la vecchia!

const monthlyTabPalette: MonthlyTabPalette = {
  standard: {
    borderBottom: ficPalette.grey[300],
    headerColor: ficPalette.grey[600],
    backgroundColor: ficPalette.white[100],
  },
  selected: {
    borderBottom: ficPalette.blue[800],
    backgroundColor: ficPalette.grey[50],
  },
  isCurrentMonth: {
    headerColor: ficPalette.blue[600],
  },
  fill: ficPalette.blue[100],
  border: ficPalette.grey[100],
  amountColor: ficPalette.blue[600],
  monthColor: ficPalette.grey[800],
  expenseColor: ficPalette.grey[800],
}

export default monthlyTabPalette
