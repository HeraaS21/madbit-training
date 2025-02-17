import { TablePalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const tablePalette: TablePalette = {
  header: {
    background: ficPalette.grey[50],
    color: ficPalette.black[100],
  },
  rows: {
    normal: {
      background: ficPalette.white[100],
      color: ficPalette.black[100],
    },
    hover: {
      color: ficPalette.black[100],
      background: ficPalette.blue[50],
    },
    selected: {
      color: ficPalette.black[100],
      background: ficPalette.blue[100],
    },
    disabled: {
      color: ficPalette.grey[800],
      background: ficPalette.grey[100],
    },
  },
  selectedRowsCount: {
    background: ficPalette.yellow[50],
    color: ficPalette.black[100],
    resetButtonColor: 'blue',
  },
  actions: {
    colors: {
      default: 'blue',
      danger: 'red',
      success: 'green',
      warning: 'yellow',
      link: 'blue',
    },
    dropdownTriggerColor: 'blue',
  },
  pagination: {
    numbers: {
      normal: {
        background: ficPalette.white[100],
        color: ficPalette.black[100],
      },
      hover: {
        background: ficPalette.blue[50],
        color: ficPalette.blue[500],
      },
      active: {
        background: ficPalette.blue[500],
        color: ficPalette.white[100],
      },
    },
    buttons: 'blue',
  },
}
