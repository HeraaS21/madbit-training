import { InputHelperPalette } from '@fattureincloud/fic-design-system'
import {
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faTimesCircle,
} from '@fortawesome/pro-solid-svg-icons'

import { ficPalette } from '../palette'

export const inputHelperPalette: InputHelperPalette = {
  normal: {
    color: ficPalette.black[100],
    background: 'transparent',
    defaultIcon: null,
  },
  error: {
    color: ficPalette.red[900],
    background: ficPalette.red[50],
    defaultIcon: { icon: faTimesCircle },
  },
  warning: {
    color: ficPalette.yellow[900],
    background: ficPalette.yellow[50],
    defaultIcon: { icon: faExclamationTriangle },
  },
  info: {
    color: ficPalette.blue[900],
    background: ficPalette.blue[50],
    defaultIcon: { icon: faInfoCircle },
  },
  success: {
    color: ficPalette.green[900],
    background: ficPalette.green[50],
    defaultIcon: { icon: faCheckCircle },
  },
}
