import { TipPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const tipPalette: TipPalette = {
  standard: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.grey[400],
  },
  warning: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.yellow[400],
  },
  success: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.green[400],
  },
  info: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.blue[400],
  },
  error: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.red[400],
  },
}
