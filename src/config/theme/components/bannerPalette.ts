import { BannerPalette } from '@fattureincloud/fic-design-system/dist/components/banner'

import { ficPalette } from '../palette'

export const bannerPalette: BannerPalette = {
  standard: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.blue[500],
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
    color: ficPalette.black[100],
    backgroundColor: ficPalette.grey[200],
  },
  error: {
    color: ficPalette.white[100],
    backgroundColor: ficPalette.red[500],
  },
}
