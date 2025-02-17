import { FloatingBadgePalette } from '@fattureincloud/fic-design-system/dist/components/floatingBadge'

import { ficPalette } from '../palette'

export const floatingBadgePalette: FloatingBadgePalette = {
  borderRadius: '12px',
  standard: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.grey[500],
  },
  warning: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.yellow[500],
  },
  success: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.green[500],
  },
  info: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.blue[500],
  },
  error: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.red[500],
  },
  disabled: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.grey[200],
  },
}
