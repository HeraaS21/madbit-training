import { BadgePalette } from '@fattureincloud/fic-design-system/dist/components/badge'

import { ficPalette } from '../palette'

export const badgePalette: BadgePalette = {
  standard: {
    color: ficPalette.grey[900],
    backgroundColor: ficPalette.grey[50],
  },
  warning: {
    color: ficPalette.yellow[900],
    backgroundColor: ficPalette.yellow[50],
  },
  success: {
    color: ficPalette.green[900],
    backgroundColor: ficPalette.green[50],
  },
  info: {
    color: ficPalette.blue[900],
    backgroundColor: ficPalette.blue[50],
  },
  error: {
    color: ficPalette.red[900],
    backgroundColor: ficPalette.red[50],
  },
}
