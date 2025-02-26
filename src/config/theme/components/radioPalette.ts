import { RadioPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

const normalChecked = {
  backgroundColor: ficPalette.blue[500],
  borderColor: ficPalette.blue[500],
}

const errorChecked = {
  backgroundColor: ficPalette.red[500],
  borderColor: ficPalette.red[500],
}

export const radioPalette: RadioPalette = {
  input: {
    normal: {
      checked: normalChecked,
      unchecked: {
        backgroundColor: 'transparent',
        borderColor: ficPalette.grey[500],
      },
    },
    error: {
      checked: errorChecked,
      unchecked: {
        backgroundColor: 'transparent',
        borderColor: ficPalette.red[500],
      },
    },
  },
  label: {
    normal: ficPalette.black[100],
    error: ficPalette.red[500],
  },
}
