import { SidebarItemPalette } from '@fattureincloud/fic-design-system'

import { ficPalette } from '../palette'

export const sidebarItemPalette: SidebarItemPalette = {
  normal: {
    color: ficPalette.black[100],
    background: 'transparent',
    hoverColor: ficPalette.black[100],
    hoverBackground: ficPalette.grey[100],
    dropdownHover: 'rgba(0,0,0,0.16)',
    dropdownActive: 'rgba(0,0,0,0.32)',
  },
  active: {
    color: ficPalette.white[100],
    background: ficPalette.blue[500],
    hoverColor: ficPalette.white[100],
    hoverBackground: ficPalette.blue[500],
    dropdownHover: 'rgba(255,255,255,0.16)',
    dropdownActive: 'rgba(255,255,255,0.32)',
  },
  disabled: {
    color: ficPalette.grey[300],
    background: ficPalette.grey[50],
    hoverColor: ficPalette.grey[300],
    hoverBackground: ficPalette.grey[100],
    dropdownHover: 'transparent',
    dropdownActive: 'transparent',
  },
}
