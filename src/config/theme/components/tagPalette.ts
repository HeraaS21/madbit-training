import { TagPalette } from '@fattureincloud/fic-design-system/dist/components/tag/tagPalette'

import { ficPalette } from '../palette'

export const tagPalette: TagPalette = {
  full: {
    standard: {
      color: ficPalette.white[100],
      backgroundColor: ficPalette.grey[600],
    },
    warning: {
      color: ficPalette.white[100],
      backgroundColor: ficPalette.yellow[500],
    },
    success: {
      color: ficPalette.white[100],
      backgroundColor: ficPalette.green[500],
    },
    info: {
      color: ficPalette.white[100],
      backgroundColor: ficPalette.blue[500],
    },
    error: {
      color: ficPalette.white[100],
      backgroundColor: ficPalette.red[500],
    },
  },
  soft: {
    standard: {
      color: ficPalette.grey[900],
      backgroundColor: ficPalette.grey[100],
    },
    warning: {
      color: ficPalette.yellow[900],
      backgroundColor: ficPalette.yellow[50],
    },
    success: {
      color: ficPalette.green[900],
      backgroundColor: ficPalette.green[50],
    },
    info: {
      color: ficPalette.blue[900],
      backgroundColor: ficPalette.blue[50],
    },
    error: {
      color: ficPalette.red[900],
      backgroundColor: ficPalette.red[50],
    },
  },
  text: {
    standard: {
      backgroundColor: 'transparent',
      color: ficPalette.grey[800],
    },
    warning: {
      backgroundColor: 'transparent',
      color: ficPalette.yellow[500],
    },
    success: {
      backgroundColor: 'transparent',
      color: ficPalette.green[500],
    },
    info: {
      backgroundColor: 'transparent',
      color: ficPalette.indigo[500],
    },
    error: {
      backgroundColor: 'transparent',
      color: ficPalette.red[500],
    },
  },
}

export default tagPalette
