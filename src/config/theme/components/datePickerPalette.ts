import { DatePickerPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const datePickerPalette: DatePickerPalette = {
  background: ficPalette.white[100],
  weekDaysNames: {
    color: ficPalette.grey[300],
  },
  days: {
    borderRadius: '100px',
    today: {
      normal: {
        background: ficPalette.blue[100],
        color: ficPalette.blue[700],
      },
      normalHover: {
        background: ficPalette.grey[100],
        color: ficPalette.blue[700],
      },
      active: {
        background: ficPalette.blue[700],
        color: ficPalette.white[100],
      },
      activeHover: {
        background: ficPalette.blue[700],
        color: ficPalette.white[100],
      },
    },
    inMonth: {
      normal: {
        background: 'transparent',
        color: ficPalette.black[80],
      },
      normalHover: {
        background: ficPalette.grey[100],
        color: ficPalette.black[80],
      },
      active: {
        background: ficPalette.blue[700],
        color: ficPalette.white[100],
      },
      activeHover: {
        background: ficPalette.blue[700],
        color: ficPalette.white[100],
      },
      disabled: {
        background: 'transparent',
        color: ficPalette.grey[100],
      },
    },
    outMonth: {
      normal: {
        background: 'transparent',
        color: ficPalette.black[16],
      },
      normalHover: {
        background: ficPalette.grey[100],
        color: ficPalette.black[80],
      },
    },
    weekend: {
      normal: {
        background: 'transparent',
        color: ficPalette.grey[300],
      },
      normalHover: {
        background: ficPalette.grey[100],
        color: ficPalette.black[80],
      },
      active: {
        background: ficPalette.blue[700],
        color: ficPalette.white[100],
      },
      activeHover: {
        background: ficPalette.blue[700],
        color: ficPalette.white[100],
      },
    },
  },
  item: {
    borderRadius: '1.5em',
    normal: {
      background: 'transparent',
      color: ficPalette.black[80],
    },
    normalHover: {
      background: ficPalette.grey[100],
      color: ficPalette.black[80],
    },
    active: {
      background: ficPalette.blue[700],
      color: ficPalette.white[100],
    },
    activeHover: {
      background: ficPalette.blue[700],
      color: ficPalette.white[100],
    },
    disabled: {
      background: 'transparent',
      color: ficPalette.grey[100],
    },
  },
}
