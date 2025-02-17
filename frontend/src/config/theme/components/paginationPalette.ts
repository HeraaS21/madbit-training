import { PaginationPalette } from '@fattureincloud/fic-design-system/dist/components/pagination'

import { ficPalette } from '../palette'

export const paginationPalette: PaginationPalette = {
  buttons: {
    disabled: {
      backgroundColor: ficPalette.white[100],
      color: ficPalette.grey[800],
    },
    normal: {
      backgroundColor: ficPalette.white[100],
      color: ficPalette.blue[500],
    },
  },
  numbers: {
    active: {
      backgroundColor: ficPalette.blue[500],
      color: ficPalette.white[100],
    },
    hover: {
      backgroundColor: ficPalette.blue[50],
      color: ficPalette.blue[500],
    },
    normal: {
      backgroundColor: ficPalette.white[100],
      color: ficPalette.black[100],
    },
  },
}
