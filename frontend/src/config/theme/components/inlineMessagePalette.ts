import { InlineMessagePalette } from '@fattureincloud/fic-design-system/dist/components/inlineMessage'

import { ficPalette } from '../palette'

export const inlineMessagePalette: InlineMessagePalette = {
  error: {
    background: ficPalette.red[50],
    title: ficPalette.red[500],
    content: ficPalette.red[400],
    border: ficPalette.red[100],
  },
  warning: {
    background: ficPalette.yellow[50],
    title: ficPalette.red[400],
    content: ficPalette.red[300],
    border: ficPalette.yellow[100],
  },
  success: {
    background: ficPalette.green[50],
    title: ficPalette.green[500],
    content: ficPalette.green[400],
    border: ficPalette.green[100],
  },
  info: {
    background: ficPalette.blue[50],
    title: ficPalette.blue[500],
    content: ficPalette.blue[400],
    border: ficPalette.blue[100],
  },
  standard: {
    background: ficPalette.grey[100],
    title: ficPalette.black[100],
    content: ficPalette.black[80],
    border: ficPalette.black[8],
  },
}
