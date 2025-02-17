import { MicroTagPalette } from '@fattureincloud/fic-design-system/dist/components/microTag/microTagPalette'

import { ficPalette } from '../palette'

export const microTagPalette: MicroTagPalette = {
  error: {
    backgroundColor: ficPalette.red[50],
    color: ficPalette.red[500],
  },
  info: {
    backgroundColor: ficPalette.blue[50],
    color: ficPalette.blue[500],
  },
  standard: {
    backgroundColor: ficPalette.grey[100],
    color: ficPalette.grey[500],
  },
  success: {
    backgroundColor: ficPalette.green[50],
    color: ficPalette.green[500],
  },
  warning: {
    backgroundColor: ficPalette.yellow[50],
    color: ficPalette.yellow[500],
  },
}
