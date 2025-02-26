import { Theme } from '@fattureincloud/fic-design-system'

import { badgePalette } from './components/badgePalette'
import { bannerPalette } from './components/bannerPalette'
import { buttonPalette } from './components/buttonPalette'
import { cardPalette } from './components/cardPalette'
import { checkboxPalette } from './components/checkboxPalette'
import { chipPalette } from './components/chipPalette'
import circularProgressBarPalette from './components/circularProgressBarPalette'
import closableCardPalette from './components/closableCardPalette'
import { datePickerPalette } from './components/datePickerPalette'
import { dropdownPalette } from './components/dropdownPalette'
import { fileUploaderPalette } from './components/fileUploaderPalette'
import { floatingBadgePalette } from './components/floatingBadgePalette'
import { gridCardPalette } from './components/gridCardPalette'
import { iconBackgroundPalette } from './components/iconBackgroundPalette'
import { iconButtonPalette } from './components/iconButtonPalette'
import { iconPalette } from './components/iconPalette'
import { inlineMessagePalette } from './components/inlineMessagePalette'
import { inputHelperPalette } from './components/inputHelperPalette'
import { inputTextPalette } from './components/inputTextPalette'
import { labelPalette } from './components/labelPalette'
import { microTagPalette } from './components/microTagPalette'
import monthlyTabPalette from './components/monthlyTabPalette'
import { paginationPalette } from './components/paginationPalette'
import { progressBarPalette } from './components/progressBarPalette'
import { radioPalette } from './components/radioPalette'
import { segmentButtonPalette } from './components/segmentButtonPalette'
import { selectPalette } from './components/selectPalette'
import { sidebarItemPalette } from './components/sidebarItemPalette'
import { stepperPalette } from './components/stepperPalette'
import { tablePalette } from './components/tablePalette'
import { tagPalette } from './components/tagPalette'
import { textAreaPalette } from './components/textAreaPalette'
import { tipPalette } from './components/tipPalette'
import { toastPalette } from './components/toastPalette'
import { tooltipPalette } from './components/tooltipPalette'
import verticalTabsPalette from './components/verticalTabsPalette'
import { ficPalette } from './palette'
import spacing, { FICSpacing } from './spacing/spacing'

export type FICCustomTheme = Theme & {
  spacing: FICSpacing
}

export const theme: FICCustomTheme = {
  components: {
    badge: badgePalette,
    gridCard: gridCardPalette,
    banner: bannerPalette,
    button: buttonPalette,
    card: cardPalette,
    checkbox: checkboxPalette,
    chip: chipPalette,
    datePicker: datePickerPalette,
    dropdown: dropdownPalette,
    fileUploader: fileUploaderPalette,
    floatingBadge: floatingBadgePalette,
    icon: iconPalette,
    iconBackground: iconBackgroundPalette,
    iconButton: iconButtonPalette,
    inlineMessage: inlineMessagePalette,
    inputHelper: inputHelperPalette,
    inputText: inputTextPalette,
    label: labelPalette,
    microTag: microTagPalette,
    pagination: paginationPalette,
    progressBar: progressBarPalette,
    radio: radioPalette,
    segmentButton: segmentButtonPalette,
    select: selectPalette,
    sidebarItem: sidebarItemPalette,
    stepper: stepperPalette,
    table: tablePalette,
    tag: tagPalette,
    textArea: textAreaPalette,
    tip: tipPalette,
    toast: toastPalette,
    tooltip: tooltipPalette,
    circularProgressBar: circularProgressBarPalette,
    verticalTabs: verticalTabsPalette,
    monthlyTab: monthlyTabPalette,
    closableCard: closableCardPalette,
  },
  palette: ficPalette,
  spacing,
}
