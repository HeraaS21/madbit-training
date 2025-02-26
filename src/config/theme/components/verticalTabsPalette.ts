import { VerticalTabsPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

const verticalTabsPalette: VerticalTabsPalette = {
  error: {
    active: {
      color: ficPalette.white[100],
      background: ficPalette.red[500],
      hoverBackground: ficPalette.red[700],
      activeBackground: ficPalette.red[900],
    },
    normal: {
      color: ficPalette.red[500],
      background: ficPalette.grey[50],
      hoverBackground: ficPalette.grey[100],
      activeBackground: ficPalette.grey[200],
    },
  },
  info: {
    active: {
      color: ficPalette.white[100],
      background: ficPalette.blue[500],
      hoverBackground: ficPalette.blue[700],
      activeBackground: ficPalette.blue[900],
    },
    normal: {
      color: ficPalette.blue[500],
      background: ficPalette.grey[50],
      hoverBackground: ficPalette.grey[100],
      activeBackground: ficPalette.grey[200],
    },
  },
  standard: {
    active: {
      color: ficPalette.white[100],
      background: ficPalette.blue[500],
      hoverBackground: ficPalette.blue[700],
      activeBackground: ficPalette.blue[900],
    },
    normal: {
      color: ficPalette.grey[800],
      background: ficPalette.grey[50],
      hoverBackground: ficPalette.grey[200],
      activeBackground: ficPalette.grey[200],
    },
  },
  success: {
    active: {
      color: ficPalette.white[100],
      background: ficPalette.blue[500],
      hoverBackground: ficPalette.blue[700],
      activeBackground: ficPalette.blue[900],
    },
    normal: {
      color: ficPalette.grey[500],
      background: ficPalette.grey[50],
      hoverBackground: ficPalette.grey[100],
      activeBackground: ficPalette.grey[200],
    },
  },
  warning: {
    active: {
      color: ficPalette.black[100],
      background: ficPalette.yellow[500],
      hoverBackground: ficPalette.yellow[700],
      activeBackground: ficPalette.yellow[900],
    },
    normal: {
      color: ficPalette.yellow[500],
      background: ficPalette.grey[50],
      hoverBackground: ficPalette.grey[100],
      activeBackground: ficPalette.grey[200],
    },
  },
}

export default verticalTabsPalette
