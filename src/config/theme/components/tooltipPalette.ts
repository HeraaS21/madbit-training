import { TooltipPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const tooltipPalette: TooltipPalette = {
  light: {
    color: ficPalette.black[100],
    background: ficPalette.white[100],
  },
  dark: {
    color: ficPalette.white[100],
    background: ficPalette.grey[900],
  },
}

export default tooltipPalette
