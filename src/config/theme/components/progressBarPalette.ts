import { ProgressBarPalette } from '@fattureincloud/fic-design-system/dist/components/progressbar'

import { ficPalette } from '../palette'

export const progressBarPalette: ProgressBarPalette = {
  info: {
    backgroundColor: ficPalette.blue[50],
    borderColor: ficPalette.blue[300],
    barColor: ficPalette.blue[500],
  },
  success: {
    backgroundColor: ficPalette.green[50],
    borderColor: ficPalette.green[300],
    barColor: ficPalette.green[500],
  },
  warning: {
    backgroundColor: ficPalette.yellow[50],
    borderColor: ficPalette.yellow[300],
    barColor: ficPalette.yellow[500],
  },
  error: {
    backgroundColor: ficPalette.red[50],
    borderColor: ficPalette.red[300],
    barColor: ficPalette.red[500],
  },
  standard: {
    backgroundColor: ficPalette.grey[50],
    borderColor: ficPalette.grey[300],
    barColor: ficPalette.grey[500],
  },
}
