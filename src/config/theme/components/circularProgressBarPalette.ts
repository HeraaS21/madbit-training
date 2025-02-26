import { CircularProgressBarPalette } from '@fattureincloud/fic-design-system/dist/components/circularProgressBar'

// This color belongs to the right palette
// TODO: Import colors from their color's file once the palette is added in the repo
const circularProgressBarPalette: CircularProgressBarPalette = {
  standard: {
    path: '#0095D5',
    trail: '#F7F8F8',
    trailBorder: '#E8F7FE',
  },
  warning: {
    path: '#D77500',
    trail: '#FFFAE6',
    trailBorder: '#FFF0B3',
  },
  error: {
    path: '#B52400',
    trail: '#FFF1EE',
    trailBorder: '#FFB5A2',
  },
}

export default circularProgressBarPalette
