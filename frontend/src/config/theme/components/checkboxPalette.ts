import { CheckboxPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

const normalChecked = {
  tickColor: ficPalette.white[100],
  backgroundColor: ficPalette.blue[500],
  borderColor: ficPalette.blue[500],
}

const errorChecked = {
  tickColor: ficPalette.white[100],
  backgroundColor: ficPalette.red[500],
  borderColor: ficPalette.red[500],
}

export const checkboxPalette: CheckboxPalette = {
  input: {
    normal: {
      checked: normalChecked,
      indeterminate: normalChecked,
      unchecked: {
        tickColor: ficPalette.white[100],
        backgroundColor: 'transparent',
        borderColor: ficPalette.grey[500],
      },
    },
    error: {
      checked: errorChecked,
      indeterminate: errorChecked,
      unchecked: {
        tickColor: ficPalette.white[100],
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
