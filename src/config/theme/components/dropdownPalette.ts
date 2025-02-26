import { DropdownPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const dropdownPalette: DropdownPalette = {
  color: ficPalette.grey[900],
  backgroundColor: ficPalette.white[100],
  title: {
    color: ficPalette.grey[700],
  },
  separator: {
    color: ficPalette.grey[100],
  },
  shortcut: {
    color: ficPalette.grey[500],
  },
  items: {
    active: {
      color: ficPalette.black[100],
      background: ficPalette.blue[50],
      hoverBackground: ficPalette.grey[100],
    },
    notActive: {
      default: {
        color: ficPalette.black[100],
        background: 'transparent',
        hoverBackground: ficPalette.grey[100],
      },
      danger: {
        color: ficPalette.red[500],
        background: 'transparent',
        hoverBackground: ficPalette.red[50],
      },
      success: {
        color: ficPalette.green[500],
        background: 'transparent',
        hoverBackground: ficPalette.green[50],
      },
      warning: {
        color: ficPalette.yellow[500],
        background: 'transparent',
        hoverBackground: ficPalette.yellow[50],
      },
      link: {
        color: ficPalette.blue[500],
        background: 'transparent',
        hoverBackground: ficPalette.blue[50],
      },
    },
  },
}
