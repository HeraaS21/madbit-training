import { ChipPalette } from '@fattureincloud/fic-design-system/dist/components/chip'

import { ficPalette } from '../palette'

export const chipPalette: ChipPalette = {
  standard: {
    color: ficPalette.black[100],
    backgroundColor: ficPalette.grey[100],
    hover: ficPalette.grey[200],
    active: ficPalette.grey[300],
  },
  success: {
    color: ficPalette.green[900],
    backgroundColor: ficPalette.green[100],
    hover: ficPalette.green[200],
    active: ficPalette.green[300],
  },
  info: {
    color: ficPalette.blue[900],
    backgroundColor: ficPalette.blue[100],
    hover: ficPalette.blue[200],
    active: ficPalette.blue[300],
  },
  warning: {
    color: ficPalette.yellow[900],
    backgroundColor: ficPalette.yellow[100],
    hover: ficPalette.yellow[200],
    active: ficPalette.yellow[300],
  },
  error: {
    color: ficPalette.red[900],
    backgroundColor: ficPalette.red[100],
    hover: ficPalette.red[200],
    active: ficPalette.red[300],
  },
}
