import { CardPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const cardPalette: CardPalette = {
  transparent: {
    primary: {
      background: 'transparent',
      border: ficPalette.grey[300],
    },
    secondary: {
      background: 'transparent',
      border: ficPalette.grey[300],
    },
  },
  grey: {
    primary: {
      background: ficPalette.white[100],
      border: ficPalette.grey[100],
    },
    secondary: {
      background: ficPalette.grey[50],
      border: ficPalette.grey[100],
    },
  },
  yellow: {
    primary: {
      background: ficPalette.yellow[500],
      border: ficPalette.yellow[500],
    },
    secondary: {
      background: ficPalette.yellow[50],
      border: ficPalette.yellow[500],
    },
  },
  red: {
    primary: {
      background: ficPalette.red[500],
      border: ficPalette.red[500],
    },
    secondary: {
      background: ficPalette.red[50],
      border: ficPalette.red[500],
    },
  },
  blue: {
    primary: {
      background: ficPalette.blue[500],
      border: ficPalette.blue[500],
    },
    secondary: {
      background: ficPalette.blue[50],
      border: ficPalette.blue[500],
    },
  },
  green: {
    primary: {
      background: ficPalette.green[500],
      border: ficPalette.green[500],
    },
    secondary: {
      background: ficPalette.green[50],
      border: ficPalette.green[500],
    },
  },
}
