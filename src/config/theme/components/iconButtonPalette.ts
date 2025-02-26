import { IconButtonPalette } from '@fattureincloud/fic-design-system/dist/components/buttons/iconButton/iconButtonPalette'

import { ficPalette } from '../palette'

export const iconButtonPalette: IconButtonPalette = {
  primary: {
    blue: {
      normal: ficPalette.blue[200],
      hover: ficPalette.blue[500],
    },
    red: {
      normal: ficPalette.red[200],
      hover: ficPalette.red[500],
    },
    green: {
      normal: ficPalette.green[200],
      hover: ficPalette.green[500],
    },
    yellow: {
      normal: ficPalette.yellow[200],
      hover: ficPalette.yellow[500],
    },
    disabled: {
      normal: ficPalette.grey[200],
      hover: ficPalette.grey[200],
    },
  },
  secondary: {
    blue: {
      normal: ficPalette.blue[200],
      hover: ficPalette.white[100],
    },
    red: {
      normal: ficPalette.red[200],
      hover: ficPalette.white[100],
    },
    green: {
      normal: ficPalette.green[200],
      hover: ficPalette.white[100],
    },
    yellow: {
      normal: ficPalette.yellow[200],
      hover: ficPalette.white[100],
    },
    disabled: {
      normal: ficPalette.grey[200],
      hover: ficPalette.grey[200],
    },
  },
  defaultType: 'primary',
  defaultColor: 'blue',
}
