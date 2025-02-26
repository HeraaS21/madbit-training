import { StepperPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const stepperPalette: StepperPalette = {
  item: {
    normal: {
      color: ficPalette.grey[500],
      circleBackground: ficPalette.grey[500],
      circleTextColor: ficPalette.white[100],
    },
    active: {
      color: ficPalette.blue[500],
      circleBackground: ficPalette.blue[500],
      circleTextColor: ficPalette.white[100],
    },
    completed: {
      color: ficPalette.grey[500],
      circleBackground: ficPalette.green[500],
      circleTextColor: ficPalette.white[100],
    },
  },
}
