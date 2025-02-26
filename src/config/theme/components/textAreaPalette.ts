import { TextAreaPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const textAreaPalette: TextAreaPalette = {
  normal: {
    background: ficPalette.white[100],
    color: ficPalette.black[100],
    borderColor: ficPalette.grey[500],
  },
  normalFocused: {
    background: ficPalette.white[100],
    color: ficPalette.black[100],
    borderColor: ficPalette.blue[300],
  },
  success: {
    background: ficPalette.green[50],
    color: ficPalette.black[100],
    borderColor: ficPalette.green[300],
  },
  warning: {
    background: ficPalette.yellow[50],
    color: ficPalette.black[100],
    borderColor: ficPalette.yellow[300],
  },
  error: {
    background: ficPalette.red[50],
    color: ficPalette.black[100],
    borderColor: ficPalette.red[300],
  },
  disabled: {
    background: ficPalette.grey[100],
    color: ficPalette.black[16],
    borderColor: 'transparent',
  },
}
