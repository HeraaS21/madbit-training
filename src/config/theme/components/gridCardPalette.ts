import { GridCardPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const gridCardPalette: GridCardPalette = {
  error: {
    background: ficPalette.red[50],
    iconColor: ficPalette.red[500],
    iconBackground: ficPalette.red[100],
  },
  info: {
    background: ficPalette.blue[50],
    iconColor: ficPalette.blue[500],
    iconBackground: ficPalette.blue[100],
  },
  standard: {
    background: ficPalette.white[100],
    iconColor: ficPalette.white[100],
    iconBackground: ficPalette.grey[100],
  },
  success: {
    background: ficPalette.green[50],
    iconColor: ficPalette.green[500],
    iconBackground: ficPalette.green[100],
  },
  warning: {
    background: ficPalette.yellow[50],
    iconColor: ficPalette.yellow[500],
    iconBackground: ficPalette.yellow[100],
  },
}
