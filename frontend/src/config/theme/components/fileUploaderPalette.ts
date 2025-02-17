import { FileUploaderPalette } from '@fattureincloud/fic-design-system'
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons'
import { faUpload } from '@fortawesome/pro-duotone-svg-icons'
import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons'

import { ficPalette } from '../palette'

export const fileUploaderPalette: FileUploaderPalette = {
  default: {
    background: ficPalette.grey[50],
    borderColor: ficPalette.grey[100],
    color: ficPalette.black[100],
    secondaryColor: ficPalette.blue[500],
    icon: {
      icon: faUpload,
      color: 'blue',
    },
    text: 'Trascina qui un file per caricarlo',
    caption: 'oppure scegli un file cliccando qui',
  },
  dragging: {
    background: ficPalette.blue[500],
    borderColor: 'transparent',
    color: ficPalette.white[100],
    secondaryColor: ficPalette.white[100],
    icon: {
      icon: faUpload,
      color: 'white',
    },
    text: 'Rilascia il file per caricarlo',
    caption: null,
  },
  uploading: {
    background: ficPalette.blue[50],
    borderColor: ficPalette.blue[100],
    color: ficPalette.blue[500],
    secondaryColor: ficPalette.blue[500],
    icon: {
      icon: faCircleNotch,
      color: 'blue',
      spin: true,
    },
    text: 'Caricamento in corso...',
    caption: null,
  },
  success: {
    background: ficPalette.green[50],
    borderColor: ficPalette.green[100],
    color: ficPalette.green[500],
    secondaryColor: ficPalette.green[500],
    icon: {
      icon: faCheckCircle,
      color: 'green',
    },
    text: 'File caricato',
    caption: 'Trascina un altro file per caricarlo',
  },
  error: {
    background: ficPalette.red[50],
    borderColor: ficPalette.red[100],
    color: ficPalette.red[500],
    secondaryColor: ficPalette.red[500],
    icon: {
      icon: faTimesCircle,
      color: 'red',
    },
    text: 'Errore di caricamento',
    caption: 'Trascina un altro file per caricarlo',
  },
  disabled: {
    background: ficPalette.grey[50],
    borderColor: 'transparent',
    color: ficPalette.grey[200],
    secondaryColor: ficPalette.grey[300],
    icon: {
      icon: faUpload,
      color: 'grey',
    },
    text: 'Trascina qui un file per caricarlo',
    caption: 'oppure scegli un file cliccando qui',
  },
}
