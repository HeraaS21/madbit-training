import { ToastPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const toastPalette: ToastPalette = {
  error: {
    background: ficPalette.red[400],
    title: ficPalette.white[100],
    content: ficPalette.red[50],
  },
  warning: {
    background: ficPalette.yellow[400],
    title: ficPalette.white[100],
    content: ficPalette.yellow[50],
  },
  success: {
    background: ficPalette.green[400],
    title: ficPalette.white[100],
    content: ficPalette.green[50],
  },
  info: {
    background: ficPalette.blue[400],
    title: ficPalette.white[100],
    content: ficPalette.blue[50],
  },
  standard: {
    background: ficPalette.grey[900],
    title: ficPalette.white[100],
    content: ficPalette.grey[100],
  },
}
