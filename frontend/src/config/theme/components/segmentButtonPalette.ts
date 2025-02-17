import { SegmentButtonPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const segmentButtonPalette: SegmentButtonPalette = {
  selected: {
    primary: ficPalette.blue[500],
    secondary: ficPalette.blue[100],
    background: ficPalette.white[100],
    border: ficPalette.blue[500],
  },
  unselected: {
    primary: ficPalette.black[100],
    secondary: ficPalette.grey[100],
    background: ficPalette.white[100],
    border: ficPalette.grey[200],
  },
}
