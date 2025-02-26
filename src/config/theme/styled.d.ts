/* Transforming DefaultTheme into a type, the redeclare would not work */
/* eslint-disable @typescript-eslint/no-empty-interface */

import 'styled-components'

import { FICCustomTheme } from './index'

declare module 'styled-components' {
  export interface DefaultTheme extends FICCustomTheme {}
}
